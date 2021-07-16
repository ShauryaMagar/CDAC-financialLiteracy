import React from 'react';
import Fire from './house.png'
import './Level7.css'
import {useHistory} from 'react-router-dom';

const Seven = ()=>{
    const history = useHistory();
    const [isLoaded,setIsLoaded]=React.useState(false);
    const [retrievedObject,setRetrievedObject]=React.useState({});
    const [passbook,setPassbook]=React.useState();
    const [ins,setIns]=React.useState(false);
    React.useEffect(()=>{
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setPassbook(retrievedObj.passbook);
        setIns(retrievedObj.insurance.homeIns.purchased);
        setIsLoaded(true);
    },[]);
    const own=()=>{
        setTimeout(()=>{
            history.push('/start');
        },1000)
    }
    const notOwn=()=>{
        let obj12=passbook;
        let obj={
            name:'House repair expenses',
            type:'debit',
            amount:10000
        }
        obj12.push(obj);
        setPassbook(obj12);
        retrievedObject.passbook=passbook
        var temp= retrievedObject.moneyInHand[retrievedObject.moneyInHand.length-1];
        var update= parseInt(temp) -10000;
        retrievedObject.moneyInHand.push(update);
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        setTimeout(() => {
            history.push('/moreFire');
        }, 1000)
    }
    if(ins){
        return (
        <>
        <div className="container-fluid house-card">
            <div className="row justify-content-center" style={{paddingTop:'2rem'}}>
                <div className="col-7" style={{backgroundColor:'',color:'white',textAlign:'center',padding:'2rem'}}>
                    <div >
                        <h1><strong>House Caught Fire !</strong></h1>
                    </div>
                    <div>
                        <h4>
                        There was a short-circuit in your kitchen causing a fire in your house. <br/>
                            The cost of repairing the damages is Rs.10,000.
                            However,
                            if you have a House Insurance, the expense is reduced to Rs 0
                        </h4>
                    </div>
                    <div>
                        <img src={Fire} alt="House fire"/>
                    </div>
                    <div>
                        <h4>
                            Congratulations! You already had an insurance, so you don't have to pay any amount.<br/>
                            <button onClick={own} className="btn btn-dark">Click here to continue</button>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    }else{
        return (
        <>
        <div className="container-fluid house-card">
            <div className="row justify-content-center" style={{paddingTop:'2rem'}}>
                <div className="col-7" style={{backgroundColor:'',color:'white',textAlign:'center',padding:'2rem'}}>
                    <div >
                        <h1><strong>House Caught Fire !</strong></h1>
                    </div>
                    <div>
                        <h4>
                            There was a short-circuit in your kitchen causing a fire in your house. <br/>
                            The cost of repairing the damages is Rs.10,000.
                            However,
                            if you have a House Insurance, the expense is reduced to Rs 0
                            
                        </h4>
                    </div>
                    <div>
                        <img src={Fire} alt="Car accident"/>
                    </div>
                    <br/>
                    <div>
                        <h4>
                            You didn't have an insurance. As a result, you'll have to pay Rs 10,000 to the bank
                            <button onClick={notOwn} className="btn btn-dark">Click here to continue</button>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        </>
        )}
        
}

export default Seven;