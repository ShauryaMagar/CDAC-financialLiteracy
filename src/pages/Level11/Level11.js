import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Increase from "./images/increase.png";
import "./Level11.css";
import { bottom } from "@popperjs/core";

const Eleven = () => {
  const history = useHistory();
  const [retrievedObject, setRetrievedObject] = useState({});
  const [amt, setAmt] = useState(0);
  const [med, setMed] = useState(0);

  useEffect(() => {
    let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
    setRetrievedObject(retrievedObj);

    setAmt(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
    setMed(retrievedObj.stocks.med);
  }, []);

  const nextPage = () => {
    var update = parseFloat(med * 0.4) + parseFloat(med);

    // let addAmt=parseFloat(amt)+update

    retrievedObject.stocks.med = update;

    // retrievedObject.moneyInHand=addAmt;
    localStorage.setItem("financialLiteracy", JSON.stringify(retrievedObject));
    setTimeout(() => {
      history.push("/start");
    }, 1000);
  };
  let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));

  if (retrievedObj.stocks.med) {
    return (
      <>
        <div className="container-fluid pharma-stocks-page">
          <div
            className="row justify-content-center"
            style={{ paddingTop: "2.9rem", paddingBottom: "0rem" }}
          >
            <div
              className="col-7"
              style={{ color: "black", textAlign: "center", padding: "2rem" }}
            >
              <div>
                <h1>
                  <strong>Pharma Prices have Increased!!</strong>
                </h1>
              </div>
              <div>
                <h4>
                  As stated earlier a pandemic has hit India which had les to
                  the increase in pharma prices of the Pharmaceutical Industry.
                </h4>
              </div>
              <div>
                <img
                  src={Increase}
                  alt="stock-increase"
                  style={{ height: "200px" }}
                />
              </div>
              <br />
              <div>
                <h4>
                  You had bought pharma stocks worth ₹ {parseFloat(med)}
                  <br />
                  <br />
                  The Price has increased by a whopping 40% to ₹{" "}
                  {parseFloat(med) * 0.4 + parseFloat(med)}
                  <br />
                  <br />
                  <button className="btn btn-light btn-lg" onClick={nextPage}>
                    Next
                  </button>
                  <br />
                  <br />
                  <Link to="/SPStock">
                    <button className="btn btn-light btn-lg">
                      Sell / Buy Stocks
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container-fluid pharma-stocks-page">
          <div
            className="row justify-content-center"
            style={{ paddingTop: "2.9rem", paddingBottom: "0rem" }}
          >
            <div
              className="col-7"
              style={{ color: "black", textAlign: "center", padding: "2rem" }}
            >
              <div>
                <h1>
                  <strong>Pharma Prices have Increased!!</strong>
                </h1>
              </div>
              <div>
                <h4>
                  As stated earlier a pandemic has hit India which had led to
                  the increase in pharma prices of the Pharmaceutical Industry.
                </h4>
              </div>
              <div>
                <img
                  src={Increase}
                  alt="stock-increase"
                  style={{ height: "200px" }}
                />
              </div>
              <br />
              <div>
                <h4>
                  Uh-Oh! you did not buy any pharma stocks earlier!
                  <br />
                  <br />
                  Next time make sure to analyse every situation!
                  <br />
                  <br />
                  <button className="btn btn-light btn-lg" onClick={nextPage}>
                    Next
                  </button>
                  <br />
                  <br />
                  <Link to="/SPStock">
                    <button className="btn btn-light btn-lg">
                      Sell / Buy Stocks
                    </button>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Eleven;
