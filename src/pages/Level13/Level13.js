import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Decrease from "./images/downward-arrow.png";
import "./Level13.css";

const Thirteen = () => {
  const history = useHistory();
  const [retrievedObject, setRetrievedObject] = useState({});
  const [amt, setAmt] = useState(0);
  const [oil, setOil] = useState(0);
  var abc=amt;
  abc=amt+1000;
  useEffect(() => {
    let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
    setRetrievedObject(retrievedObj);
    window.scrollTo(0, 0);
     window.onpopstate = e => {
       history.push('/');
     }
    setAmt(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
    setOil(retrievedObj.stocks.oil);
  }, []);

  const nextPage = () => {
    var update =  parseFloat(oil)-parseFloat(oil * 0.5);

    // let addAmt=parseFloat(amt)+update

    retrievedObject.stocks.oil = update;

    // retrievedObject.moneyInHand=addAmt;
    localStorage.setItem("financialLiteracy", JSON.stringify(retrievedObject));
    setTimeout(() => {
      history.push("/start");
    }, 1000);
  };
  const SellPurchaseStock=()=>{
    var update = parseFloat(oil) - parseFloat(oil * 0.5);

    // let addAmt=parseFloat(amt)+update

    retrievedObject.stocks.oil = update;

    // retrievedObject.moneyInHand=addAmt;
    localStorage.setItem("financialLiteracy", JSON.stringify(retrievedObject));
    setTimeout(() => {
      history.push("/SPStock");
    }, 1000);
  }
  let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));

  if (retrievedObj.stocks.oil) {
    return (
      <>
        <div className="container-fluid  oil-back">
          <div
            className="row justify-content-center"
            style={{ paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <div
              className="col-7"
              style={{ color: "white", textAlign: "center", padding: "2rem" }}
            >
              <div>
                <h1>
                  <strong>Oil Prices have Decreased.</strong>
                </h1>
              </div>
              <div>
                <h4>
                  As stated earlier, the government has promoted renewable energy sources which had led to
                  the decrease in oil prices of the Crude Oil Industry.
                </h4>
              </div>
              <div>
                <img
                  src={Decrease}
                  alt="stock-decrease"
                  style={{ height: "200px" }}
                />
              </div>
              <br />
              <div>
                <h4>
                  You had bought oil stocks worth ₹ {parseFloat(oil)}
                  <br />
                  <br />
                  The price has decreased by 50% to ₹{" "}
                  {parseFloat(oil) - parseFloat(oil) * 0.5}
                  <br />
                  <br />
                  <button className="btn btn-light btn-lg" onClick={nextPage}>
                    Next
                  </button>
                  <br />
                  <br />
                    <button onClick={SellPurchaseStock} className="btn btn-light btn-lg">
                      Sell / Buy Stocks
                    </button>
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
        <div className="container-fluid  oil-back">
          <div
            className="row justify-content-center"
            style={{ paddingTop: "2rem", paddingBottom: "5rem" }}
          >
            <div
              className="col-7"
              style={{ color: "white", textAlign: "center", padding: "2rem" }}
            >
              <div>
                <h1>
                  <strong>Oil Prices have Decreased.</strong>
                </h1>
              </div>
              <div>
                <h4>
                As stated earlier, the government has promoted renewable energy sources which had led to
                the decrease in oil prices of the Crude Oil Industry.
                </h4>
              </div>
              <div>
                <img
                  src={Decrease}
                  alt="stock-decrease"
                  style={{ height: "200px" }}
                />
              </div>
              <br />
              <div>
                <h4>
                  Yay! You did not buy any oil stocks earlier!
                  <br />
                  <br />
                  You did a good job in analysing the situation!
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

export default Thirteen;