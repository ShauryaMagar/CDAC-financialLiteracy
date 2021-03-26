import React from 'react';
import {useHistory} from 'react-router-dom';
import Ad from './ad.jpg';
import Dollar from './dollar.jpg';
import {Modal,Button} from 'react-bootstrap';
import CardImg from './card-img.jpg';
import Congrat from './congratulate.jpg';
const Level5=()=>{
    const history=useHistory();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [money, setMoney] = React.useState(0);
    const [show, setShow] = React.useState(false);
    const [retrievedObject, setRetrievedObject] = React.useState({});
    React.useEffect(() => {
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setMoney(retrievedObj.moneyInHand);
        setIsLoaded(true);
    }, []);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const wrongChoice=()=>{
        retrievedObject.moneyInHand=parseInt(money)-5000;
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        alert("You've been scammed. Never Enter personal details on unknown websites. Rs 5000 deducted!");
        setTimeout(()=>{
            history.push("/start");
        },1000);
    }
    const rightChoice=()=>{
        retrievedObject.moneyInHand=parseInt(money)+5000;
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        alert("Phew! That was close. You just saved yourself from a Scam. You've been rewarded Rs. 5000");
        setTimeout(() => {
            history.push("/start");
        }, 1000);
    }
    return(
        <div style={{backgroundColor:'black'}}>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={CardImg}alt="Credit card" style={{height:'auto',width:'400px'}}></img><br></br>
        Pin:2134
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <img src={Dollar} alt="Dollar game"></img>
                    </div>
                    <div className="col-5">
                        <img src={Congrat} alt="congratulation message"></img>
                    </div>
                </div>
                <div className="row justify-content-center" style={{marginTop:'2rem'}}>
                    <div className="col-10">
                        <h1 style={{color:'red'}}>
                            Congratulations! You are lucky winner of Rs. 35000. To get the amount transferred to your bank account, Enter you Pin Number and CVV number.
                        </h1>
                        <div className="row justify-content-start" style={{marginTop:'2rem'}}>
                                    <div className="col-10">
                                           
                                         <div class="form-group">
                                            <input type="email" class="form-control form-control-lg" id="PIN" aria-describedby="emailHelp" placeholder="Enter Your PIN"/>
                                            
                                        </div>
                                         <div class="form-group">
                                            <input type="email" class="form-control form-control-lg" id="CVV" aria-describedby="emailHelp" placeholder="Enter Your CVV"/>
                                            
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-5">
                                                <button className="btn btn-light" onClick={handleShow}>Click to see CVV and Pin Number</button>
                                            </div>
                                            <div className="col-3">
                                                 <button className="btn btn-danger" onClick={wrongChoice}>Submit</button>
                                            </div>
                                            <div className="col-3">
                                                 <button className="btn btn-primary" onClick={rightChoice}>Don't share</button>
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

export default Level5;