import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DiceRoll.css';
class DiceRoll extends React.Component {
    
    constructor(props){
        super(props);
        
        this.state={
            retrievedObject:{},
            isloaded:false,
        }
    }
    componentDidMount(){
        let retrievedObject = JSON.parse(localStorage.getItem("financialLiteracy"));
        this.setState({
            retrievedObject:retrievedObject,
            isloaded:true,
        });

    }
     displayContentHealth=(sp)=>{
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
        
    
    displayContentHome=(sp)=>{
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
        
    

    displayContentVehicle=(sp)=>{
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
    Diceroll=()=>{
        
    }
    
    displayContentFixedDep=(sp)=>{
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

    render(){
        if(this.state.isloaded){
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
                    
                    {this.state.retrievedObject.insurance.healthIns.purchased?this.displayContentHealth(5000):""}
                    {this.state.retrievedObject.insurance.homeIns.purchased?this.displayContentHome(4000):""}
                    {this.state.retrievedObject.insurance.vehicleIns.purchased?this.displayContentVehicle(3000):""}
                    {this.displayContentFixedDep(this.state.retrievedObject.fixedDeposit.purchased)}
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
                <div className="col-6" style={{textAlign:'center'}}>
                    <h1>roll the dice</h1>                
                </div>
                <div className='col-4'>
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn-dark" style={{color:'white'}}>
                                Stock Market
                            </button>
                        </div>
                        <div className="col-4">
                            
                                <strong>Rs. {this.state.retrievedObject.moneyInHand}</strong>
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
    
}

export default DiceRoll;