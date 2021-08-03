import React from "react";
import { useHistory } from "react-router-dom";
import Hospital from "./images/hospital.png";
import './Level10.css'
const Ten = () => {
  const history = useHistory();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [retrievedObject, setRetrievedObject] = React.useState({});
  const [health, setHealth] = React.useState(false);
  const [passbook,setPassbook]=React.useState();
  const [amt, setAmt] = React.useState(0);

  React.useEffect(() => {
    let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
    setRetrievedObject(retrievedObj);
     window.onpopstate = e => {
       history.push('/');
     }
    setHealth(retrievedObj.insurance.healthIns.purchased);
    setIsLoaded(true);
    setPassbook(retrievedObj.passbook);
    window.scrollTo(0, 0);
    setAmt(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
  }, []);

  //onClick  when user has health insurance.
  // 1000 deducted
  const own = () => {
    var update = amt - 0;
    setAmt(update);
    retrievedObject.moneyInHand.push(update);
    localStorage.setItem("financialLiteracy", JSON.stringify(retrievedObject));
    setTimeout(() => {
      history.push("/start");
    }, 1000);
  };
  //onClick  when user does not have health insurance.
  // 8000 deducted
  const notOwn = () => {
    let obj12=passbook;
    let obj={
      name:'Hospitalization charges',
      type:'debit',
      amount:8000
    }
    obj12.push(obj);
    setPassbook(obj12);
    retrievedObject.passbook=passbook
    var update = amt - 8000;
    setAmt(update);
    retrievedObject.moneyInHand.push(update);
    localStorage.setItem("financialLiteracy", JSON.stringify(retrievedObject));
    setTimeout(() => {
      history.push("/start");
    }, 1000);
  };
  if (health) {
    return (
      <>
      <div className='hospi-back'>
        <div className="container-fluid">
          <div
            className="row justify-content-center"
            style={{ paddingTop: "2rem" }}
          >
            <div
              className="col-10"
              style={{
                backgroundColor: "#CDF0EA",
                color: "black",
                textAlign: "center",
                padding: "2rem",
                border:'5px solid black',
                borderRadius:'20px'
              }}
            >
              <div style={{ textAlign: "right" ,fontFamily:'Poppins',fontWeight:'700'}}>Balance: {amt}</div>
              <div>
                <h1>
                  {" "}
                  <strong> Unexpected Illness </strong>{" "}
                </h1>
              </div>
              <div>
                <h5>
                  Unfortunately, you had to be hospitalised due to sudden
                  illness. The cost of treatment is Rs. 8,000. However, if you
                  have health insurance, the expense is reduced to Rs 0{" "}
                </h5>
              </div>
              <div>
                <img src={Hospital} alt="Hospital" />
              </div>
              <div>
                <h5>
                  Congratulations! You already had an insurance, so you have to
                  pay only Rs 0.
                  <br />
                  <br />
                  <button onClick={own} className="btn btn-dark">
                    {" "}
                    Click here to continue{" "}
                  </button>
                </h5>
              </div>
            </div>
          </div>
        </div>{" "}
        </div>
      </>
    );
  } else {
    return (
      <>
      <div className='hospi-back'>
        <div className="container-fluid">
          <div
            className="row justify-content-center"
            style={{ paddingTop: "2rem" }}
          >
            <div
              className="col-10"
              style={{
                backgroundColor: "#CDF0EA",
                color: "black",
                textAlign: "center",
                padding: "2rem",
                border:'5px solid black',
                borderRadius:'20px'
              }}
            >
              <div style={{ textAlign: "right",fontFamily:'Poppins',fontWeight:'700'}}>Balance: {amt}</div>
              <div>
                <h1>
                  {" "}
                  <strong> Unexpected Illness </strong>{" "}
                </h1>
              </div>
              <div>
                <h5>
                  Unfortunately, you had to be hospitalised due to sudden
                  illness.The cost of treatment Rs. 8,000. However, if you have
                  health insurance, the expense is reduced to Rs 0
                </h5>
              </div>
              <div>
                <img src={Hospital} alt="Hospital" />
              </div>
              <div>
                <h5>
                  You didn 't have an insurance. As a result, you'll have to pay
                  Rs 8000 to the bank <br /> <br />
                  <button onClick={notOwn} className="btn btn-dark">
                    {" "}
                    Click here to continue{" "}
                  </button>
                </h5>
              </div>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
};

export default Ten;
