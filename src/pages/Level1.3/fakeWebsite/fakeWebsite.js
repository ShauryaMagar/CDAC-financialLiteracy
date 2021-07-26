import React from 'react';
import {useHistory} from 'react-router-dom';
import Ad from './ad.jpg';
import Dollar from './dollar.jpg';
import {Modal,Button} from 'react-bootstrap';
import CardImg from './card-img.jpg';
import Congrat from './congratulate.jpg';
import FakeLogo from './fakeLogo.png';

const FakeWebsite=()=>{
    const history=useHistory();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [money, setMoney] = React.useState(0);
    const [show, setShow] = React.useState(false);
    const [passbook,setPassbook]=React.useState();
    const [pin, setPin] = React.useState("");
    const [CVV, setCVV] = React.useState("");
    const [retrievedObject, setRetrievedObject] = React.useState({});
    React.useEffect(() => {
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setPassbook(retrievedObj.passbook);
        setMoney(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
        setIsLoaded(true);
    }, []);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const wrongChoice=()=>{
        var pin1 = pin;
        var CVV1 = CVV;
        pin1 = pin1.replaceAll(" ", "").trim();
        CVV1 = CVV1.replaceAll(" ", "").trim();
        if (pin1 != '2345' || CVV1 != '418') {
            alert("Enter proper Details!");
        } else{
            let obj12 = passbook;
            let obj = {
                name: 'Online Banking Scam',
                type: 'debit',
                amount: 5000
            }
            obj12.push(obj);
            setPassbook(obj12);
            retrievedObject.passbook = passbook;
            retrievedObject.moneyInHand.push(parseInt(money) - 5000);
            localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
            alert("You've been scammed. Never Enter personal details on unknown websites. Rs 5000 deducted!");
            setTimeout(() => {
                history.push("/MoreScam2");
            }, 1000);
        }
    }
    const rightChoice=()=>{
        let obj12 = passbook;
        let obj = {
            name: 'Level rewards',
            type: 'credit',
            amount: 5000
        }
        obj12.push(obj);
        setPassbook(obj12);
        retrievedObject.passbook = passbook;
        retrievedObject.moneyInHand.push(parseInt(money)+5000);
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        alert("Phew! That was close. You just saved yourself from a Scam. You've been rewarded Rs. 5000");
        setTimeout(() => {
            history.push("/moreScam2");
        }, 1000);
    }
    const handlePin = (e) => setPin(e.target.value);
    const handleCVV = e => setCVV(e.target.value);
    return(
        <div style={{paddingTop:'2rem'}}>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Card Details</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={CardImg}alt="Credit card" style={{height:'auto',width:'400px'}}></img><br></br>
        Pin: 2134
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            <div className="container">
                <div className="row">
                    <div className="col" style={{textAlign:'center'}}>
                        <img src={FakeLogo} alt="Dollar game"></img>
                    </div>
                </div>
                <div className="row justify-content-center" style={{marginTop:'2rem'}}>
                    <div className="col-10">
                        <h1 style={{color:'red'}}>
                          Update current billing information
                        </h1>
                        <p>Hi, Unfortunately we cannot authorize your payment for the next billing cycle of your subscription, Netflux was unable to recieve a payment because the financial institution rejected the monthly charge.</p>
                        <div className="row justify-content-start" style={{marginTop:'2rem'}}>
                                    <div className="col-10">

                                         <div class="form-group">
                                            <input type="email" value={pin} onChange={handlePin} class="form-control form-control-lg" id="PIN" aria-describedby="emailHelp" placeholder="Enter Your PIN"/>

                                        </div>
                                         <div class="form-group">
                                            <input type="email" value={CVV} onChange={handleCVV} class="form-control form-control-lg" id="CVV" aria-describedby="emailHelp" placeholder="Enter Your CVV"/>

                                        </div>
                                        <div className="form-group row">
                                            <div className="col-5">
                                                <button className="btn btn-light" onClick={handleShow}>Click to see CVV and Pin Number</button>
                                            </div>
                                            <div className="col-3">
                                                 <button className="btn btn-danger" onClick={wrongChoice}>Submit</button>
                                            </div>
                                            <div className="col-3">
                                                 <button className="btn btn-primary" onClick={rightChoice} style={{fontWeight:'700',fontFamily:'Poppins',fontSize:'18px'}}>Don't share</button>
                                            </div>
                                        </div>
                                    </div>

                         </div>

                    </div>
                </div>
                <div className="row">
                    <div className="row justify-content-center">
                             <img src={Ad} alt="advertisement"></img>
                         </div>
                </div>
            </div>
        </div>
    );
}

export default FakeWebsite;
