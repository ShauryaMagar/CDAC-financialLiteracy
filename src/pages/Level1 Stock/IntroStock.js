import React, { useEffect } from 'react';
import {useHistory,useLocation} from 'react-router-dom';
import {Modal,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cardImg from './images/card-img.jpg';
import './IntroStock.css';
const IntroStock=()=>{
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [retrievedObject, setRetrievedObject] = React.useState({});
    const [amt, setAmt] = React.useState(0);
    const [med,setMed]=React.useState(0);
    const [steel,setSteel]=React.useState(0);
    const [oil,setOil]=React.useState(0);
    const [passbook,setPassbook]=React.useState();
    const [auto,setAuto]=React.useState(0);
    useEffect(() => {
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setIsLoaded(true);
        setPassbook(retrievedObj.passbook);
        setAmt(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
    }, []);
    const [show, setShow] = React.useState(false);
    const nextPage=()=>{
        let obj12=passbook;
        if(steel!=0){
            var obj={
                name:'Steel Stocks purchased',
                type:'debit',
                amount:steel
            }
            obj12.push(obj);
        }
        if(oil!=0){
            var obj={
                name:'Oil Stocks purchased',
                type:'debit',
                amount:oil
            }
            obj12.push(obj);
        }
        if(med!=0){
            var obj={
                name:'Pharmaceutical Stocks purchased',
                type:'debit',
                amount:med
            }
            obj12.push(obj);
        }
        if(auto!=0){
            var obj={
                name:'Automobile Stocks purchased',
                type:'debit',
                amount:auto
            }
            obj12.push(obj);
        }
        setPassbook(obj12);
        retrievedObject.passbook=passbook;
        retrievedObject.stocks.steel=steel;
        retrievedObject.stocks.oil=oil;
        retrievedObject.stocks.med=med;
        retrievedObject.stocks.auto=auto;
        if(amt != retrievedObject.moneyInHand[retrievedObject.moneyInHand.length-1]){
            retrievedObject.moneyInHand.push(amt);
        }
     
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        setTimeout(() => {
            history.push('/start');
        }, 1000)
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory();
    const submitOil=(e)=>{
        e.preventDefault();
        let num = oil;
        setAmt(amt - num);
        setShow(true);
    }
    const submitMed = (e) => {
        e.preventDefault();
        let num = med;
        setMed(num);
        setAmt(amt - num);
        setShow(true);
    }
    const submitSteel = (e) => {

        e.preventDefault();
        let num = steel;
        setSteel(num);
        setAmt(amt-num);
        setShow(true);
    }
    const submitAuto = (e) => {
        e.preventDefault();
        let num = auto;
        setAuto(num);
        setAmt(amt-num);
        setShow(true);
    }
    const changeOil=(e)=>{
        setOil(e.target.value)
    }
    const changePharm=(e)=>{
        setMed(e.target.value);
    }
    const changeSteel=(e)=>{
        setSteel(e.target.value);
    }
    const changeAuto =(e)=> setAuto(e.target.value);
     if (isLoaded) {
            return (
        <>
        
        <div className="container-fluid back-intro-stock" style={{paddingTop:'2rem',paddingBottom:'1rem '}}>
               
            
            <div className="row">
                <div className='col-2'>
                    <Link to='/start' style={{color:'white'}}><button className="btn btn-danger">Back</button></Link>
                </div>
                <div className="col-6"  style={{textAlign:'center'}}>               
                </div>
                <div className='col-4'>
                    <div className="row">
                        <div className="col-4">
                            
                        </div>
                        <div className="col-4">
                            
                                <strong>Rs. {amt}</strong>
                                <br/>
                                <strong>PIN: 2345</strong>
                        </div>
                    </div>
                    
                </div>
            </div>
        
        <div style={{marginTop:"2rem"}}>
                <div style={{textAlign:"center"}}>
                    <h1 style={{fontFamily: 'Poppins',fontWeight:'800',fontSize:'44px',textShadow:'5px 5px 18px gray'}}>
                        Purchase Stocks!
                    </h1>
                </div>

        </div>
        <div className="row justify-content-lg-end" style={{marginRight:"3rem"}}>

                    <button className="btn btn-primary" onClick={nextPage} style={{fontWeight:'700',fontFamily:'Poppins',fontSize:'18px'}}>Next</button>

                </div>
        <div style={{marginTop:"0.1rem"}} className="container-fluid">
                <div className="row " style={{padding:'30px'}}>
                    <div className="col-3 stocks-card stocks-card-oil" >
                        <div className="row justify-content-center" style={{borderTopLeftRadius:'15px',borderTopRightRadius:'15px',textAlign:'center'}}>
                  
                                <h2 ><u>Oil & Gas<br/> Company</u></h2>
                 
                            
                        </div>

                        <div className="row justify-content-center" style={{padding:"1rem 1rem 1rem 1rem"}}>
                            <h4>Own stocks in a company.</h4>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            d minim  nostrud exercitation ull efw  
                            laboris nisi ut aliquip ex ea commodo consequat. </h5>
                        </div>
                        <div className="row justify-content-center" style={{padding:"0rem 1rem 1rem 1rem",borderBottomLeftRadius:'15px',borderBottomRightRadius:'15px'}}>
                        <h4>Purchase</h4>
                            <form onSubmit={submitOil}>
                                <input type="text" onChange={changeOil} value={oil} class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter Amount"></input>
                                <button className="btn btn-block btn-dark buy-button" type="submit" style={{marginTop:"1rem"}}>Buy</button>    
                            </form>
                        </div>
                        <br/>
                            
                    </div>
                    <div className="col-3 stocks-card stocks-card-pharma" >
                        <div className="row justify-content-center " style={{borderTopLeftRadius:'15px',borderTopRightRadius:'15px'}}>
                            
                           <center> <h2><u>Pharmaceutical Company</u></h2></center>    
                            
                        </div>
                        <div className="row justify-content-center" style={{padding:"1rem 1rem 1rem 1rem"}}>
                            <h4>Own stocks in a company.</h4> <br/>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            d minim  nostrud exercitation ull efw  
                            laboris nisi ut aliquip ex ea commodo consequat. </h5>
                        </div>
                        <div className="row justify-content-center" style={{padding:"0rem 1rem 1rem 1rem",borderBottomLeftRadius:'15px',borderBottomRightRadius:'15px'}}>
                        <h4>Purchase</h4>
                            <form onSubmit={submitMed}>
                                <input type="text" onChange={changePharm} value={med} class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter Amount"></input>
                                <button className="btn btn-block btn-dark buy-button" type="submit" style={{marginTop:"1rem"}}>Buy</button>    
                            </form>
                                
                            
                        </div>
                        <br/>
                            
                    </div>
                    <div className="col-3 stocks-card stocks-card-steel" >
                        <div className="row justify-content-center"  style={{borderTopLeftRadius:'15px',borderTopRightRadius:'15px',textAlign:'center'}}> 
                            
                                <h2><u>Steel <br/> Company</u></h2>
                            
                        </div>
                        <div className="row justify-content-center" style={{padding:"1rem 1rem 1rem 1rem"}}>
                            <h4>Own stocks in a company.</h4>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            d minim  nostrud exercitation ull efw  
                            laboris nisi ut aliquip ex ea commodo consequat.  </h5>
                        </div>
                        <div className="row justify-content-center" style={{padding:"0rem 1rem 1rem 1rem" ,borderBottomLeftRadius:'15px',borderBottomRightRadius:'15px'}}>
                        <h4>Purchase</h4>
                            <form onSubmit={submitSteel}>
                                <input type="text" onChange={changeSteel} value={steel} class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter Amount"></input>
                                <button className="btn btn-block btn-dark buy-button" type="submit" style={{marginTop:"1rem"}}>Buy</button>    
                            </form>
                            
                        </div>
                        <br/>
                            
                    </div>
                    <div className="col-3 stocks-card stocks-card-auto" >
                        <div className="row justify-content-center"  style={{borderTopLeftRadius:'15px',borderTopRightRadius:'15px',textAlign:'center'}}> 
                            
                                <h2><u>Automobile <br/> Company</u></h2>
                            
                        </div>
                        <div className="row justify-content-center" style={{padding:"1rem 1rem 1rem 1rem"}}>
                            <h4>Own stocks in a company.</h4>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            d minim  nostrud exercitation ull efw  
                            laboris nisi ut aliquip ex ea commodo consequat.  </h5>
                        </div>
                        <div className="row justify-content-center" style={{padding:"0rem 1rem 1rem 1rem",borderBottomLeftRadius:'15px',borderBottomRightRadius:'15px'}}>
                            <h4>Purchase</h4>
                            <form onSubmit={submitAuto}>
                                <input type="text" onChange={changeAuto} value={auto} class="form-control" id="" aria-describedby="emailHelp" placeholder="Enter Amount"></input>
                                <button className="btn btn-block btn-dark buy-button" type="submit" style={{marginTop:"1rem"}}>Buy</button>    
                            </form>
                            
                        </div>
                        <br/>
                            
                    </div>
                </div>
        </div>
        <div className="container-fluid">

        </div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <img src={cardImg} style={{height:"300px",width:"250px"}}/>
                    </div>
                </div>
                <div className="row justify-content-center" style={{marginTop:"1rem"}}>
                    <div className="col-10">
                        <div class="form-group">
                            <input type="email" class="form-control form-control-lg" id="PIN" aria-describedby="emailHelp" placeholder="Enter Your PIN"/>
                                            
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-lg" id="CVV" aria-describedby="emailHelp" placeholder="Enter Your CVV"/>
                                            
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-lg" id="Card Number" aria-describedby="emailHelp" placeholder="Enter Your CVV"/>
                                            
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Pay
          </Button>
        </Modal.Footer>
      </Modal>
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

export default IntroStock;