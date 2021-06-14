import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { useEffectX } from 'use-effect-x';
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./DiceRoll.css";

import { parseInt } from "lodash";



const DiceRoll = () => {


  const [isLoaded, setIsLoaded] = React.useState(false);
  const [retrievedObject, setRetrievedObject] = React.useState({});
  const [numberGot, setNumberGot] = React.useState(0);
  const [level, setLevel] = React.useState(0);
  const [show, setShow] = React.useState(false);
  const [med, setMed] = React.useState(0);
  const [steel, setSteel] = React.useState(0);
  const [oil, setOil] = React.useState(0);
  const [auto, setAuto] = React.useState(0);
  const medChange = Math.floor(Math.random() * 15) - 2;
  const steelChange = Math.floor(Math.random() * 15) - 2;
  const oilChange = Math.floor(Math.random() * 15) - 2;
  const autoChange = Math.floor(Math.random() * 15) - 2;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
    setRetrievedObject(retrievedObj);
    setLevel(retrievedObj.currentLevel);
    
    setMed(retrievedObj.stocks.med);
    setSteel(retrievedObj.stocks.steel);
    setOil(retrievedObj.stocks.oil);
    setAuto(retrievedObj.stocks.auto);
    setIsLoaded(true);

    
  },[]);

  useEffectX(() => {
    let retrievedObjt = JSON.parse(localStorage.getItem("financialLiteracy"));
    if(retrievedObjt.fixedDeposit.turnsLeft==0){
      if(document.getElementById(level.toString())){
        document.getElementById(level.toString()).innerHTML="FD HAS MATURED! <br/> Balance has been updated";
        document.getElementById(level.toString()).style.fontSize="18px";
        document.getElementById(level.toString()).style.fontWeight="500";

    }}
      if(document.getElementById(level.toString())){
        document.getElementById(level.toString()).style.backgroundColor="rgb(120, 214, 107)";
    }
   });

  const location = useLocation();
  const history = useHistory();

  // ---------------------------------------------------------------------


  function rollDice() {
    const dice = [...document.querySelectorAll(".die-list")];
    var generatedNum = getRandomNumber(1, 1);
    dice.forEach((die) => {
      toggleClasses(die);

      die.dataset.roll = generatedNum;
    });
    var update = parseInt(level) + generatedNum;
    let money = retrievedObject.moneyInHand;
    if (retrievedObject.insurance.healthIns.purchased){
      money=money-200;
    }
    if (retrievedObject.insurance.homeIns.purchased) {
      money = money - 200;
    }
    if (retrievedObject.insurance.vehicleIns.purchased) {
      money = money - 200;
    }
    setTimeout(() => {
      
     
      
      setLevel(update);
     
      
      if(retrievedObject.fixedDeposit.turnsLeft==1){

        retrievedObject.fixedDeposit.purchased=parseFloat(retrievedObject.fixedDeposit.purchased)+parseFloat(retrievedObject.fixedDeposit.purchased)*(0.15);
        money=parseFloat(money)+parseFloat(retrievedObject.fixedDeposit.purchased)
        retrievedObject.fixedDeposit.turnsLeft=0;
        retrievedObject.fixedDeposit.purchased=0;
   
      }else{
        retrievedObject.fixedDeposit.turnsLeft=retrievedObject.fixedDeposit.turnsLeft-1;
      }
      
    retrievedObject.stocks.oil =
      parseInt(oil) + (parseInt(oil) * oilChange) / 100;
    retrievedObject.stocks.med =
      parseInt(med) + (parseInt(med) * medChange) / 100;
    retrievedObject.stocks.auto =
      parseInt(auto) + (parseInt(auto) * autoChange) / 100;
    retrievedObject.stocks.steel =
      parseInt(steel) + (parseInt(steel) * steelChange) / 100;
    retrievedObject.currentLevel = update;
    retrievedObject.moneyInHand=money;
    localStorage.setItem("financialLiteracy", JSON.stringify(retrievedObject));
  
      history.push(`/${update}`);
    }, 3500);   
    setTimeout(()=>{

      document.getElementById(update.toString()).style.backgroundColor="rgb(120, 214, 107)";
    },2000)
    

  }




//   function cLevel(){


//   }

//   console.log(gen.toString())
//     document.getElementById("1").style.backgroundColor="green";



  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


