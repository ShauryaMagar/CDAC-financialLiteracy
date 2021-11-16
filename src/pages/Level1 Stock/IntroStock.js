/* eslint-disable */
import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {Modal,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cardImg from './images/card-img.jpeg';
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
    const [purchaseSteel, setPurchaseSteel] = React.useState(false);
    const [purchaseMed, setPurchaseMed] = React.useState(false);
    const [purchaseOil, setPurchaseOil] = React.useState(false);
    const [purchaseAuto, setPurchaseAuto] = React.useState(false);
    const [CVV,setCVV]=React.useState("");
    const [creditNo,setCreditNo]=React.useState("");
    const [pin,setPin]=React.useState("");
    useEffect(() => {
         window.onpopstate = e => {
             history.push('/');
         }
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setIsLoaded(true);
        window.scrollTo(0, 0);
        setPassbook(retrievedObj.passbook);
        setAmt(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
        // eslint-disable-next-line 
    }, []);
    const [show, setShow] = React.useState(false);
    const nextPage=()=>{
        let obj12=passbook;
        if (purchaseSteel) {
            var obj={
                name:'Steel Stocks purchased',
                type:'debit',
                amount:steel
            }
            obj12.push(obj);
        }
        if (purchaseOil) {
            obj={
                name:'Oil Stocks purchased',
                type:'debit',
                amount:oil
            }
            obj12.push(obj);
        }
        if (purchaseMed) {
            obj={
                name:'Pharmaceutical Stocks purchased',
                type:'debit',
                amount:med
            }
            obj12.push(obj);
        }
        if(purchaseAuto){
            obj={
                name:'Automobile Stocks purchased',
                type:'debit',
                amount:auto
            }
            obj12.push(obj);
        }
        setPassbook(obj12);
        retrievedObject.passbook=passbook;
        if(purchaseSteel)
            retrievedObject.stocks.steel=steel;
        if(purchaseOil)
            retrievedObject.stocks.oil=oil;
        if(purchaseMed)
            retrievedObject.stocks.med=med;
        if(purchaseAuto)
            retrievedObject.stocks.auto=auto;
        if(amt !== retrievedObject.moneyInHand[retrievedObject.moneyInHand.length-1]){
            retrievedObject.moneyInHand.push(amt);
        }

        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        setTimeout(() => {
            history.push('/start');
        }, 1000)
    }
    // const handleClose = () => {
    //     var pin1=pin;
    //     var CVV1=CVV;
    //     var creditNo1=creditNo;
    //     pin1=pin1.replaceAll(" ","").trim();
    //     CVV1=CVV1.replaceAll(" ","").trim();
    //     creditNo1=creditNo1.replaceAll(" ","").trim();
    //     if(pin1!=='2345'||CVV1!=='418'||creditNo1!=='2658418599340206'){
    //         alert("Enter proper Details!");
    //         setShow(true);
    //     }else{
    //         setPin("");
    //         setCVV("");
    //         setCreditNo("");
    //         setShow(false)
    //     }
    // };


    //const handleShow = () => setShow(true);
    const history = useHistory();
    
    const submitOil=(e)=>{
        e.preventDefault();
        if (oil === "" || !Number.isInteger(parseInt(oil))) {
            alert("Enter Number")
        } else {
            if (amt - oil < 100) {
                alert("Money In hand will be less than 100.");
            } else {
                let num = oil;
                alert("Oil & Gas stocks worth Rs."+oil+" purchased !")
                setOil(num);
                setAmt(amt - num);
                setPurchaseOil(true);
                setShow(true);
            }
        }
    }
    const submitMed = (e) => {
        e.preventDefault();
        if (med === "" || !Number.isInteger(parseInt(med))) {
            alert("Enter Number")
        } else {
            if (amt - med < 100) {
                alert("Money In hand will be less than 100.");
            } else {
                let num = med;
                alert("Pharmaceutical stocks worth Rs."+med+" purchased !")
                setPurchaseMed(true);
                setMed(num);
                setAmt(amt - num);
                setShow(true);
            }
        }
    }
    const submitSteel = (e) => {

        e.preventDefault();
        if (steel === "" || !Number.isInteger(parseInt(steel))) {
            alert("Enter Number")
        } else {
            if (amt - steel < 100) {
                alert("Money In hand will be less than 100.");
            } else {
                let num = steel;
                alert("Steel stocks worth Rs."+steel+" purchased !")
                setPurchaseSteel(true);
                setSteel(num);
                setAmt(amt - num);
                setShow(true);
            }
        }

    }
    const submitAuto = (e) => {
        e.preventDefault();
        if (auto === "" || !Number.isInteger(parseInt(auto))) {
            alert("Enter Number")
        } else {
            if (amt - auto < 100) {
                alert("Money In hand will be less than 100.");
            } else {
                let num = auto;
                alert("Automobile stocks worth Rs."+auto+" purchased !")
                setPurchaseAuto(true);
                setAuto(num);
                setAmt(amt - num);
                setShow(true);
            }
        }

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
    const handlePin=(e)=>setPin(e.target.value);
    const handleCreditNo=e=>setCreditNo(e.target.value);
    const handleCVV=e=>setCVV(e.target.value);
     if (isLoaded) {
            return (
        <>

        <div className="container-fluid back-intro-stock" style={{paddingTop:'2rem',paddingBottom:'3rem '}}>


            <div className="row">
                <div className='col-2'>
                    <Link to='/start' style={{color:'white'}}><button className="btn btn-danger" style={{width:'210px'}}>Cancel and Go Back</button></Link>
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
                        <div className="col-4">
                        <button className="btn btn-primary" onClick={nextPage} style={{fontWeight:'700',fontFamily:'Poppins',fontSize:'18px',width:'120px'}}>Next</button>
                        </div>
                    </div>

                </div>
            </div>

        <div style={{marginTop:"2rem"}}>
                <div style={{textAlign:"center"}}>
                    <h1 style={{fontFamily: 'Poppins',fontWeight:'800',fontSize:'44px',textShadow:'5px 5px 18px gray'}}>
                        Purchase Stocks!
                    </h1>
                    <br/>
                    <p style={{fontWeight:'700',fontSize:'18px'}}>You can always buy or sell stocks from the stock market button on the homepage</p>
                </div>

        </div>

        <div style={{marginTop:"0.1rem"}} className="container-fluid">
                <div className="row " style={{padding:'30px'}}>
                    <div className="col-3 stocks-card stocks-card-oil" >
                        <div className="row justify-content-center" style={{borderTopLeftRadius:'15px',borderTopRightRadius:'15px',textAlign:'center'}}>

                                <h2 ><u>Oil & Gas<br/> Company</u></h2>


                        </div>

                        <div className="row justify-content-center" style={{padding:"1rem 1rem 4.5rem 1rem"}}>
                        <h4>An oil and gas company is a business entity that engages in the exploration,
                         production, refinement, and distribution of oil and gas.</h4>
                       
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
                        <div className="row justify-content-center" style={{padding:"1rem 1rem 2.8rem 1rem"}}>
                        <h4>A pharmaceutical company is a commercial business licensed
                         to research, develop, market and/or distribute drugs, most commonly in the context of healthcare.</h4>
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
                        <h4>Steel is the backbone of bridges, skyscrapers, railroads, automobiles, and appliances.
                         This industry produce steel by melting iron ore, scrap metal, and other additives in furnaces
                      </h4>
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
                        <div className="row justify-content-center" style={{padding:"1rem 1rem 2.8rem 1rem"}}>
                          <h4>Automobile industry is the business of producing and selling self-powered vehicles, including passenger cars, trucks, farm equipment, and other commercial vehicles</h4>
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
        {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <img src={cardImg} alt="credit card" style={{height:"300px",width:"250px"}}/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10" style={{textAlign:'center', marginTop:'0.5rem'}}>
                        Pin: 2345
                    </div>
                </div>
                <div className="row justify-content-center" style={{marginTop:"1rem"}}>
                    <div className="col-10">
                        <div class="form-group">
                            <input type="email" class="form-control form-control-lg" id="PIN" value={pin} onChange={handlePin} aria-describedby="emailHelp" placeholder="Enter Your PIN"/>

                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-lg" id="CVV" value={CVV} onChange={handleCVV} aria-describedby="emailHelp" placeholder="Enter Your CVV"/>

                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-lg" id="Card Number" value={creditNo} onChange={handleCreditNo} aria-describedby="emailHelp" placeholder="Enter Your Card Number"/>

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
      </Modal> */}
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
