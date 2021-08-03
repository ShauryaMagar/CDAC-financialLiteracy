import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
import Trophy from "./trophy.png"
import Lost from "./lost.png"
import { Link } from "react-router-dom";
import "./last.css"

const Last=()=>{
  const history=useHistory();
    const [money,setMoney]=React.useState(0);
        const [netWorth,setNetWorth]=React.useState(0);
        const [vehicle,setVehicle]=React.useState(0);
        const [home,setHome]=React.useState(0);
        const [health,setHealth]=React.useState(0);
    const [passbook,setPassbook]=React.useState();
    const [passbookShow,setPassbookShow]=React.useState(false);
    const handlePassbookClose = () => setPassbookShow(false);
    const handlePassbookShow = () => setPassbookShow(true);
    const [isLoaded, setIsLoaded] = React.useState(false);

    const [retrievedObject, setRetrievedObject] = React.useState({});
    useEffect(()=>{
      window.onpopstate = e => {
        history.push('/');
      }
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        console.log(retrievedObj);
        setRetrievedObject(retrievedObj);
        window.scrollTo(0, 0);
        setMoney(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
        setPassbook(retrievedObj.passbook);
        setNetWorth(retrievedObj.netWorth[retrievedObj.netWorth.length -1]);
        setIsLoaded(true);
    if(retrievedObj.insurance.healthIns.purchased){
      setHealth(parseInt(retrievedObj.insurance.healthIns.sellingPrice))
      
    }
    if(retrievedObj.insurance.vehicleIns.purchased){
      setVehicle(parseInt(retrievedObj.insurance.vehicleIns.sellingPrice))
    }
    if(retrievedObj.insurance.homeIns.purchased){
      setHome(parseInt(retrievedObj.insurance.homeIns.sellingPrice))
    }
    // eslint-disable-next-line 
    },[]);


    if(!isLoaded){
        return(
            <>Loading</>
        )
    }else{
        if(netWorth>20000){
        return(
            <>
            <div className="last-page lp-one">
            <div className="row justify-content-center">
            <div  className="col-10 exitButton" style={{}}>
                  <Link to="/intro" style={{ color: "white" }}>
                  <button className="btn btn-danger">Exit</button>
                </Link>
                </div>
                </div>
                <div className="row justify-content-center" >
                    <div className="col-5">
                        <div style={{marginTop:'1rem'}}>
                            <h1 style={{fontFamily:'Poppins',fontWeight:'700'}}>Congratulations!! You Win :)</h1>
                        </div>
                        <div style={{marginTop:'1rem'}} >

                            <p>Your financial assets are worth more than they were at the begining</p>
                            <p>This is a result of wise investments in the stock market keeping current events in mind, having the foresight to buy insurance and not falling for scams and schemes.</p>
                        </div>

                        <hr/>


                        <div className="summary-card" >
                            <h3 style={{fontFamily:'Poppins',fontWeight:'500'}}>Game Summary:</h3>
                            <h4><strong>Net Worth:</strong> {netWorth}
                            <span style={{marginLeft:"25%"}}><button className="btn btn-dark modal-card-button" style={{fontFamily:'Poppins'}} onClick={handlePassbookShow}>View Passbook</button>
                            </span></h4>
                            <Modal show={passbookShow} onHide={handlePassbookClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Passbook</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div className='container'>
                              {passbook.map(pass=>(
                                <div className="row">
                                      <div className='col-7'>
                                        {pass.name}
                                      </div>
                                      {
                                        pass.type==='debit'?
                                        <div className='col-5' style={{color:'red'}}>
                                        -{pass.amount}
                                      </div>:
                                       <div className='col-5' style={{color:'green'}}>
                                        +{pass.amount}
                                      </div>
                                      }

                                </div>
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

                        </div>
                        <div className = "summary-card" style={{paddingBottom:"2rem"}}>
                            <center>
                            <table cellPadding="10px"  width='90%' height='100%' style={{textAlign:"center"}}>

                                <tr style={{backgroundColor:"transparent"}}>
                                    <td colSpan="2" style={{textAlign:"center"}}>Money in hand</td>
                                    <td> {money}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td rowSpan="4" style={{marginTop:'auto'}}>
                                        Stocks
                                    </td>
                                      <td style={{textAlign:"center"}}>Oil</td>
                                    <td>{parseInt(retrievedObject.stocks.oil)}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>

                                    <td style={{textAlign:"center"}}>Pharma</td>
                                    <td>{parseInt(retrievedObject.stocks.med)}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td style={{textAlign:"center"}}>Auto</td>
                                    <td>{parseInt(retrievedObject.stocks.auto)}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td style={{textAlign:"center"}}>Steel</td>
                                    <td>{parseInt(retrievedObject.stocks.steel)}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td rowSpan="3">Insurance</td>
                                      <td style={{textAlign:"center"}}>Health</td>
                                    <td>{health}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td style={{textAlign:"center"}}>Vehicle</td>

                                    <td>{vehicle}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td style={{textAlign:"center"}}>Home</td>
                                    <td>{home}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td colSpan="2" style={{}}>Fixed Deposit</td>
                                    <td>{retrievedObject.fixedDeposit.purchased}</td>
                                </tr>

                            </table>
                            </center>
                        </div>



                    </div>
                    <div className='col-5'style={{textAlign:"center"}}>
                    <img src={Trophy} alt="trophy" style={{marginTop:'2rem'}}></img>
                    </div>

                </div>
            </div>

            </>
        )
    }else
        return(
            <>
            <div className="last-page lp-two">
            <div className="container-fluid">
            <div className="row justify-content-center">
            <div  className="col-10 exitButton" style={{}}>
                  <Link to="/intro" style={{ color: "white" }}>
                  <button className="btn btn-danger">Exit</button>
                </Link>
                </div>
                </div>
            <div className="row justify-content-center" >
                <div className="col-5">
                    <div style={{marginTop:'1rem'}}>
                        <h1 style={{fontFamily:'Poppins',fontWeight:'700'}}>Better Luck Next Time :(</h1>
                    </div>
                    <div className ="content" style={{marginTop:'1rem'}} >

                        <p>Your financial assets are worth less than what they were at the beginning of the game</p>
                        <p>This is a result of unwise investments in the stock market without keeping current events in mind, having no insurance and falling for scams and schemes.</p>
                    </div>
                    <hr/>


                    <div className="summary-card" >
                        <h3 style={{fontFamily:'Poppins',fontWeight:'500'}}>Game Summary:</h3>
                        <h4><strong>Net Worth:</strong> {netWorth}
                        <span style={{marginLeft:"25%"}}><button className="btn btn-dark modal-card-button" style={{fontFamily:'Poppins'}} onClick={handlePassbookShow}>View Passbook</button>
                        </span></h4>
                        <Modal show={passbookShow} onHide={handlePassbookClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Passbook</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className='container'>
                          {passbook.map(pass=>(
                            <div className="row">
                                  <div className='col-7'>
                                    {pass.name}
                                  </div>
                                  {
                                    pass.type==='debit'?
                                    <div className='col-5' style={{color:'red'}}>
                                    -{pass.amount}
                                  </div>:
                                   <div className='col-5' style={{color:'green'}}>
                                    +{pass.amount}
                                  </div>
                                  }

                            </div>
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

                    </div>
                    <div className = "summary-card" style={{paddingBottom:"2rem"}}>
                            <center>
                            <table cellPadding="10px"  width='90%' height='100%' style={{textAlign:"center"}}>

                                <tr style={{backgroundColor:"transparent"}}>
                                    <td colSpan="2" style={{textAlign:"center"}}>Money in hand</td>
                                    <td> {money}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td rowSpan="4" style={{marginTop:'auto'}}>
                                        Stocks
                                    </td>
                                      <td style={{textAlign:"center"}}>Oil</td>
                                    <td>{parseInt(retrievedObject.stocks.oil)}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>

                                    <td style={{textAlign:"center"}}>Pharma</td>
                                    <td>{parseInt(retrievedObject.stocks.med)}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td style={{textAlign:"center"}}>Auto</td>
                                    <td>{parseInt(retrievedObject.stocks.auto)}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td style={{textAlign:"center"}}>Steel</td>
                                    <td>{parseInt(retrievedObject.stocks.steel)}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td rowSpan="3">Insurance</td>
                                      <td style={{textAlign:"center"}}>Health</td>
                                    <td>{health}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td style={{textAlign:"center"}}>Vehicle</td>

                                    <td>{vehicle}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td style={{textAlign:"center"}}>Home</td>
                                    <td>{home}</td>
                                </tr>
                                <tr style={{backgroundColor:"transparent"}}>
                                    <td colSpan="2" style={{}}>Fixed Deposit</td>
                                    <td>{retrievedObject.fixedDeposit.purchased}</td>
                                </tr>

                            </table>
                            </center>
                        </div>



                </div>
                <div className='col-5'style={{textAlign:"center"}}>
                <img src={Lost} alt="lost the game" style={{marginTop:'2rem'}}></img>
                </div>

            </div>
            </div>
            </div>
            </>
        )
    }

}

export default Last;
