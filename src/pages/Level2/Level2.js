import React from 'react';
import Car from './images/car.png'
import {useHistory} from 'react-router-dom';
import CarAnimation from './images/car-anim.png'
import "./Level2.css"
import Boom from './images/bubble-chat.png'
import Boom1 from './images/explosion.png'
import Spark from './images/explosion (1).png'

const Two = ()=>{
    const history = useHistory();
    const [isLoaded,setIsLoaded]=React.useState(false);
    const [retrievedObject,setRetrievedObject]=React.useState({});
    const [passbook,setPassbook]=React.useState();
    const [ins,setIns]=React.useState(false);
    var abc=isLoaded;
    abc=!abc;
    React.useEffect(()=>{
         window.onpopstate = e => {
            history.push('/');
        }
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setIns(retrievedObj.insurance.vehicleIns.purchased);
        setIsLoaded(true);
        setPassbook(retrievedObj.passbook);
    },[]);
    const own=()=>{
        setTimeout(()=>{
            history.push('/start');
        },1000)
    }
    const notOwn=()=>{
        var temp= retrievedObject.moneyInHand[retrievedObject.moneyInHand.length-1];
        let obj12=passbook;
        let obj={
            name:'Car Accident',
            type:'debit',
            amount:5000
        }
        obj12.push(obj);
        setPassbook(obj12);
        retrievedObject.passbook=passbook;
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
            <div className="row justify-content-center" style={{marginTop:'2rem'}}>
                <div className="col-2">
                <img src={Boom} alt="Car accident" className="animate__animated animate__heartBeat animate__infinite" height="200px"/>
                    <img src={Spark} alt="Car accident" className="animate__animated animate__hinge" height="160px" style={{marginLeft:'150px'}}/>
                </div>
                <div className="col-8 car-acc" style={{color:'white',textAlign:'center',padding:'2rem'}}>
                    <div >
                        <h1><strong>Car Accident</strong></h1>
                    </div>
                    <div>
                        <h4>
                            Unfortunately, your car has been damaged in an accident.
                            The cost of repairing the damages is Rs.5,000.
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
                <div className="col-2">
                    <img src={Boom1} alt="Car accident" className="animate__animated animate__heartBeat animate__infinite" height="200px"/>
                    <img src={Spark} alt="Car accident" className="animate__animated animate__hinge" height="160px" style={{marginLeft:'100px'}}/>
                </div>
            </div>
        </div>
        <div>
            <img src={CarAnimation} alt="Moving Car" className="animate__animated animate__fadeOutRightBig animate__delay-1s" height='265px' />
        </div>
        
        </>
    );
    }else{
        return (
        <>
        <div className="container-fluid" >
            <div className="row justify-content-center" style={{marginTop:'2rem'}}>
                <div className="col-2">
                    <img src={Boom} alt="Car accident" className="animate__animated animate__heartBeat animate__infinite" height="200px"/>
                    <img src={Spark} alt="Car accident" className="animate__animated animate__hinge" height="160px" style={{marginLeft:'150px'}}/>
                </div>
                <div className="col-8 car-acc" style={{color:'white',textAlign:'center',padding:'2rem'}}>
                    <div >
                        <h1><strong>Car Accident</strong></h1>
                    </div>
                    <div>
                        <h4>
                            Unfortunately, your car has been damaged in an accident.
                            The cost of repairing the damages is Rs.5000.
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
                <div className="col-2">
                    <img src={Boom1} alt="Car accident" className="animate__animated animate__heartBeat animate__infinite" height="200px"/>
                    <img src={Spark} alt="Car accident" className="animate__animated animate__hinge" height="160px" style={{marginLeft:'100px'}}/>
                </div>
            </div>
        </div>
        <div>
            <img src={CarAnimation} alt="Moving Car" className="animate__animated animate__fadeOutRightBig animate__delay-1s" height='265px' />
        </div>
        
        </>
        )}
        
}

export default Two;