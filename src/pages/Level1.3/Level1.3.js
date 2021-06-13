import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import { useHistory} from "react-router-dom";
function Mid(){
    const [op,setOp]=React.useState();
    const [right,setRight]=React.useState(false);
    const [wrong,setWrong]=React.useState(false);
    const handleChange=(e)=>{
        const val = e.target.value;
        setOp(val);
    }
     const history = useHistory();
      const handleRightClose = () => setRight(false);
      const handleRightShow = () => setRight(true);
      const handleWrongClose = () => setWrong(false);
      const handleWrongShow = () => setWrong(true);
    const submitHandler=(e)=>{
        e.preventDefault();
        if(op==="elex"){
            handleRightShow();
        }
    }
    const nextPage=()=>{
        setTimeout(()=>{
            history.push("/start");
        },2000)
    }
    return(
        <div className="container" style={{marginTop:"5%"}}>
            <div className="row justify-content-center" style={{textAlign:"center"}}>
                <div className="col-11">
                   <p><h1>Now since you have purchased stocks, here are few things to be kept in mind.</h1></p> 
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-11">
                    <h4>
                        <p>Stocks are volatile. Their value keep changing depending on many factors.</p>
                        <p>When you purchase a stock in a company, you're literally purchasing a part of a company. If that company makes profit and expands, the value of your stocks also increases.</p>
                        <p>For example, if a company named "BSNL" starts providing Internet connectivity at extremely low rates, it is obvious that people would like to use their services. Now as more people start using their services, the company ends up making more profit. Therefore, the people who invested in this company at the right time, end up making good profits.</p>
                        <p>Throughout the game, keep an eye on newspaper clippings. They'll tell you about the various activities taking place all over the country. These activities may influence stock prices.</p>
                        <p>"ADD AN IMAGE OF AN EXAMPLE CLIPPING"</p>
                        <p>Based on the above clipping, which company you should be investing in?</p>
                        
                        <form onSubmit={submitHandler}>
                            <p>
                                <input type="radio" id="elex" name="comp" value="elex" onChange={handleChange}/>
                                <label for="elex">Electronics</label><br/>
                                <input type="radio" id="coal" name="comp" value="coal" onChange={handleChange} />
                                <label for="coal">Coal</label><br/>
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </p>
                        </form>
                        
                    </h4>
                </div>
            </div>
            <Modal show={right} onHide={handleRightClose}>
                <Modal.Header>
                <Modal.Title>Correct Answer.</Modal.Title>
                </Modal.Header>
                <Modal.Body>You're all set to go ahead!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={nextPage}>
                    Next
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={wrong} onHide={handleWrongClose}>
                <Modal.Header>
                <Modal.Title>Wrong Answer.</Modal.Title>
                </Modal.Header>
                <Modal.Body>Since govt is trying to boost Electronic parts, you should consider investing in Electronics industry.</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={nextPage}>
                    Next
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}

export default Mid;