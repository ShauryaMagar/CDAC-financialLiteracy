import React,{useEffect} from 'react';
import {useLocation,useHistory} from 'react-router-dom';
import Happy from './images/happy.jpg';
import Sad from './images/sad.png';

const Selection=(props)=>{
    const location=useLocation();
    const history=useHistory();
    const selected=location.state.real;
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [money,setMoney]=React.useState(0);
    const [passbook,setPassbook]=React.useState();
    const [retrievedObject, setRetrievedObject] = React.useState({});
    useEffect(()=>{
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setMoney(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
        setPassbook(retrievedObj.passbook);
        setIsLoaded(true);
        window.onpopstate = e => {
            history.push('/');
        }
    },[]);
    const rightGuess=()=>{
        retrievedObject.moneyInHand.push(parseInt(money) +1000);
        let obj12=passbook;
        let obj={
            name:'Level Rewards',
            type:'credit',
            amount:1000
        }
        obj12.push(obj);
        setPassbook(obj12);
        retrievedObject.passbook=passbook;
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        history.push('/moreFake')
    }
    const WrongGuess=()=>{
        retrievedObject.moneyInHand.push(parseInt(money) -1000);
        let obj12=passbook;
        let obj={
            name:'Fake Currency Scam',
            type:'debit',
            amount:1000
        }
        obj12.push(obj);
        setPassbook(obj12);
        retrievedObject.passbook=passbook;
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        history.push('/moreFake')
    }
    if(!isLoaded){
        return(
            <>Loading</>
        )
    }else{
        if(selected){
        return(
            <>
            <div className="container-fluid selected-page-right">
                <div className="row">
                    <div className="col-6">
                        <div style={{marginTop:'15rem'}}>
                            <h1>You made the right choice!</h1>
                        </div>
                        <div style={{marginTop:'1rem'}} onClick={rightGuess}>
                            <h3>The note was not authentic.</h3>
                            <p><h3>You're awarded Rs. 1000 as reward</h3></p>
                            <p><h3>Click after you're done reading</h3></p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={Happy} style={{width:'70%', marginTop:"2.2rem"}} alt="Rbi guidelines"/>
                        <p>
                          <h2>RBI currently issues notes of following denominations only: <br/>
                            Rs 10, Rs 20, Rs 50, Rs 100, Rs 500, Rs 2000</h2>  
                        </p>
                    </div>
                </div>
            </div>
            </>
        )
    }else
        return(
            <>
            <div className="container-fluid selected-page-wrong">
                <div className="row">
                    <div className="col-6">
                        <div style={{marginTop:'15rem'}}>
                            <h1>You made the wrong choice!</h1>
                        </div>
                        <div style={{marginTop:'1rem'}} onClick={WrongGuess}>
                            <h3>The note was not authentic.</h3>
                            <p><h3>Rs. 1000 are deducted</h3></p>
                            <p><h3>Click after you're done reading</h3></p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={Sad} style={{width:'70%', marginTop:"2.2rem"}} alt="Rbi guidelines"/>
                        <p>
                          <h2>RBI currently issues notes of following denominations only: <br/>
                            Rs 10, Rs 20, Rs 50, Rs 100, Rs 500, Rs 2000</h2>  
                        </p>
                    </div>
                </div>
            </div>
            </>
        )
    }

}

export default Selection;