//   openNav = () => {
//     if (
//       document.getElementById("mySidenav") &&
//       document.getElementById("main")
//     ) {
//       document.getElementById("mySidenav").style.width = "250px";
//       document.getElementById("main").style.marginLeft = "250px";
//     }
//   };

//   closeNav = () => {
//     if (
//       document.getElementById("mySidenav") &&
//       document.getElementById("main")
//     ) {
//       document.getElementById("mySidenav").style.width = "0";
//       document.getElementById("main").style.marginLeft = "0";
//     }
//   };

    
    
  





  // --------------------------------------------------------------------------------------------------

  // setSteel(parseInt(steel)+(parseInt(steel)*steelChange)/100);
  // setOil(parseInt(oil)+(parseInt(oil)*oilChange)/100);
  // setAuto(parseInt(auto)+(parseInt(auto)*autoChange)/100);
  // setMed(parseInt(med)+(parseInt(med)*medChange)/100);
  // alert("Number obtained: "+rand);
  // retrievedObject.stocks.oil=(parseInt(oil)+(parseInt(oil)*oilChange)/100);
  // retrievedObject.stocks.med=(parseInt(med)+(parseInt(med)*medChange)/100);
  // retrievedObject.stocks.auto=(parseInt(auto)+(parseInt(auto)*autoChange)/100);
  // retrievedObject.stocks.steel=(parseInt(steel)+(parseInt(steel)*steelChange)/100);
  // retrievedObject.currentLevel=update;
  // localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));


  const displayContentHealth = (sp) => {
    return (
      <>
        <div class="modal-body">
          <strong>Health Insurance</strong> <br />
          <div className="row justify-content-between">
            <div className="col-6">
              <strong>Selling Price: </strong>
              {sp} <br />
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </>
    );
  };

  const displayContentHome = (sp) => {
    return (
      <>
        <div class="modal-body">
          <strong>House Insurance</strong> <br />
          <div className="row justify-content-between">
            <div className="col-6">
              <strong>Selling Price: </strong>
              {sp} <br />
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </>
    );
  };
  

  const displayContentVehicle = (sp) => {
    return (
      <>
        <div class="modal-body">
          <strong>Vehicle Insurance</strong> <br />
          <div className="row justify-content-between">
            <div className="col-6">
              <strong>Selling Price: </strong>
              {sp} <br />
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </>
    );
  };

  const displayContentFixedDep = (sp, turn) => {
    return (
      <>
        <div class="modal-body">
          <strong>Fixed Deposits</strong> <br />
          <div className="row justify-content-between">
            <div className="col-6">
              <strong>Purchased: </strong>
              {sp} <br />
            </div>
            <div className="col-6"></div>
          </div>
          <div className="row justify-content-between">
            <div className="col-6">
              <strong>Turns Left before maturity: </strong>
              {turn} <br />
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </>
    );
  };

  // health:{this.state.retrievedObject.insurance.healthIns.purchased.toString()}<br/>
  //                     home:{this.state.retrievedObject.insurance.homeIns.purchased.toString()}<br/>
  //                     vehicle:{this.state.retrievedObject.insurance.vehicleIns.purchased.toString()}<br/>
  //                     money: {this.state.retrievedObject.moneyInHand}<br/>
  //                     FD: {this.state.retrievedObject.fixedDeposit.purchased} <br/>

  if (isLoaded) {
     
    
    return (
      
        
      <>
      
        <div
          class="modal fade"
          id="assets"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header" style={{ textAlign: "center" }}>
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Insurance
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              {retrievedObject.insurance.healthIns.purchased
                ? displayContentHealth(5000)
                : ""}
              {retrievedObject.insurance.homeIns.purchased
                ? displayContentHome(4000)
                : ""}
              {retrievedObject.insurance.vehicleIns.purchased
                ? displayContentVehicle(3000)
                : ""}
              {retrievedObject.fixedDeposit.purchased===0?"":displayContentFixedDep(retrievedObject.fixedDeposit.purchased,retrievedObject.fixedDeposit.turnsLeft)}
              {}
              <div class="modal-footer">
                <button type="button" class="btn  dice-page-btn" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dice-roll-page">
        <div className="container-fluid" style={{ paddingTop: "2rem" }}>
          <div className="row">
            <div className="col-2">
              <Link to="/intro" style={{ color: "white" }}>
                <button className="btn  dice-page-btn" style={{color:"#fff"}} >Back</button>
              </Link>
            </div>

            <div className="col-6 " style={{ textAlign: "center" }}>
              <div className="dice">
                <ol className="die-list even-roll" data-roll={1} id="die-1">
                  <li className="die-item" data-side={1}>
                    <span className="dot" />
                  </li>
                  <li className="die-item" data-side={2}>
                    <span className="dot" />
                    <span className="dot" />
                  </li>
                  <li className="die-item" data-side={3}>
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </li>
                  <li className="die-item" data-side={4}>
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </li>
                  <li className="die-item" data-side={5}>
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </li>
                  <li className="die-item" data-side={6}>
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </li>
                </ol>

              </div>
              <br/>
              <button type="button" className="btn dice-page-btn animate__animated animate__pulse animate__infinite"  onClick={rollDice} id="roll-button">
                Roll Dice
              </button>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-4">
                  <button
                    className="btn dice-page-btn"
                    onClick={handleShow}
                    style={{ color: "white" }}
                  >
                    Stock Market
                  </button>
                </div>
                <div className="col-4" style={{marginLeft:"40px"}}>
                  <strong>₹ {retrievedObject.moneyInHand}</strong>
                  <br />
                  <strong>PIN: 2345</strong>
                </div>
              </div>
              <div className="row" style={{ marginTop: "2rem" }}>
                <div className="col-4">
                  <button
                    className="btn  dice-page-btn"
                    style={{ color: "white" }}
                    data-toggle="modal"
                    data-target="#assets"
                  >
                    Assets
                  </button>
                </div>
                <div className="col-4">
                  <button className="btn dice-page-btn" style={{ color: "white" }}>
                    Pass Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div  className="container-fluid animate__animated animate__fadeInRight" style={{ marginTop: "10rem", paddingBottom:"124px" }}>
          <div className="row r board-row">
            <div className="" id="0">
                
            </div>
            <div className="steps col-2 justify-content-center d-flex align-items-center" id={parseInt(level).toString()} >
            {(parseInt(level)).toString()}
            </div>
            <div className="steps col-2 justify-content-center d-flex align-items-center" id={(parseInt(level)+1).toString()}>
            {(parseInt(level)+1).toString()}
            </div>
            <div className="steps col-2 justify-content-center d-flex align-items-center" id={(parseInt(level)+2).toString()}> 
            {(parseInt(level)+2).toString()} 
            </div>
            <div className="steps col-2 justify-content-center d-flex align-items-center" id={(parseInt(level)+3).toString()}>
            {(parseInt(level)+3).toString()}
            </div>
            <div className="steps col-2 justify-content-center d-flex align-items-center" id={(parseInt(level)+4).toString()}>
            {(parseInt(level)+4).toString()}
            </div>
            <div className="steps col-2 justify-content-center d-flex align-items-center" id={(parseInt(level)+5).toString()}>
            {(parseInt(level)+5).toString()}
            </div>
          </div>
        </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Stocks</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <h2>Steel:</h2>
            </p>
            <p>Previous value: {steel}</p>
            <p>Increase:{steelChange}%</p>
            <p>
              New value:
              {parseInt(steel) + (parseInt(steel) * steelChange) / 100}
            </p>
            <p>
              <h2>Oil:</h2>
            </p>
            <p>Previous value:{oil}</p>
            <p>Increase:{oilChange}%</p>
            <p>New value:{parseInt(oil) + (parseInt(oil) * oilChange) / 100}</p>
            <p>
              <h2>Auto:</h2>
            </p>
            <p>Previous value:{auto}</p>
            <p>Increase:{autoChange}%</p>
            <p>
              New value:{parseInt(auto) + (parseInt(auto) * autoChange) / 100}
            </p>
            <p>
              <h2>Pharmaceutical:</h2>
            </p>
            <p>Previous value:{med}</p>
            <p>Increase:{medChange}%</p>
            <p>New value:{parseInt(med) + (parseInt(med) * medChange) / 100}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
    
  } else {
    return (
      <>
        <div className="container-fluid" style={{ marginTop: "2rem" }}>
          <div className="row">
            <div className="col-2">
              <Link to="/intro" style={{ color: "white" }}>
                <button className="btn  dice-page-btn">Back</button>
              </Link>
            </div>
            <div className="col-6" style={{ textAlign: "center" }}>
              <h1>roll the dice</h1>
            </div>
            <div className="col-2">
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
    );
  }

};




export default DiceRoll;
