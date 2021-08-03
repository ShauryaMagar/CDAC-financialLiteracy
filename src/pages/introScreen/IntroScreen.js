
import React from 'react';
import { Link } from 'react-router-dom';
import './IntroScreen.css';

const IntroScreen = () => {
    const [amt,setAmt]=React.useState(20000);
    const [health,setHealth] = React.useState(false);
    const [vehicle,setVehicle]=React.useState(false);
    const [home,setHome]=React.useState(false);
    const [FD,setFD] = React.useState(0);
    const [inpFD,setInpFD] = React.useState(0);
    const [turns,setTurns]=React.useState(-1);
    const fdSubmit =(e) =>{
        e.preventDefault();
        var input =inpFD;
        if(amt-input<0){
            alert("not possible");
        }else if(input==="" || !Number.isInteger(parseInt(input))){
            alert("Input a number");
        }else{
            setAmt(amt-input);
            setFD(input);
            setTurns(4);
        }
    }
    const onSubmission = () => {
        const passbook=[];
        let netWorth=parseInt(amt);
        if(FD!==0){
            let obj1={
                name:'Fixed Deposit',
                type:'debit',
                amount:FD,
            }
            netWorth=netWorth+parseInt(FD)
            passbook.push(obj1);
        }
        if(health){
            let obj1={
                name:'Health Insurance',
                type:'debit',
                amount:5000
            }
            netWorth = netWorth + 3000
            passbook.push(obj1);
        }
        if(vehicle){
            let obj1 = {
                name: 'Vehicle Insurance',
                type: 'debit',
                amount: 7000
            }
            netWorth = netWorth + 4000
            passbook.push(obj1);
        }
        if (home) {
            let obj1 = {
                name: 'House Insurance',
                type: 'debit',
                amount: 8000
            }
            netWorth = netWorth + 5000
            passbook.push(obj1);
        }


        const financialObject= {
            insurance: {
                healthIns: {
                    purchased: health,
                    sellingPrice: '3000',
                },
                vehicleIns:{
                    purchased:vehicle,
                    sellingPrice:'4000'
                },
                homeIns:{
                    purchased:home,
                    sellingPrice:'5000',
                }
            },
            netWorth:[netWorth],
            timesRolled:0,
            passbook:passbook,
            levelset1: [1,6,4,19,3,8,12,20],//misc
            levelset2: [16, 17, 18], //ins
            levelset3:[7,11,14],//stock start
            levelset4:[9,13,15],//stock end
            moneyInHand: [amt],
            fixedDeposit:{
                purchased: FD,
                turnsLeft:turns
            },
            stocks:{
                steel:0,
                med:0,
                auto:0,
                oil:0,
            },
            currentLevel:0,
            currentInd:-1,
            next:-1,
            ins:-1
        }
        localStorage.setItem('financialLiteracy', JSON.stringify(financialObject));
        
    }
    const onChangeHandler = (e) =>{
        setInpFD(e.target.value);
    }
    const healthInsuranceHandler = () =>{
        var diff= amt-5000;
        if(health){
            setHealth(false);
            var add = amt+5000;
            setAmt(add);
        }else{
            if(diff<=0){
                alert("Can't Purchase");
            }else{
                setHealth(true);
                setAmt(diff);
            }
        }
    }
    const sellFD = () => {
        var addition = amt + parseInt(FD);
        setAmt(addition);
        setFD(0);
        setTurns(-3);
    }
    const vehicleInsuranceHandler = () => {
        var diff = amt - 7000;
        if (vehicle) {
            setVehicle(false);
            var add = amt + 7000;
            setAmt(add);
        } else {
            if (diff <= 0) {
                alert("Can't Purchase");
            } else {
                setVehicle(true);
                setAmt(diff);
            }
        }
    }
    const houseInsuranceHandler = () => {
        var diff = amt - 8000;
        if (home) {
            setHome(false);
            var add = amt + 8000;
            setAmt(add);
        } else {
            if (diff <= 0) {
                alert("Can't Purchase");
            } else {
                setHome(true);
                setAmt(diff);
            }
        }
    }
    
    return (
        <div className="intro-container" style={{marginTop:'0'}}>
            <div class="modal fade" id="Insurance" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header" style={{textAlign:'center'}}>
                        <h5 class="modal-title" id="exampleModalLongTitle">Insurance</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <strong>Health Insurance:</strong> If you own a health insurance, you will not have to pay huge hospital bills, in
                            case if you fall sick.Can be very benefial!<br/>
                          
                          <div className="row justify-content-between">
                            <div className="col-6">
                                <strong>Premium: </strong>Rs 200 / chance <br/>
                                <strong>Cost:</strong> Rs.5000
                            </div>
                            <div className="col-6">
                                <button className="btn btn-dark modal-card-button" onClick={healthInsuranceHandler}>
                                    {
                                        health?'Sell':'Purchase'
                                    }
                                </button>
                            </div>
                          </div>
                           
                    </div>
                    <div class="modal-body">
                        <strong>Vehicle Insurance:</strong>  If you own a vehicle insurance, you will not have to pay huge repair bills, in case of an accident. Can be very benefial! If you own a vehicle insurance, you will not have to pay huge repair bills, in case of an accident. Can be very benefial!<br/>
                          
                          <div className="row justify-content-between">
                            <div className="col-6">
                                <strong>Premium: </strong>Rs 200 / chance <br/>
                                <strong>Cost:</strong> Rs.7000
                            </div>
                            <div className="col-6">
                                <button className="btn btn-dark modal-card-button" onClick={vehicleInsuranceHandler}>
                                    {
                                        vehicle?'Sell':'Purchase'
                                    }
                                </button>
                            </div>
                          </div>
                           
                    </div>
                    <div class="modal-body">
                        <strong>House Insurance:</strong>  Saves you from high repairing prices if your house is damaged by a natural disaster/accident. Can be very benefial!<br/>
                          
                          <div className="row justify-content-between">
                            <div className="col-6">
                                <strong>Premium: </strong>Rs 200 / chance <br/>
                                <strong>Cost:</strong> Rs.8000
                            </div>
                            <div className="col-6">
                                <button className="btn btn-dark modal-card-button" onClick={houseInsuranceHandler}>
                                    {
                                        home?'Sell':'Purchase'
                                    }
                                </button>
                            </div>
                          </div>
                           
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark modal-card-button" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="stocks" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header" style={{textAlign:'center'}}>
                        <h5 class="modal-title" id="exampleModalLongTitle">Stocks</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className="container-fluid">
                            <div className="row justify-content-start">
                                <div className="col-9" style={{paddingLeft:'0px'}}>
                                    Simply put, you buy a small or a very tiny portion of a company when you buy a stock of the company(yes, you read it right), and the value of your stock changes according to the performance of the company and also may change due to other factors.If a company performs well, the prices of stock increases, sometimes giving huge returms!
                                </div>
                                <div className="col-3">
                                    <img src="./stock-photo.png" alt="stock market" style={{height:"50%",width:'100%'}}/>
                                </div>
                            </div>
                            <div className="row">
                                However, it has it’ s own risks associated to it.If a company stops performing well / goes bankrupt, it can result in huge loss as well.
                                So be careful
                                while investing.Also, keep an eye on hints.They tell about current geopolitical situation, which can affect performance of a company in a big way.
                            </div>
                            <div className="row">
                                    You can purchase stocks of 4 companies in this game:
                                    <ol style={{paddingLeft:'15px'}}>
                                        <li>Pharmaceutical Company</li>
                                        <li>Steel Company</li>
                                        <li>Oil and Natural Gas company</li>
                                        <li>Automobile Company</li>
                                    </ol>
                            </div>
                            <div className="row justify-content-center">
                                However, you can buy stocks only after the game starts.
                            </div>
                           </div>
                    </div>
                    
                           
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark modal-card-button" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="frauds" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header" style={{textAlign:'center'}}>
                        <h5 class="modal-title" id="exampleModalLongTitle">Stocks</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className="container-fluid">
                            <div className='row'>
                                You’ ll come across several types of frauds throughout the game.Beware of them.
                                Successfully evading them will result in you receiving a reward.
                            </div>
                            <div className="row">
                                    If you end up becoming a victim of a fraud, you may lose some money.
                            </div>
                            <div className="row">
                            You also have your bank PIN code displayed on top right corner of the screen at all times.NEVER ENTER IT ON A WEBSITE / APP you find dubious.
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark modal-card-button" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="fixedDeposits" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header" style={{textAlign:'center'}}>
                        <h5 class="modal-title" id="exampleModalLongTitle">Fixed Deposits</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div className="container-fluid">
                            <div className='row'>
                                Fixed Deposits are usually deposits made in a bank.These are considered way safer than stocks as they have nearly no risk associated to it.
                                However, returns are lower as compared to Stocks
                            </div>
                            <div className="row">
                                    You can make a fixed deposit of any amount in this game.It will
                                    return amount of money along with rate of interest after a specific number of steps.This is also known as maturing of a Fixed Deposit.
                                    However, withdrawing money before it matures might result in some loss
                            </div>
                            <div className="row">
                            Rate of Interest: 15 %    <br/>
                                Maturity period: 4 dice rolls
                            </div><br/>
                            <div className='row'>
                                    <form onSubmit={fdSubmit}>
                                        <label for="fdInput" className="form-label">Enter Amount:</label>
                                        <input id="fdInput" value={inpFD} onChange={onChangeHandler} className="form-control">
                                        </input>
                                        <br/>
                                        <button className='btn btn-dark modal-card-button' type='submit'> Purchase</button>
                                    </form>
                            </div>
                            <div className="row">
                                Currently Purchased: {FD}
                            </div>
                            <div className="row">
                                <button className="btn btn-dark modal-card-button" onClick={sellFD}>Sell</button>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-dark modal-card-button" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="col-2">
                    <Link exact to="/">
                        <button className="btn  btn-danger">Back</button>
                    </Link>
                </div>

                <div className="col-5" style={{textAlign:'center'}}>
                    <h1 style={{fontSize:"64px", fontWeight:"500"}} className="animate__animated animate__flip animate__delay-1s">Let's get started!</h1>
                    <img src="economics.png"  alt="start the game" className="warn" style={{width:"90px"}}></img>   
                </div>
                {/* <div className="col-1">
                               
                </div> */}
                <div className="col-2">
                        <h3>₹ {amt}</h3><br/>
                        <h3> PIN: 2345</h3>
                </div>
            </div>
            <div className="row justify-content-center" style={{marginTop:'2rem'}}>
                <div className="col-2" style={{textAlign:"center",marginTop:"auto",marginBottom:"auto"}}>
                    <img src="warn.png" alt="new game"  className="warn" style={{width:"90px"}}></img>
                </div>
                <div className="col-6 instruct-card animate__animated animate__bounceInDown " >
                    <h2>
                        You have Rs. 20000 with you. Make some wise choices. Click on the boxes below to know more!
                    </h2>
                </div>
                <div className="col-2" style={{textAlign:"center",marginTop:"auto",marginBottom:"auto"}}>
                    <img src="warn.png" alt="auto insurance" className="warn" style={{width:"90px"}} ></img>
                </div>
            </div>
            <div className="row justify-content-around" style={{marginTop:'2rem'}}>
                <div className="col-6 "  style={{textAlign:'center' , marginBottom: "2rem"}}>
                <div className="choice-card"  data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                <img src="life-insurance.png" alt="life insurance"  className="warn" style={{width:"64px"}}></img>
                <br/><br/>
                    <h1 style={{textDecoration:'underline'}}>Insurance</h1><br/>
                    <div >
                        <h4>Insurance provide protection from unforseen mishaps.However, a small amount of money(premium) is deducted after every chance.</h4> 
                    </div>
                  
                    <div className="row justify-content-center" style={{paddingTop:'2.9rem'}}>
                        <button type="button" class="btn btn-dark btn-lg" data-toggle="modal" data-target="#Insurance">
                        Click
                        </button>
                    </div>
                    </div>
                </div>
                <div className="col-6" style={{textAlign:'center' , marginBottom: "2rem"}}>
                <div className="choice-card " data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
                <img src="risk.png" alt="risk managemnet" className="warn" style={{width:"64px"}}></img>
                <br/><br/>
                    <h1 style={{textDecoration:'underline'}}>Stocks</h1>
                    <div>
                        <h4> Purchasing a stock in a company basically means owning a part of company.If company grows, the value of stock purchased increases and hence, high returns can be expected.However, it has high risk. </h4> 
                    </div>
                    <div className="row justify-content-center" style={{padding:'1rem'}}>
                        <button type="button" class="btn btn-dark btn-lg" data-toggle="modal" data-target="#stocks">
                        Click
                        </button>
                    </div>
                    </div>
                </div>
                <div className="col-6 " style={{textAlign:'center' , marginBottom: "2rem"}}>
                <div className="choice-card" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                <img src="fraud.png" alt="online frauds" className="warn" style={{width:"64px"}}></img>
                <br/><br/>
                    <h1  style={{textDecoration:'underline'}}>Frauds</h1>
                    <div >
                        <h4>You may encounter several types of financial frauds in this game. Beware of them!</h4> 
                    </div>
                    <div className="row justify-content-center" style={{paddingTop:'4.5rem'}}>
                        <button type="button" class="btn btn-dark btn-lg" data-toggle="modal" data-target="#frauds">
                        Click
                        </button>
                    </div>
                </div>
                </div>
                <div className="col-6 " style={{textAlign:'center' , marginBottom: "2rem"}}>
                    <div className="choice-card" data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
                    <img src="fixed.png" alt="fixed deposits" className="warn" style={{width:"64px"}}></img>
                <br/><br/>
                    <h1 style={{textDecoration:'underline'}}>Fixed Deposits</h1>
                    <div >
                        <h4>Fixed Deposits are basically investments made in a bank. After a particular period of time, it matures and returns with some rate of interest. It has lowest risk associated.</h4> 
                    </div>
                    <div className="row justify-content-center" style={{padding:'1rem'}}>
                        <button type="button" class="btn btn-dark btn-lg" data-toggle="modal" data-target="#fixedDeposits">
                        Click
                        </button>
                    </div>
                </div>
                </div>
            </div>
            <br/><br/>
            <div >
                <div className='' style={{textAlign:'center',paddingBottom:"80px"}}>
                    <Link to="/start" onClick={onSubmission} style={{color:'white' , fontFamily:"Bubblegum Sans"}}><button className="btn btn-lg start-button animate__animated animate__pulse animate__infinite" style={{fontSize:"32px"}}>Start!</button></Link>
                </div> 
            </div>
            
        </div>
    );
}

export default IntroScreen;