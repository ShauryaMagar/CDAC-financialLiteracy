import React from 'react';
import {useHistory} from 'react-router-dom';
import {Modal,Button} from 'react-bootstrap';
const Level4=()=>{
    const history = useHistory();
    // eslint-disable-next-line 
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [money, setMoney] = React.useState(0);
    const [passbook,setPassbook]=React.useState()
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
                You're receiving Rs. 3000 as your Payday. Use the money wisely in upcoming levels!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={showTime}>Close</Button>
            </Modal.Footer>
            </Modal>
        );
    }
    const onFormSubmit1 = () => {
            let obj12=passbook;
            let obj={
                name:'PAY DAY',
                type:'credit',
                amount:3000
            }
            obj12.push(obj);
            setPassbook(obj12);
            retrievedObject.passbook=passbook;
            retrievedObject.moneyInHand.push(parseInt(money) + 3000);
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
                <h1>Now: {parseInt(money)+3000}</h1>
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
        setPassbook(retrievedObj.passbook);
         window.onpopstate = e => {
             history.push('/');
         }
        setMoney(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
        setIsLoaded(true);
        // eslint-disable-next-line 
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