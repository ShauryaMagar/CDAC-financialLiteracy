import React,{useEffect} from 'react';
import {useLocation,useHistory} from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
import Trophy from "./trophy.png"
import Lost from "./lost.png"
import { Link } from "react-router-dom";

const Last=(props)=>{

    const [money,setMoney]=React.useState(0);
    const [passbook,setPassbook]=React.useState();
    const [passbookShow,setPassbookShow]=React.useState(false);
    const handlePassbookClose = () => setPassbookShow(false);
    const handlePassbookShow = () => setPassbookShow(true);
    const [isLoaded, setIsLoaded] = React.useState(false);

    const [retrievedObject, setRetrievedObject] = React.useState({});
    useEffect(()=>{
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        console.log(retrievedObj);
        setRetrievedObject(retrievedObj);
        setMoney(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
        setPassbook(retrievedObj.passbook);
        setIsLoaded(true);
    },[]);


    if(!isLoaded){
        return(
            <>Loading</>
        )
    }else{
        if(money>=20000){
        return(
            <>
            <div className="container-fluid selected-page-right">
            <div  style={{textAlign:'right',paddingRight:'1rem',paddingTop:'1rem'}}>
                  <Link to="/intro" style={{ color: "white" }}>
                  <button className="btn btn-danger">Exit</button>
                </Link>
                </div>
                <div className="row" >
                    <div className="col-6">
                        <div style={{marginTop:'1rem'}}>
                            <h1>Congratulations!! You Win :)</h1>
                        </div>
                        <div style={{marginTop:'1rem'}} onClick={rightGuess}>

                            <p><h4>Your financial assets are worth more than thry were at the begining</h4></p>
                            <p><h4>This is a result of wise investments in the stock market keeping current events in mind, having the foresight to buy insurance and not falling for scams and schemes.</h4></p>
                        </div>

                        <div style={{marginTop:'1rem'}} >
                            <h3>Game Summary:</h3>
                            <h4><strong>Net Worth:</strong> {retrievedObject.netWorth[retrievedObject.netWorth.length -1]}
                            <span style={{marginLeft:"25%"}}><button className="btn btn-dark" onClick={handlePassbookShow}>View Passbook</button>
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
                                        pass.type=='debit'?
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
                        <div >
                            <table cellPadding="10px" width='90%' height='100%' style={{textAlign:"center"}}>
                            <tr>
                                <th colSpan="2">Asset</th>
                                <th>Value</th>
                            </tr>

                                <tr>

                                    <td colSpan="2">Money in hand:</td>
                                    <td>{retrievedObject.moneyInHand[retrievedObject.moneyInHand.length -1]}</td>
                                </tr>
                                <tr>

                                    <td rowSpan="4" style={{marginTop:'auto'}}>
                                        Stocks
                                    </td>
                                      <td>Oil</td>
                                    <td>{retrievedObject.stocks.oil}</td>
                                </tr>
                                <tr>

                                    <td>Pharma</td>
                                    <td>{retrievedObject.stocks.med}</td>
                                </tr>
                                <tr>
                                    <td>Auto</td>
                                    <td>{retrievedObject.stocks.auto}</td>
                                </tr>
                                <tr>
                                    <td>Steel</td>
                                    <td>{retrievedObject.stocks.steel}</td>
                                </tr>
                                <tr>
                                    <td rowSpan="3">Insurance</td>
                                      <td>Health</td>
                                    <td>{retrievedObject.insurance.healthIns.purchased.toString()}</td>
                                </tr>
                                <tr>
                                    <td>Vehicle</td>
                                    <td>{retrievedObject.insurance.vehicleIns.purchased.toString()}</td>
                                </tr>
                                <tr>
                                    <td>Home</td>
                                    <td>{retrievedObject.insurance.homeIns.purchased.toString()}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">Fixed Deposit</td>
                                    <td>{retrievedObject.fixedDeposit.purchased}</td>
                                </tr>

                            </table>
                        </div>



                    </div>
                    <div className='col-6'style={{textAlign:"center"}}>
                    <img src={Trophy} style={{marginTop:'2rem'}}></img>
                    </div>

                </div>
            </div>
            </>
        )
    }else
        return(
            <>
            <div className="container-fluid selected-page-wrong">
            <div  style={{textAlign:'right',paddingRight:'1rem',paddingTop:'1rem'}}>
                  <Link to="/intro" style={{ color: "white" }}>
                  <button className="btn btn-danger">Exit</button>
                </Link>
                </div>
            <div className="row" >
                <div className="col-6">
                    <div style={{marginTop:'1rem'}}>
                        <h1>Better Luck Next Time :(</h1>
                    </div>
                    <div style={{marginTop:'1rem'}} >

                        <p><h4>Your financial assets are worth less than what they were at the begining</h4></p>
                        <p><h4>This is a result of unwise investments in the stock market without keeping current events in mind, having no insurance and falling for scams and schemes.</h4></p>
                    </div>

                    <div style={{marginTop:'1rem'}} >
                        <h3>Game Summary:</h3>
                        <h4><strong>Net Worth:</strong> {retrievedObject.netWorth[retrievedObject.netWorth.length -1]}
                        <span style={{marginLeft:"25%"}}><button className="btn btn-dark" onClick={handlePassbookShow}>View Passbook</button>
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
                                    pass.type=='debit'?
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
                    <div >
                        <table cellPadding="10px" width='90%' height='100%' style={{textAlign:"center"}}>
                        <tr>
                            <th colSpan="2">Asset</th>
                            <th>Value</th>
                        </tr>

                            <tr>

                                <td colSpan="2">Money in hand:</td>
                                <td>{retrievedObject.moneyInHand[retrievedObject.moneyInHand.length -1]}</td>
                            </tr>
                            <tr>

                                <td rowSpan="4" style={{marginTop:'auto'}}>
                                    Stocks
                                </td>
                                  <td>Oil</td>
                                <td>{retrievedObject.stocks.oil}</td>
                            </tr>
                            <tr>

                                <td>Pharma</td>
                                <td>{retrievedObject.stocks.med}</td>
                            </tr>
                            <tr>
                                <td>Auto</td>
                                <td>{retrievedObject.stocks.auto}</td>
                            </tr>
                            <tr>
                                <td>Steel</td>
                                <td>{retrievedObject.stocks.steel}</td>
                            </tr>
                            <tr>
                                <td rowSpan="3">Insurance</td>
                                  <td>Health</td>
                                <td>{retrievedObject.insurance.healthIns.purchased.toString()}</td>
                            </tr>
                            <tr>
                                <td>Vehicle</td>
                                <td>{retrievedObject.insurance.vehicleIns.purchased.toString()}</td>
                            </tr>
                            <tr>
                                <td>Home</td>
                                <td>{retrievedObject.insurance.homeIns.purchased.toString()}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Fixed Deposit</td>
                                <td>{retrievedObject.fixedDeposit.purchased}</td>
                            </tr>

                        </table>
                    </div>



                </div>
                <div className='col-6'style={{textAlign:"center"}}>
                <img src={Lost} style={{marginTop:'2rem'}}></img>
                </div>

            </div>
            </div>
            </>
        )
    }

}

export default Last;
