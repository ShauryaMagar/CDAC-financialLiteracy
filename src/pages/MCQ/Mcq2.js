import React from 'react';
import "./mcq.css";
import {Modal,Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const question = {
  q: "Aadhaar is ",
  a: "  12 digit number card",
  b:"  Identity proof issued by UIDAI",
  c: "  Both (a) & (b)",
  d: "  None of above",
  ans: "c",
  explain: "Aadhaar is a verifiable 12-digit identification number issued by Unique Identification Authority of India to the resident of India for free of cost. 1000 Rs have been added to your account",
  wrongText: "Aadhaar is a verifiable 12-digit identification number issued by Unique Identification Authority of India to the resident of India for free of cost"
}


const Mcq2 = () => {

  React.useEffect(()=>{
    let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
    setMoney(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
    setPassbook(retrievedObj.passbook);
    setRetrievedObject(retrievedObj);
     window.onpopstate = e => {
            history.push('/');
        }
    window.scrollTo(0, 0);
    // eslint-disable-next-line 
  },[])
  const [op,setOp]=React.useState();
  const [money,setMoney]=React.useState(0);
  const [right,setRight]=React.useState(false);
  const [passbook,setPassbook]=React.useState({});
  const [wrong,setWrong]=React.useState(false);
  const [retrievedObject,setRetrievedObject]=React.useState({});
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
          let obj12 = passbook;
          let obj = {
              name: 'MCQ Bonus',
              type: 'credit',
              amount: 1000
          }
          obj12.push(obj);
          setPassbook(obj12);
          var m=parseInt(money)+1000;
          setMoney(m);
      }else{
        handleWrongShow();
      }
  }
  const history = useHistory();
  const nextPage=()=>{
      setTimeout(()=>{
          retrievedObject.moneyInHand.push(money);
          retrievedObject.passbook=passbook;
          localStorage.setItem('financialLiteracy', JSON.stringify(retrievedObject));
          history.push("/start");
      },500)
  }
  return(
    <>
    <div className='mcq-back'>
    <div className = " container ">
    <div className = "row">
    <div className = "col-8 question-body">
    <h2 className = "heading"><i className="fas fa-question animate__animated animate__heartBeat animate__infinite" style={{color:'red',marginRight:'10px'}}></i>  Trivia Question <i className="fas fa-question animate__animated animate__heartBeat animate__infinite " style={{color:'red'}}></i></h2><br/><br/>
    <h4 style={{fontWeight:'600'}}>{question.q}</h4><br/>
    <form onSubmit={submitHandler}>
        <p>
            <input type="radio" id="a" name="answer" value="a" onChange={handleChange} style={{transform:'scale(1.2)'}} />
             <label for="a"> {question.a}</label><br/>
            <input type="radio" id="b" name="answer" value="b" onChange={handleChange} style={{transform:'scale(1.2)'}}/>
            <label for="b">{question.b}</label><br/>
            <input type="radio" id="c" name="answer" value="c" onChange={handleChange} style={{transform:'scale(1.2)'}}/>
            <label for="c">{question.c}</label><br/>
            <input type="radio" id="d" name="answer" value="d"onChange={handleChange} style={{transform:'scale(1.2)'}}/>
            <label for="d">{question.d}</label><br/><br/>
            <button type="submit" className="btn btn-primary btn-block" style={{fontFamily:'Poppins',fontWeight:'700',fontSize:'18px'}}>Submit</button>
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

    </div>
    </>
  )

}

export default Mcq2;