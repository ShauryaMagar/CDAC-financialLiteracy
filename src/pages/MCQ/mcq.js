import React from 'react';
import {useHistory} from 'react-router-dom';
import { Link } from "react-router-dom";
import {Modal,Button} from 'react-bootstrap';
import "./mcq.css";

const question = {
  q:"PAN means:",
  a:"  A kind of utensil",
  b:"  Primary Account Number",
  c:"  Permanent Account Number",
  d:"  None of above",
  ans: "c",
  explain : "The Permanent Account Number (PAN) card, issued by the Income tax Department, is one of the most important documents nowadays. The card was issued in order to prevent tax evasion by individuals and entities as it links all financial transactions made by a particular individual or entity.",
  wrongText: "PAN stands for Permanent Account Number."
}


const Mcq = () => {


  const [op,setOp]=React.useState();
  const [right,setRight]=React.useState(false);
  const [wrong,setWrong]=React.useState(false);
  const handleRightClose = () => setRight(false);
  const handleRightShow = () => setRight(true);
  const handleWrongClose = () => setWrong(false);
  const handleWrongShow = () => setWrong(true);
  const handleChange=(e)=>{
      const val = e.target.value;
      setOp(val);
  }
  const submitHandler=(e)=>{
      e.preventDefault();
      if(op=== question.ans){
          handleRightShow();
      }else{
        handleWrongShow();
      }
  }
  const history = useHistory();
  const nextPage=()=>{
      setTimeout(()=>{
          history.push("/start");
      },2000)
  }
  return(
    <>
    <div className = " container ">
    <div className = "row">
    <div className = "col-6 question-body">
    <h2 className = "heading">Quick Question</h2><br/>
    <h4>{question.q}</h4><br/>
    <form onSubmit={submitHandler}>
        <p>
            <input type="radio" id="a" name="answer" value="a" onChange={handleChange} />
            <label for="a"> {question.a}</label><br/>
            <input type="radio" id="b" name="answer" value="b" onChange={handleChange}/>
            <label for="b">{question.b}</label><br/>
            <input type="radio" id="c" name="answer" value="c" onChange={handleChange}/>
            <label for="c">{question.c}</label><br/>
            <input type="radio" id="d" name="answer" value="d"onChange={handleChange} />
            <label for="d">{question.d}</label><br/><br/>
            <button type="submit" className="btn btn-dark">Submit</button>
        </p>
    </form>
    </div>
      </div>
    <Modal show={right} onHide={handleRightClose}>
        <Modal.Header>
        <Modal.Title>Correct Answer.</Modal.Title>
        </Modal.Header>
        <Modal.Body>{question.explain}</Modal.Body>
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
        <Modal.Body>{question.wrongText}<br/><br/>{question.explain}</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={nextPage}>
            Next
        </Button>
        </Modal.Footer>
    </Modal>



    </div>
    </>
  )

}

export default Mcq;

//onSubmit={submitHandler}
//onChange={handleChange}