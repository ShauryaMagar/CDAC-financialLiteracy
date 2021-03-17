import React,{useEffect} from 'react';
import {useLocation,useHistory} from 'react-router-dom';
import Know from './images/know.png';
const SelectedOp=(props)=>{
    const location=useLocation();
    const history=useHistory();
    const selected=location.state.real;
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [money,setMoney]=React.useState(0);
    const [retrievedObject, setRetrievedObject] = React.useState({});
    useEffect(()=>{
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setMoney(retrievedObj.moneyInHand);
        setIsLoaded(true);
    },[]);
    const rightGuess=()=>{
        retrievedObject.moneyInHand=parseInt(money) +2000;
        console.log(retrievedObject)
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        history.push('/start')
    }
    const WrongGuess=()=>{
        retrievedObject.moneyInHand=parseInt(money) -2000;
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        history.push('/start')
    }
    if(!isLoaded){
        return(
            <>Loading</>
        )
    }else{
        if(!selected){
        return(
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5">
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
                        <img src={Know} style={{width:'100%'}} alt="Rbi guidelines"/>
                    </div>
                </div>
            </div>
            </>
        )
    }else
        return(
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5">
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
                        <img src={Know} style={{width:'100%'}} alt="Rbi guidelines"/>
                    </div>
                </div>
            </div>
            </>
        )
    }
    
}

export default SelectedOp;