import React from 'react';
import './Level3.css';
import {useHistory} from 'react-router-dom';
import CardImg from './card-img.jpg';
import {Modal,Button} from 'react-bootstrap';
const Three=()=>{
    const history = useHistory();
    const [show, setShow] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [money,setMoney]=React.useState(0);
    const [retrievedObject, setRetrievedObject] = React.useState({});
    React.useEffect(() => {
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setMoney(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
        setIsLoaded(true);
    }, []);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit=()=>{
        retrievedObject.moneyInHand.push(parseInt(money)+2000);
        localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
        alert("You've been awarded Rs 2000 for completing your first financial transaction");
        setTimeout(()=>{
            history.push('/start');
        },1000);
    }
    return(
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={CardImg}alt="Credit card" style={{height:'auto',width:'400px'}}></img></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <div className="container-fluid bill-payment-card" style={{paddingTop:'5rem',paddingBottom:'7rem'}}>
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="container" style={{textAlign:'center'}}>
                        <div>
                            <div className='row justify-content-center'>
                             <div className="col-3">
                             </div>
                             <div className="col-6">
                                <h1>Bill Payment</h1>
                             </div>
                             <div className="col-3">
                                 PIN: 2134
                             </div>
                            </div>
                            <div className="row justify-content-center">
          
                            </div>
                            <div className="row" style={{marginTop:'3rem'}}>
                                <div className='col-6'>
                                    <table cellPadding="10px" width='90%' height='100%'>
                                        <tr>
                                            <th>Sr. No.</th>
                                            <th>
                                                Utility
                                            </th>
                                            <th>Amount</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Light Bill</td>
                                            <td>Rs. 1000</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                2
                                            </td>
                                            <td>
                                                Maintainence bill
                                            </td>
                                            <td>Rs. 500</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                3
                                            </td>
                                            <td>
                                                Internet bill
                                            </td>
                                            <td>Rs. 1000</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                Total
                                            </td>
                                            <td>Rs. 2500</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className='col-6'>
                                    <div className="row">
                                        <h3>To complete an online transaction, you need to enter your ATM pin Number,CVV Number, and Credit Card number</h3>
                                    </div>
                                    <div className="row justify-content-center">
                                        <button type="button" class="btn btn-primary" onClick={handleShow}>
                                            Click to see your Credit Card
                                        </button>
                                    </div>
                                    <div className="row justify-content-start" style={{marginTop:'2rem'}}>
                                        <div className="col-12">
                                            <div class="form-group">
                                            <input type="email" class="form-control form-control-lg" id="Credit Card number" aria-describedby="emailHelp" placeholder="Enter Your credit card number"/>
                                            
                                        </div>
                                         <div class="form-group">
                                            <input type="email" class="form-control form-control-lg" id="PIN" aria-describedby="emailHelp" placeholder="Enter Your PIN"/>
                                            
                                        </div>
                                         <div class="form-group">
                                            <input type="email" class="form-control form-control-lg" id="CVV" aria-describedby="emailHelp" placeholder="Enter Your CVV"/>
                                            
                                        </div>
                                        </div>
                                        
                                    </div>
                                    <div className="row" style={{marginTop:'2rem'}}>
                                        <button className="btn btn-dark btn-block" onClick={onSubmit} style={{fontWeight:'600',fontSize:'22px', paddingBottom:'0',backgroundColor:'rgb(0, 175, 38)',outline:'none',border:'3px solid black'}} >
                                            Pay !
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Three;