import React, { useEffect } from "react";
import { useEffectX } from "use-effect-x";
import Popup from 'reactjs-popup';
import { useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./DiceRoll.css";
import { parseInt} from "lodash";
import { Line } from "react-chartjs-2";

const onHelp = () =>{
    sessionStorage.setItem('backPage', "/start");
}

const DiceRoll = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [retrievedObject, setRetrievedObject] = React.useState({});
  // const [numberGot, setNumberGot] = React.useState(0);
  const [level, setLevel] = React.useState(0);
  const [lotMoney,setlotMoney]=React.useState(false);
  const [show, setShow] = React.useState(false);
  const [med, setMed] = React.useState(0);
  const [steel, setSteel] = React.useState(0);
  const [oil, setOil] = React.useState(0);
  const [auto, setAuto] = React.useState(0);
  const [net,setNet]=React.useState([]);
  const [next,setNext]=React.useState(0);
  const [currentInd,setCurrentInd]=React.useState(0);
  const [timesRolled,setTimesRolled]=React.useState();
  const [passbook,setPassbook]=React.useState({});
  const [showFD,setShowFD]=React.useState(false);
  const myRef = React.useRef(null)
  const medChange = Math.floor(Math.random() * 15) - 2;
  const steelChange = Math.floor(Math.random() * 15) - 2;
  const oilChange = Math.floor(Math.random() * 15) - 2;
  const autoChange = Math.floor(Math.random() * 15) - 2;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [passbookShow,setPassbookShow]=React.useState(false);
  const handlePassbookClose = () => setPassbookShow(false);
  const handlePassbookShow = () => setPassbookShow(true);
   const handleFDClose = () => setShowFD(false);
   const handleFDShow = () => setShowFD(true);
   const handleMoneyClose = () => setlotMoney(false);
   const handleMoneyShow = () => setlotMoney(true);
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  useEffect(() => {
    let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
    setRetrievedObject(retrievedObj);
    setLevel(retrievedObj.currentLevel);
    window.scrollTo(0, 0);
    setMed(retrievedObj.stocks.med);
    setSteel(retrievedObj.stocks.steel);
    setOil(retrievedObj.stocks.oil);
    setAuto(retrievedObj.stocks.auto);
    setPassbook(retrievedObj.passbook);
    var nw = parseInt(retrievedObj.stocks.med) + parseInt(retrievedObj.stocks.steel) + parseInt(retrievedObj.stocks.oil) + parseInt(retrievedObj.stocks.auto) + parseInt(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]) + parseInt(retrievedObj.fixedDeposit.purchased);
    if(retrievedObj.insurance.healthIns.purchased){
      nw = nw + parseInt(retrievedObj.insurance.healthIns.sellingPrice)
    }
    if (retrievedObj.insurance.vehicleIns.purchased) {
      nw = nw + parseInt(retrievedObj.insurance.vehicleIns.sellingPrice)
    }
    if (retrievedObj.insurance.homeIns.purchased) {
      nw = nw + parseInt(retrievedObj.insurance.homeIns.sellingPrice)
    }

    if (retrievedObj.timesRolled>1){
      if (parseInt(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length - 1]) >= 9000) {
        handleMoneyShow();
      }
    }
    if (retrievedObj.fixedDeposit.turnsLeft === 0){
      handleFDShow();
    }
    window.onpopstate = e => {
      history.push('/');
    }
    var nwArr=retrievedObj.netWorth;
    nwArr.push(nw);
    setNet(nwArr);
    setTimesRolled(retrievedObj.timesRolled);
    setIsLoaded(true);
    setCurrentInd(retrievedObj.currentInd);
    setNext(retrievedObj.next);
    // eslint-disable-next-line
  }, []);

  useEffectX(() => {
    let retrievedObjt = JSON.parse(localStorage.getItem("financialLiteracy"));
    if (document.getElementById(level.toString())) {
      document.getElementById(level.toString()).style.background =
        "rgb(120, 214, 107)";
    }

    if (retrievedObjt.fixedDeposit.turnsLeft === 0) {
      if (document.getElementById(level.toString())) {
        document.getElementById(level.toString()).innerHTML =
          "FD HAS MATURED! <br/> Balance has been updated";
        document.getElementById(level.toString()).style.fontSize = "18px";
        document.getElementById(level.toString()).style.fontWeight = "500";
      }
    }

    //     if(retrievedObjt.currentLevel>=1){
    //       if(document.getElementById("1")){
    //       document.getElementById("1").innerHTML="Shopkeeper Fake Notes";
    //       document.getElementById("1").style.fontSize="18px";

    //   }}
    //   if(retrievedObjt.currentLevel>=2){
    //     if(document.getElementById("2")){
    //     document.getElementById("2").innerHTML="Information on Stocks";
    //     document.getElementById("2").style.fontSize="18px";

    // }}
    // if(retrievedObjt.currentLevel>=3){
    //   if(document.getElementById("3")){
    //   document.getElementById("3").innerHTML="Car Accident";
    //   document.getElementById("3").style.fontSize="18px";

    // }}
    // if(retrievedObjt.currentLevel>=4){
    //   if(document.getElementById("4")){
    //   document.getElementById("4").innerHTML="Bill Payment";
    //   document.getElementById("4").style.fontSize="18px";

    // }}
    // if(retrievedObjt.currentLevel>=5){
    //   if(document.getElementById("5")){
    //   document.getElementById("5").innerHTML="PAY DAY";
    //   document.getElementById("5").style.fontSize="18px";

    // }}
    // if(retrievedObjt.currentLevel>=6){
    //   if(document.getElementById("6")){
    //   document.getElementById("6").innerHTML="Suspicious Website";
    //   document.getElementById("6").style.fontSize="18px";

    // }}
    // if(retrievedObjt.currentLevel>=7){
    //   if(document.getElementById("7")){
    //   document.getElementById("7").innerHTML="Government plans on Railway Expansion";
    //   document.getElementById("7").style.fontSize="18px";

    // }}
    // if(retrievedObjt.currentLevel>=8){
    //   if(document.getElementById("8")){
    //   document.getElementById("8").innerHTML="House Caught Fire";
    //   document.getElementById("8").style.fontSize="18px";

    // }}
    // if(retrievedObjt.currentLevel>=9){
    //   if(document.getElementById("9")){
    //   document.getElementById("9").innerHTML="Steel Prices Increased";
    //   document.getElementById("9").style.fontSize="18px";

    // }}
    // if(retrievedObjt.currentLevel>=10){
    //   if(document.getElementById("10")){
    //   document.getElementById("10").innerHTML="PAY DAY";
    //   document.getElementById("10").style.fontSize="18px";

    // }}

    if (retrievedObjt.currentLevel === 8) {
      if (document.getElementById("trans")) {
        document.getElementById("trans").style.background = "transparent";
      }
    }

    if (retrievedObjt.currentLevel === 16) {
      if (document.getElementById("trans2")) {
        document.getElementById("trans2").style.background = "transparent";
      }
    }
  });
  const history = useHistory();

  // ---------------------------------------------------------------------

  function rollDice() {
    const dice = [...document.querySelectorAll(".die-list")];
    var generatedNum;
    if(31-parseInt(level)<=4){
      generatedNum=31-parseInt(level);
    }else{
      generatedNum = getRandomNumber(1, 4);
    }

    dice.forEach((die) => {
      toggleClasses(die);

      die.dataset.roll = generatedNum;
    });

    var update = parseInt(level) + generatedNum;
    let obj12=passbook;
    let money =
      retrievedObject.moneyInHand[retrievedObject.moneyInHand.length - 1];
    if (retrievedObject.insurance.healthIns.purchased) {
      money = money - 200;
      var obj={
        name:'Health Insurance Premium',
        type:'debit',
        amount:200
      }
      obj12.push(obj);
    }
    if (retrievedObject.insurance.homeIns.purchased) {
      money = money - 200;
      obj = {
        name: 'House Insurance Premium',
        type: 'debit',
        amount: 200
      }
      obj12.push(obj);
    }
    if (retrievedObject.insurance.vehicleIns.purchased) {
      money = money - 200;
      obj = {
        name: 'Vehicle Insurance Premium',
        type: 'debit',
        amount: 200
      }
      obj12.push(obj);
    }
    setTimeout(() => {
      executeScroll();
    }, 2000)
    setTimeout(() => {
      document.getElementById(update.toString()).style.background =
        "rgb(120, 214, 107)";
    }, 3500);

    var times=timesRolled+1;
    setTimeout(() => {
      setLevel(update);

      if (retrievedObject.fixedDeposit.turnsLeft === 1) {
        retrievedObject.fixedDeposit.purchased =
          parseFloat(retrievedObject.fixedDeposit.purchased) +
          parseFloat(retrievedObject.fixedDeposit.purchased) * 0.15;
        var amountFD = retrievedObject.fixedDeposit.purchased
        money =
          parseFloat(money) +
          parseFloat(retrievedObject.fixedDeposit.purchased);
        var obj={
          name:'Fixed Deposit Matured',
          type:'credit',
          amount:amountFD
        }
        obj12.push(obj);
        setPassbook(obj12);
        retrievedObject.fixedDeposit.turnsLeft = 0;
        retrievedObject.fixedDeposit.purchased = 0;
      } else {
        retrievedObject.fixedDeposit.turnsLeft =
          retrievedObject.fixedDeposit.turnsLeft - 1;
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
      retrievedObject.moneyInHand.push(money);
      retrievedObject.passbook=passbook;
      retrievedObject.timesRolled = times;
      if (retrievedObject.currentLevel >= 31) {
        localStorage.setItem(
          "financialLiteracy",
          JSON.stringify(retrievedObject)
        );
        history.push('/23');
      }else
      if(times===1){
        localStorage.setItem(
          "financialLiteracy",
          JSON.stringify(retrievedObject)
        );
        history.push('/2');
      }else if(times===2){
        retrievedObject.times=5;
        localStorage.setItem(
          "financialLiteracy",
          JSON.stringify(retrievedObject)
        );
        history.push('/1.2');
      }else{
        if(times%5===0){
          localStorage.setItem(
            "financialLiteracy",
            JSON.stringify(retrievedObject)
          );
          history.push('/5');
        }else{
          if (retrievedObject.ins !== -1) {
            var randIns = Math.floor(Math.random() * retrievedObject.levelset2.length);
            var finalIns = retrievedObject.levelset2[randIns];
            retrievedObject.levelset2.splice(randIns, 1);
            retrievedObject.ins = -1;
            localStorage.setItem(
              "financialLiteracy",
              JSON.stringify(retrievedObject)
            );
            history.push(`/${finalIns}`);
          } else {
            if (currentInd === -1) {
              var randInd = Math.floor(Math.random() * retrievedObject.levelset3.length);
              var finalStart = retrievedObject.levelset3[randInd];
              retrievedObject.levelset3.splice(randInd, 1);
              retrievedObject.currentInd = randInd;
              retrievedObject.next = Math.floor(Math.random() * (2))
              localStorage.setItem(
                "financialLiteracy",
                JSON.stringify(retrievedObject)
              );
              history.push(`/${finalStart}`);
            } else if (next === -1) {
              var finalEnd = currentInd;
              var finalEndLevel = retrievedObject.levelset4[finalEnd];
              retrievedObject.levelset4.splice(finalEnd, 1);
              retrievedObject.currentInd = -1;
             retrievedObject.ins = 0;
              localStorage.setItem(
                "financialLiteracy",
                JSON.stringify(retrievedObject)
              );
              history.push(`/${finalEndLevel}`);
            } else {
              retrievedObject.next = next-1;
              randInd = Math.floor(Math.random() * retrievedObject.levelset1.length);
              var miscNext = retrievedObject.levelset1[randInd];
              retrievedObject.levelset1.splice(randInd, 1);
              localStorage.setItem(
                "financialLiteracy",
                JSON.stringify(retrievedObject)
              );
              history.push(`/${miscNext}`);
            }
         }
        }


      }

    }, 5500);

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
  // let retrievedObt = JSON.parse(localStorage.getItem("financialLiteracy"));
  // var totalStocksFdValue =
  //   parseFloat(retrievedObt.stocks.oil) +
  //   parseFloat(retrievedObt.stocks.med) +
  //   parseFloat(retrievedObt.stocks.auto) +
  //   parseFloat(retrievedObt.stocks.steel) +
  //   parseFloat(retrievedObt.fixedDeposit.purchased);
  // // var moneycurrent=retrievedObt.moneyInHand
  // console.log(retrievedObt);
  // var netWorth = retrievedObt.moneyInHand.map(function (value) {
  //   return value + totalStocksFdValue;
  // });

  for (var i = 0; i < net.length; i++) {
    if (net[i] === net[i + 1]) {
      net.splice(i, 1);
    } else {
      continue;
    }
  }
  // for(var i=0;i<moneycurrent.length;i++){
  //   if(moneycurrent[i]==moneycurrent[i+1]){
  //     moneycurrent.splice(i,1)

  //   }else{

  //     continue;
  //   }
  // }

  const data = {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
    ],

    datasets: [
      {
        label: "Net Worth",
        data: net,
        fill: true,
        backgroundColor: "#00ff7349",
        borderColor: "#00ff73",
      },
      // ,
      // {
      //   label: "Money in hand",
      //   data: moneycurrent,
      //   fill: true,
      //   borderColor: "#742774"
      // }
    ],

  };
 let options = {
   scales: {
     y: {
       max: 45000,
       min: 0,
       ticks: {
         stepSize: 2500
       }
     }
   }
 };

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
  const goToBuyFD = () => {
    setTimeout(() => {
      history.push("/SPFD");
    }, 1000);
  };
  const goToBuyIns = () => {
    setTimeout(() => {
      history.push("/SPIns");
    }, 1000);
  };
  const goStock=()=>{
    setTimeout(()=>{
      history.push('./SPStock');
    },1000);
  }
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
                  Assets
                </h5>
                <button
                  type="button"
                  class="close "
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
              {retrievedObject.fixedDeposit.purchased === 0
                ? ""
                : displayContentFixedDep(
                    retrievedObject.fixedDeposit.purchased,
                    retrievedObject.fixedDeposit.turnsLeft
                  )}
              <div className="modal-body">
                <strong>Sell/Purchase Fixed Deposit</strong>
                <br />
                <button
                  onClick={goToBuyFD}
                  data-dismiss="modal"
                  className="btn btn-dark modal-card-button"
                >
                  Click
                </button>
              </div>
              <div className="modal-body">
                <strong>Sell/Purchase Insurance</strong>
                <br />
                <button
                  onClick={goToBuyIns}
                  data-dismiss="modal"
                  className="btn btn-dark modal-card-button"
                >
                  Click
                </button>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn  dice-page-btn modal-card-button"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal show={passbookShow} onHide={handlePassbookClose}>
        <Modal.Header closeButton>
          <Modal.Title>Passbook</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
          <div className="row">
          <div className="col-6">
          Description
          </div>
          <div className="col-2">
          Debit
          </div>
          <div className="col-2">
          Credit
          </div>
          <div className="col-2">
          Balance
          </div>
          </div>
          <hr style={{backgroundColor:'white'}}/>
          {passbook.  map(pass=>(<>
            <div className="row">
                  <div className='col-6'>
                    {pass.name}
                  </div>
                  {
                    pass.type==='debit'?
                    <div className='col-6'>
                    <div className='row'>
                    <div className='col-4' style={{color:'#FF0000',fontWeight:'700'}}>
                    -{pass.amount}
                  </div>
                  <div className='col-4'></div>
                  <div className='col-4'></div>
                  </div>
                  </div>


                  :
                  <div className='col-6'>
                  <div className='row'>
                  <div className='col-4'></div>
                   <div className='col-4' style={{color:'#6ECB63',fontWeight:'700'}}>
                    +{pass.amount}
                  </div>
                  <div className='col-4'></div>
                  </div>
                  </div>
                  }

            </div>
       <hr style={{backgroundColor:'white'}}/>
            </>
          ))

          }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePassbookClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal centered show={lotMoney} onHide={handleMoneyClose}>
        <Modal.Header closeButton>
          <Modal.Title>You're Doing great!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have a lot of money in hand. Consider investing it in Insurance, Fixed Deposit, or Stocks. For Insurance and Fixed Deposit, click on Assets, and for Stocks, click on stocks button</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleMoneyClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal centered show={showFD} onHide={handleFDClose}>
        <Modal.Header closeButton>
          <Modal.Title>FD Matured</Modal.Title>
        </Modal.Header>
        <Modal.Body>Money with Rate of Interest has been transferred to your bank Account!<br/>
          If you want to purchase a FD again, you can purchase it by clicking the Assets Button
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFDClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        <div className="dice-roll-page">
          <div className="container-fluid" style={{ paddingTop: "2rem" }}>
          <div className="row">
          <div className="col-4" style={{}}>
                <Link to="/intro" style={{ color: "white" }}>
                <button className="btn btn-danger   "   >Exit</button>
              </Link>
              </div>
            <h1 className="heading-title">Financial Literacy</h1>
            <div className="col-4" style={{textAlign:"right"}}>
                  <Link to="/help" style={{ color: "white" }}>
                  <button onClick={onHelp} className="btn btn-danger ">Help</button>
                </Link>
                </div>
          </div>
            <div className="row">
              <div className="col-5">
                <Line options={options} data={data} />
              </div>

              <div className="col-3 " style={{ textAlign: "center" }}>
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
                <br />
                <button
                  type="button"
                  className="btn dice-page-btn-1 animate__animated animate__pulse animate__infinite"
                  onClick={rollDice}
                  id="roll-button"

                >
                  Roll Dice
                </button>
              </div>
              <div className="col-4">
                <div className="row justify-content-center">
                  <div className="col-10" style={{textAlign:'center',fontSize:'20px',fontFamily:'Poppins',fontWeight:'600', marginBottom:'1rem'}}>
                    <strong>Net Worth:  ₹{" "} {net[net.length-1]}</strong>
                    <Popup
                      trigger={open => (
                        <button className="btn iButton" style={{width:'35px'}}>i</button>
                      )}
                      position="top center"
                      closeOnDocumentClick
                    >
                    <div className="iButtonContent">
                    Value of all assets. Selling Price of insurance+Fixed Deposit+Stocks+Money-in-hand

                    </div>
                    </Popup>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-10" style={{textAlign:'center',fontSize:'20px',fontFamily:'Poppins',fontWeight:'600', marginBottom:'1rem'}}>
                    <strong>Money in-hand:  ₹{" "} {  retrievedObject.moneyInHand[
                        retrievedObject.moneyInHand.length - 1
                      ]}</strong>
                    <Popup
                      trigger={open => (
                        <button className="btn iButton" style={{width:'35px'}}>i</button>
                      )}
                      position="top center"
                      closeOnDocumentClick
                    >
                    <div className="iButtonContent">
                      Money in-hand. Only this money can be used to purchase stocks/insurance and other assets. The remainder of your net worth is locked up in assets.

                    </div>
                    </Popup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <button
                      className="btn dice-page-btn-2"
                      onClick={handleShow}
                      style={{ color: "white" }}
                    >
                      Stock Market
                    </button>
                    <Popup
                      trigger={open => (
                        <button className="btn iButton">i</button>
                      )}
                      position="top center"
                      closeOnDocumentClick
                    >
                    <div className="iButtonContent">
                    Virtual Stock market. The value keeps updating after every move

                    </div>
                    </Popup>
                  </div>
                  <div className="col-6" style={{ marginLeft: "",fontSize:'20px',fontFamily:'Poppins',fontWeight:'600' }}>

                    <strong>PIN: 2345</strong>
                  </div>
                </div>
                <div className="row" style={{ marginTop: "2rem" }}>
                  <div className="col-6">
                    <button
                      className="btn  dice-page-btn-2"
                      style={{ color: "white" }}
                      data-toggle="modal"
                      data-target="#assets"
                    >
                      Assets
                    </button>
                    <Popup
                      trigger={open => (
                        <button className="btn iButton">i</button>
                      )}
                      position="top center"
                      closeOnDocumentClick
                    >
                    <div className="iButtonContent">
                    All the insurance/Fixed deposits owned

                    </div>
                    </Popup>
                  </div>
                  <div className="col-6">
                    <button
                      className="btn dice-page-btn-2"
                      style={{ color: "white" }}
                      onClick={handlePassbookShow}
                    >
                      Pass Book
                    </button>
                    <Popup
                      trigger={open => (
                        <button className="btn iButton">i</button>
                      )}
                      position="top center"
                      closeOnDocumentClick
                    >
                    <div className="iButtonContent">
                    Track all your expenses here

                    </div>
                    </Popup>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container-fluid animate__animated animate__fadeInRight" ref={myRef}
            style={{
              marginTop: "2rem",
              paddingBottom: "124px",
              marginRight: "40px",
              paddingLeft: "0",
              paddingRight: "0",
            }}
          >
            <div
              className="row r board-row"

              style={{ marginRight: "30px", marginLeft: "30px" }}
            >
              <div className="" id="0"></div>
              <div
                className="steps col justify-content-center d-flex align-items-center"
                id="1"
                style={{
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              >
                1
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center"
                id="2"
              >
                2
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center"
                id="3"
              >
                3
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center"
                id="4"
              >
                4
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center"
                id="5"
              >
                5
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center"
                id="6"
              >
                6
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="7"
                style={{ borderTopRightRadius: "30px  " }}
              >
                7
              </div>
            </div>
            <div
              className="row r board-row trans-row"
              style={{
                marginLeft: "auto",
                marginRight: "30px",
                width: "fit-content",
              }}
              id="trans"
            >
              <div
                className="steps col justify-content-center d-flex align-items-center trans-block "
                style={{
                  borderTopRightRadius: "20px  ",
                  borderBottomRightRadius: "20px  ",
                  width: "189px",
                  background: "#16ccfc",
                }}
              ></div>
              <div
                className="steps col justify-content-center d-flex align-items-center  "
                id="8"
                style={{ marginLeft: "auto", width: "190px", color: "#fff" }}
              >
                8
              </div>
            </div>
            <div
              className="row r board-row"
              style={{ marginRight: "30px", marginLeft: "30px" }}
            >
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="15"
                style={{ borderTopLeftRadius: "30px" }}
              >
                15
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="14"
              >
                14
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="13"
              >
                13
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="12"
              >
                12
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="11"
              >
                11
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="10"
              >
                10
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="9"
                style={{ borderBottomRightRadius: "30px  " }}
              >
                9
              </div>
            </div>

            <div
              className="row r board-row trans-row"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
                width: "fit-content",
              }}
              id="trans2"
            >
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="16"
                style={{
                  width: "189px",
                  color: "#fff",
                  display: "inline-block",
                }}
              >
                16
              </div>

              <div
                className="steps col justify-content-center d-flex align-items-center trans-block "
                style={{
                  borderTopLeftRadius: "20px  ",
                  borderBottomLeftRadius: "20px  ",
                  width: "189px",
                  background: "#27def4",
                }}
              ></div>
            </div>
            <div
              className="row r board-row"
              style={{ marginLeft: "30px", marginRight: "30px" }}
            >
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="17"
                style={{ borderBottomLeftRadius: "30px  " }}
              >
                17
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="18"
              >
                18
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="19"
              >
                19
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="20"
              >
                20
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="21"
              >
                21
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="22"
              >
                22
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="23"
                style={{ borderTopRightRadius: "30px" }}
              >
                23
              </div>
            </div>
            <div
              className="row r board-row trans-row"
              style={{
                marginLeft: "auto",
                marginRight: "30px",
                width: "fit-content",
              }}
              id="trans"
            >
              <div
                className="steps col justify-content-center d-flex align-items-center trans-block "
                style={{
                  borderTopRightRadius: "20px  ",
                  borderBottomRightRadius: "20px  ",
                  width: "189px",
                  background: "#5cebe2",
                }}
              ></div>
              <div
                className="steps col justify-content-center d-flex align-items-center  "
                id="24"
                style={{ marginLeft: "auto", width: "190px", color: "#fff" }}
              >
                24
              </div>
            </div>
            <div
              className="row r board-row"
              style={{ marginRight: "30px", marginLeft: "30px" }}
            >
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="31"
                style={{
                  borderTopLeftRadius: "30px",
                  borderBottomLeftRadius: "30px",
                }}
              >
                31
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="30"
              >
                30
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="29"
              >
                29
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="28"
              >
                28
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="27"
              >
                27
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="26"
              >
                26
              </div>
              <div
                className="steps col justify-content-center d-flex align-items-center "
                id="25"
                style={{ borderBottomRightRadius: "30px  " }}
              >
                25
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
            <p>Previous value:  {steel}</p>
            <p>Increase:   {steelChange}%</p>
            <p>
              New value:
              {parseInt(steel) + (parseInt(steel) * steelChange) / 100}
            </p>
            <p>
              <h2>Oil:</h2>
            </p>
            <p>Previous value:   {oil}</p>
            <p>Increase:   {oilChange}%</p>
            <p>New value:   {parseInt(oil) + (parseInt(oil) * oilChange) / 100}</p>
            <p>
              <h2>Auto:</h2>
            </p>
            <p>Previous value:   {auto}</p>
            <p>Increase:   {autoChange}%</p>
            <p>
              New value:   {parseInt(auto) + (parseInt(auto) * autoChange) / 100}
            </p>
            <p>
              <h2>Pharmaceutical:</h2>
            </p>
            <p>Previous value:   {med}</p>
            <p>Increase:   {medChange}%</p>
            <p>New value:   {parseInt(med) + (parseInt(med) * medChange) / 100}</p>
            {timesRolled>=2?<p><button onClick={goStock} className="btn btn-dark modal-card-button">Sell/Purchase Stocks</button></p>:""}
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
