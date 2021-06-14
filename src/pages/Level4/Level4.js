import React from 'react';
import {useHistory} from 'react-router-dom';
import {Modal,Button} from 'react-bootstrap';
const Level4=()=>{
    const history = useHistory();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [money, setMoney] = React.useState(0);
    const [retrievedObject, setRetrievedObject] = React.useState({});
    const [modalShow, setModalShow] = React.useState(true);
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                PAY DAY!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>It's your payday!!</h4>
                <p>
                You're receiving Rs. 5000 as your Payday. Use the money wisely in upcoming levels!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={showTime}>Close</Button>
            </Modal.Footer>
            </Modal>
        );
    }
    const onFormSubmit1 = () => {
            retrievedObject.moneyInHand = parseInt(money) + 5000;
            console.log(retrievedObject);
            localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
            history.push('/start');
        }
    const disp=(
        <>
        <div className="container" style={{marginTop:'15rem'}}>
            <div className="row justify-content-center">
                <h1>Previously: {money}</h1><br/>
            </div>
            <div className="row justify-content-center">
                <h1>Now: {parseInt(money)+5000}</h1>
                <br/>
            </div>
            <div className="row justify-content-center">
                <button onClick={onFormSubmit1} className="btn btn-dark">Next</button>
            </div>
        </div>
        
        
        
        </>
    )
    
    React.useEffect(() => {
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setMoney(retrievedObj.moneyInHand);
        setIsLoaded(true);
    }, []);
    
    const showTime=()=>{
        setModalShow(false);

    }
    return(
        <>
           <MyVerticallyCenteredModal
                show={modalShow}
                
            /> 
            <div>
                {!modalShow?disp:""}
            </div>
            
        </>
    );
}

export default Level4;