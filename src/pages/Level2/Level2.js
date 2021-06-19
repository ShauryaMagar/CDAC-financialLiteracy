import React from 'react';
import Car from './images/car.png'
import {useHistory} from 'react-router-dom';
const Two = ()=>{
    const history = useHistory();
    const [isLoaded,setIsLoaded]=React.useState(false);
    const [retrievedObject,setRetrievedObject]=React.useState({});
    const [ins,setIns]=React.useState(false);
    React.useEffect(()=>{
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setIns(retrievedObj.insurance.vehicleIns.purchased);
        setIsLoaded(true);
    },[]);
    const own=()=>{
        setTimeout(()=>{
            history.push('/start');
        },1000)
    }
    const notOwn=()=>{
        var temp= retrievedObject.moneyInHand[retrievedObject.moneyInHand.length-1];
        var update= parseInt(temp) -5000;
        retrievedObject.moneyInHand.push(update);
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        setTimeout(() => {
            history.push('/start');
        }, 1000)
    }
    if(ins){
        return (
        <>
        <div className="container-fluid">
            <div className="row justify-content-center" style={{marginTop:'5rem'}}>
                <div className="col-7" style={{backgroundColor:'#bb3b0e',color:'white',textAlign:'center',padding:'2rem'}}>
                    <div >
                        <h1><strong>Car Accident</strong></h1>
                    </div>
                    <div>
                        <h4>
                            Unfortunately, your car has been damaged in an accident.
                            The cost of repairing the damages is Rs.12,000.
                            However,
                            if you have a vehicle insurance, the expense is reduced to Rs 500
                        </h4>
                    </div>
                    <div>
                        <img src={Car} alt="Car accident"/>
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
        <div className="container-fluid">
            <div className="row justify-content-center" style={{marginTop:'5rem'}}>
                <div className="col-7" style={{backgroundColor:'#bb3b0e',color:'white',textAlign:'center',padding:'2rem'}}>
                    <div >
                        <h1><strong>Car Accident</strong></h1>
                    </div>
                    <div>
                        <h4>
                            Unfortunately, your car has been damaged in an accident.
                            The cost of repairing the damages is Rs.12,000.
                            However,
                            if you have a vehicle insurance, the expense is reduced to Rs 0
                            
                        </h4>
                    </div>
                    <div>
                        <img src={Car} alt="Car accident"/>
                    </div>
                    <div>
                        <h4>
                            You didn't have an insurance. As a result, you'll have to pay Rs 5000 to the bank
                            <button onClick={notOwn} className="btn btn-dark">Click here to continue</button>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        </>
        )}
        
}

export default Two;