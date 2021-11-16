/* eslint-disable */
import React from "react";
import Img1 from "./images/start.png";
import Img2 from "./images/2.png";
import Img3 from "./images/3.png";
import Img4 from "./images/4.jpeg";
import Img5 from "./images/5.jpeg";
import Img6 from "./images/6.jpeg";
import Img7 from "./images/7.jpeg";
import Img8 from "./images/8.png";
import Img9 from "./images/9.png";
import Img10 from "./images/10.png";
import Img11 from "./images/11.jpeg";
import Img12 from "./images/12.jpeg";
import Img13 from "./images/13.jpeg";
import Img14 from "./images/14.jpeg";
import Img15 from "./images/15.jpeg";
import Img16 from "./images/16.jpg";

import { Link } from "react-router-dom";
import "./help.css";

const Help = () => {
  return (
    <div className="help-container">
    <Link to="/start" style={{ color: "white" }}>
                <button className="btn btn-danger   "   >Back</button>
              </Link>
      <div className="row " style={{textAlign:'center',marginTop:'1%'}}>
        <div className="col-help-pg help-text">
          <p>
            Help!
            <br />
            Are you stuck somewhere while playing our game?
            <br /> No worries! We have got you covered. Let us explain the
            different features of our game:
            <br />
          </p>
        </div>
      </div>
      <div className="row help-row">
        <div className="col-6 help-text" style={{paddingTop:"3%"}}>
          What is this game about?
        </div>
        <div className=" col-6 help-text" style={{paddingTop:'1%'}}>
          FINLIT, is an interactive educational game which promotes and teaches students about financial literacy. We have thought of a fun game which will help you understand a lot of handlingcof finance by putting them through very life like situations. 
        </div>
      </div>
      <div className="row help-row justify-content-center">
        <div className="col-10 help-text" style={{paddingTop:"2%"}}>
          Developed with love by: <br/>
          Arjav Parekh<br/>
          Shaurya Magar <br/>
          Shazia Talib <br/>
          Tanvi Save <br/>
          Information Technology Engineering undergraduates from Dwarkadas Jivanlal Sanghvi College of Engineering.
        </div>
      </div>
      <div className="row help-row">
        <div className="col-6">
          <img
            src={Img1}
            alt="help-image"
            className="help-image"
            style={{ height: "300px" }}
          />
        </div>
        <div className=" col-6 help-text" style={{paddingTop:'8%'}}>
          Our game starts with a black start button located below the floating
          guru. Click on the start button whenever you are ready to play the
          game:
        </div>
      </div>
      <div className="row help-row">
        <div className="col-6 help-text" style={{paddingTop:'6%'}}>
          After this you will be directed to the pre-read page for the game. You
          need to go through all the different concepts like insurance, stocks
          and fixed deposits. You will be provided with 20000 rupees at the
          start of the game as base money.
        </div>
        <div className=" col-6 ">
          <img
            src={Img2}
            alt="help-image"
            className="help-image"
            style={{ height: "300px" }}
          />
        </div>
      </div>
      <div className="row help-row">
        <div className="col-6">
          <img
            src={Img3}
            alt="help-image"
            className="help-image"
            style={{ height: "300px" }}
          />
        </div>
        <div className=" col-6 help-text" style={{paddingTop:'8%'}}>
          After scrolling down, you will see three boxes(insurance, stocks and
          fixed deposits) having bright orange buttons located in their lower
          bottom halves.
        </div>
      </div>
      <div className="row help-text help-row" style={{padding:'2%'}}>
        Clicking on these orange buttons will reveal pop ups giving information
        on the respective boxes. The actual buying and selling of stocks,
        insurance, etc. will only be done after the game starts. Click on the
        close button to close all these pop ups after reading them.
      </div>
      <div className="row help-row">
        <div className=" col-4">
          <img
            src={Img4}
            alt="help-image1"
            className="help-image1"
            style={{ height: "200px" }}
          />
        </div>
        <div className=" col-4">
          <img
            src={Img5}
            alt="help-image1"
            className="help-image1"
            style={{ height: "200px" }}
          />
        </div>
        <div className=" col-4">
          <img
            src={Img6}
            alt="help-image1"
            className="help-image1"
            style={{ height: "200px" }}
          />
        </div>
      </div>
      <div className="row help-row">
        <div className="col-5 help-text" style={{paddingTop:'8%'}}>
          Click again on the start button at the top right corner of your screen
          and the game begins:
        </div>
        <div className=" col-7 ">
          <img
            src={Img7}
            alt="help-image"
            className="help-image"
            style={{ height: "300px" }}
          />
        </div>
      </div>
      <div className="row help-row">
        <div className="col-7">
          <img
            src={Img8}
            alt="help-image"
            className="help-image"
            style={{ height: "300px" }}
          />
        </div>
        <div className=" col-5 help-text" style={{paddingTop:'6%'}}>
          The big square box right in the middle represents the dice. The game
          is quite simple. You roll the dice by clicking on the green “roll
          dice” button.
          <br />
          You then move ahead by a certain number of blocks, whichever number
          the dice lands on.
        </div>
      </div>
      <div className="row help-row">
        <div className="col-5 help-text" style={{paddingTop:'8%'}}>
          On the left side of the screen is a graph that shows you your net
          worth as you progress in the game.
        </div>
        <div className=" col-7 ">
          <img
            src={Img9}
            alt="help-image"
            className="help-image"
            style={{ height: "300px" }}
          />
        </div>
      </div>
      <div className="row help-row">
        <div className="col-7">
          <img
            src={Img10}
            alt="help-image"
            className="help-image"
            style={{ height: "300px" }}
          />
        </div>
        <div className=" col-5 help-text" style={{paddingTop:'8%'}}>
          On the right side are a number of blue buttons with a circular white
          “i” on their right side. Clicking on these i’s will tell you what the
          blue buttons mean.
        </div>
      </div>
      <div className="row help-row">
        <div className="col-6">
          <img
            src={Img11}
            alt="help-image"
            className="help-image"
            style={{ height: "300px" }}
          />
        </div>
        <div className="col-6">
          <img
            src={Img12}
            alt="help-image"
            className="help-image"
            style={{ height: "300px" }}
          />
        </div>
      </div>
      <div className="row help-row">
        <div className="col-6">
          <img
            src={Img16}
            alt="help-image"
            className="help-image"
            style={{ height: "300px" }}
          />
        </div>
        <div className=" col-6 help-text" style={{paddingTop:'8%'}}>
          Passbook is used to summarise your expenses. Debits mean some amount has been deducted from your account and credit means some money has been added to your account.
        </div>
      </div>
      <div className="row help-row">
        <div className="col-5 help-text" style={{paddingTop:'3%'}}>Asset Button can be used to purchase Insurance and Fixed Deposits. <br/><a href="https://youtu.be/qjXgpJpSlCc" target="_blank">Click here to learn more about insurance by watching this video by The Infographics Show on youtube.</a><br/><a href="https://youtu.be/7aSPbMUUv5g" target="_blank">Click here to learn more about Fixed deposits. A Video by Saveforneeds</a></div>
        <div className=" col-7 ">
          <img
            src={Img13}
            alt="help-image"
            className="help-image"
            style={{ height: "300px" }}
          />
        </div>
      </div>
      <div className="row help-row">
        <div className="col-7">
          <img
            src={Img14}
            alt="help-image"
            className="help-image"
            style={{ height: "300px" }}
          />
        </div>
        <div className=" col-5 help-text" style={{paddingTop:'6%'}}>Virtual Stock Market <br/>Keep an eye on them to see how your stocks are performing. <br/><a href="https://youtu.be/bJg-rF3bLH0">To learn more about Stocks, click here to watch a video by Easy Peasy Finance</a></div>
      </div>

      <div className="row help-row">
        <div className="col-5 help-text" style={{paddingTop:'10%'}}>
          Once you land on a block it turns green. Clicking on that block will
          then reveal the task that is to be done.
        </div>
        <div className=" col-7 ">
          <img
            src={Img15}
            alt="help-image"
            className="help-image"
            style={{ height: "300px" }}
          />
        </div>
      </div>
      <div className="row help-row help-text" style={{padding:'20px'}}>
        These tasks range from being as simple as calculating rate of interest
        to being as difficult as falling into credit card fraud. These tasks
        will lead you to profit or loss depending on how smartly you maneuver
        through them. If you have made an overall profit, then you win! If you
        face a loss, You lose. You can go back and to the next page in the game
        by clicking the two respective buttons on the top corners of your
        screen.
      </div>
      <br/>
 
      <br/>
      <center>
      <Link to="/start" style={{ color: "white" }}>
                <button className="btn btn-danger   " style={{width:'200px'}}  >Back to Dice Roll</button>
              </Link>
              </center>
    </div>
  );
};

export default Help;
