import React from "react";
import { useHistory } from "react-router-dom";
import Hospital from "./images/hospital.png";
const Ten = () => {
  const history = useHistory();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [retrievedObject, setRetrievedObject] = React.useState({});
  const [health, setHealth] = React.useState(false);
  const [amt, setAmt] = React.useState(0);

  React.useEffect(() => {
    let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
    setRetrievedObject(retrievedObj);
    setHealth(retrievedObj.insurance.healthIns.purchased);
    setIsLoaded(true);
    setAmt(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
  }, []);

  //onClick  when user has health insurance.
  // 1000 deducted
  const own = () => {
    var update = amt - 1000;
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
        <div className="container-fluid">
          <div
            className="row justify-content-center"
            style={{ marginTop: "2rem" }}
          >
            <div
              className="col-10"
              style={{
                backgroundColor: "#CDF0EA",
                color: "black",
                textAlign: "center",
                padding: "2rem",
              }}
            >
              <div style={{ textAlign: "right" }}>Balance: {amt}</div>
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
                  have health insurance, the expense is reduced to Rs 1000{" "}
                </h5>
              </div>
              <div>
                <img src={Hospital} alt="Hospital" />
              </div>
              <div>
                <h5>
                  Congratulations! You already had an insurance, so you have to
                  pay only Rs 1000.
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
      </>
    );
  } else {
    return (
      <>
        <div className="container-fluid">
          <div
            className="row justify-content-center"
            style={{ marginTop: "2rem" }}
          >
            <div
              className="col-10"
              style={{
                backgroundColor: "#CDF0EA",
                color: "black",
                textAlign: "center",
                padding: "2rem",
              }}
            >
              <div style={{ textAlign: "right" }}>Balance: {amt}</div>
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
                  health insurance, the expense is reduced to Rs 1000
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
      </>
    );
  }
};

export default Ten;
