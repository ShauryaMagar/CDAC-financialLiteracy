import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import {useHistory,useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './DiceRoll.css';
const DiceRoll=()=> {
    const [isLoaded,setIsLoaded]=React.useState(false);
    const [retrievedObject,setRetrievedObject]=React.useState({});
    const [numberGot,setNumberGot]=React.useState(0);
    const [level,setLevel]=React.useState(0);
    useEffect(()=>{
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setLevel(retrievedObj.currentLevel);
        setIsLoaded(true);
    },[]);
    const location = useLocation();
    const history = useHistory();
    const diceRolling=()=>{
        var rand = Math.floor(Math.random() * 2) + 1;
        setNumberGot(rand);
        var update=parseInt(level) + rand
        setLevel(update);
        alert("Number obtained: "+rand);
        retrievedObject.currentLevel=update;
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        setTimeout(()=>{
            history.push(`/${update}`)
        },1000)
    }
    const displayContentHealth=(sp)=>{
         return(
            <>
          <div class="modal-body">
                        <strong>Health Insurance</strong> <br/>
                          
                          <div className="row justify-content-between">
                            <div className="col-6">
                                <strong>Selling Price: </strong>{sp} <br/>
                            </div>
                            <div className="col-6">
                                
                            </div>
                          </div>
                           
            </div>  
        </>
         )
        
     }
        
    
    const displayContentHome=(sp)=>{
        return(
            <>
          <div class="modal-body">
                        <strong>House Insurance</strong> <br/>
                          
                          <div className="row justify-content-between">
                            <div className="col-6">
                                <strong>Selling Price: </strong>{sp} <br/>
                            </div>
                            <div className="col-6">
                                
                            </div>
                          </div>
                           
            </div>  
        </>
    )
    }
        
    

    const displayContentVehicle=(sp)=>{
        return(
            <>
          <div class="modal-body">
                        <strong>Vehicle Insurance</strong> <br/>
                          
                          <div className="row justify-content-between">
                            <div className="col-6">
                                <strong>Selling Price: </strong>{sp} <br/>
                            </div>
                            <div className="col-6">
                                
                            </div>
                          </div>
                           
            </div>  
        </>
    )
    }
    
    const displayContentFixedDep=(sp)=>{
        return(
            <>
          <div class="modal-body">
                        <strong>Fixed Deposits</strong> <br/>
                          
                          <div className="row justify-content-between">
                            <div className="col-6">
                                <strong>Purchased: </strong>{sp} <br/>
                            </div>
                            <div className="col-6">
                                
                            </div>
                          </div>
                           
            </div>  
        </>
    )
    }
        
    // health:{this.state.retrievedObject.insurance.healthIns.purchased.toString()}<br/>
    //                     home:{this.state.retrievedObject.insurance.homeIns.purchased.toString()}<br/>
    //                     vehicle:{this.state.retrievedObject.insurance.vehicleIns.purchased.toString()}<br/>
    //                     money: {this.state.retrievedObject.moneyInHand}<br/>
    //                     FD: {this.state.retrievedObject.fixedDeposit.purchased} <br/>


        if (isLoaded) {
            return (
        <>
        <div class="modal fade" id="assets" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header" style={{textAlign:'center'}}>
                        <h5 class="modal-title" id="exampleModalLongTitle">Insurance</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    {retrievedObject.insurance.healthIns.purchased?displayContentHealth(5000):""}
                    {retrievedObject.insurance.homeIns.purchased?displayContentHome(4000):""}
                    {retrievedObject.insurance.vehicleIns.purchased?displayContentVehicle(3000):""}
                    {displayContentFixedDep(retrievedObject.fixedDeposit.purchased)}
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        <div className="container-fluid" style={{marginTop:'2rem'}}>
               
            
            <div className="row">
                <div className='col-2'>
                    <Link to='/intro' style={{color:'white'}}><button className="btn btn-dark">Back</button></Link>
                </div>
                <div className="col-6" onClick={diceRolling} style={{textAlign:'center'}}>
                    <h1>Click here to roll the dice</h1>                
                </div>
                <div className='col-4'>
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn-dark" style={{color:'white'}}>
                                Stock Market
                            </button>
                        </div>
                        <div className="col-4">
                            
                                <strong>Rs. {retrievedObject.moneyInHand}</strong>
                                <br/>
                                <strong>PIN: 2345</strong>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'2rem'}}>
                        <div className="col-4">
                            <button className="btn btn-dark" style={{color:'white'}} data-toggle="modal" data-target="#assets">
                                Assets
                            </button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-dark" style={{color:'white'}}>
                                Pass Book
                            </button>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid" style={{marginTop:'10rem'}}>
            <div className="row r">
                <div className="steps col-2 justify-content-center d-flex align-items-center">
                    1
                </div>
                <div className="steps col-2 justify-content-center d-flex align-items-center">
                    2
                </div>
                <div className="steps col-2 justify-content-center d-flex align-items-center">
                    3
                </div>
                <div className="steps col-2 justify-content-center d-flex align-items-center">
                    4
                </div>
                <div className="steps col-2 justify-content-center d-flex align-items-center">
                    5
                </div>
                <div className="steps col-2 justify-content-center d-flex align-items-center">
                    6
                </div>
            </div>
        </div>
        </>
    );
    }else{
        return(
            <>
        <div className="container-fluid" style={{marginTop:'2rem'}}>
            <div className="row">
                <div className='col-2'>
                    <Link to='/intro' style={{color:'white'}}><button className="btn btn-dark">Back</button></Link>
                </div>
                <div className="col-6" style={{textAlign:'center'}}>
                    <h1>roll the dice</h1>                
                </div>
                <div className='col-2'>
                    <div className="row">
                        {/* health:{this.state.retrievedObject.insurance.health.purchased}<br/>
                        home:{this.state.retrievedObject.insurance.homeIns.purchased}<br/>
                        vehicle:{this.state.retrievedObject.insurance.vehicleIns.purchased}<br/>
                        money: {this.state.retrievedObject.moneyInHand}<br/>
                        FD: {this.state.retrievedObject.fixedDeposit.purchased} <br/> */}
                    </div>
                </div>
            </div>
        </div>
        </>
        )
        
    }
        
}
    


export default DiceRoll;