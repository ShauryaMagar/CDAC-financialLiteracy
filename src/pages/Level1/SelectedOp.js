import React,{useEffect} from 'react';
import {useLocation,useHistory} from 'react-router-dom';
import Know from './images/know.png';
import './Level1.css'

const SelectedOp=(props)=>{
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
    },[]);
    const rightGuess=()=>{
        retrievedObject.moneyInHand.push(parseInt(money) +2000);
        let obj12=passbook;
        let obj={
            name:'Level Rewards',
            type:'credit',
            amount:2000
        }
        obj12.push(obj);
        setPassbook(obj12);
        retrievedObject.passbook=passbook;
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        history.push('/1.2')
    }
    const WrongGuess=()=>{
        retrievedObject.moneyInHand.push(parseInt(money) -2000);
        let obj12=passbook;
        let obj={
            name:'Fake Currency Scam',
            type:'debit',
            amount:2000
        }
        obj12.push(obj);
        setPassbook(obj12);
        retrievedObject.passbook=passbook;
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        history.push('/1.2')
    }
    if(!isLoaded){
        return(
            <>Loading</>
        )
    }else{
        if(!selected){
        return(
            <>
            <div className="container-fluid selected-page-right">
                <div className="row">
                    <div className="col-6">
                        <div style={{marginTop:'15rem'}}>
                            <h1>You made the right choice!</h1>
                        </div>
                        <div style={{marginTop:'1rem'}} onClick={rightGuess}>
                            <h3>You saved yourself from getting scammed by the shopkeeper.</h3>
                            <p><h3>You're awarded Rs. 2000 as reward</h3></p>
                            <p><h3>Click after you're done reading</h3></p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={Know} style={{width:'100%', marginTop:"2.2rem"}} alt="Rbi guidelines"/>
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
                            <h3>You just got scammed by the shopkeeper.</h3>
                            <p><h3>Rs. 2000 are deducted</h3></p>
                            <p><h3>Click after you're done reading</h3></p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={Know} style={{width:'100%', marginTop:"2.2rem"}} alt="Rbi guidelines"/>
                    </div>
                </div>
            </div>
            </>
        )
    }
    
}

export default SelectedOp;