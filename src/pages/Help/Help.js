import React from 'react'
import Img1 from './images/start.png'
import Img2 from './images/2.png'
import Img3 from './images/3.png'
import Img4 from './images/4.jpeg'
import Img5 from './images/5.jpeg'
import Img6 from './images/6.jpeg'
import Img7 from './images/7.jpeg'
import Img8 from './images/8.png'
import Img9 from './images/9.png'
import Img10 from './images/10.png'
import Img11 from './images/11.jpeg'
import Img12 from './images/12.jpeg'
import Img13 from './images/13.jpeg'
import Img14 from './images/14.jpeg'
import Img15 from './images/15.jpeg'
import "./help.css"

const Help = () =>{
    return(
      <div className="help-container">
        <div className="row help-row">
        <div className="col help-text">
        <p>Help!<br/>

Are you stuck somewhere while playing our game?<br/> No worries! We have got you covered.
Let us explain the different features of our game:<br/>
</p>
</div>
</div>
<div className="row help-row">
<div className="col-6">

<img src={Img1} alt="help-image" className="help-image" style={{height:"300px"}}/>
</div>
<div className=" col-6 help-text">
Our game starts with a black start button located below the floating guru.
Click on the start button whenever you are ready to play the game:
</div>
</div>
<div className="row help-row">
<div className="col-6 help-text">
  After this you will be directed to the pre-read page for the game. You need to go through all the different concepts like insurance, stocks and fixed deposits. You will be provided with 20000 rupees at the start of the game as base money.

</div>
<div className=" col-6 ">
<img src={Img2} alt="help-image" className="help-image" style={{height:"300px"}}/>
</div>
</div>
<div className="row help-row">
<div className="col-6">

<img src={Img3} alt="help-image" className="help-image" style={{height:"300px"}}/>
</div>
<div className=" col-6 help-text">
After scrolling down, you will see three boxes(insurance, stocks and fixed deposits) having bright orange buttons
located in their lower bottom halves.
</div>
</div>
<div className="row help-text help-row">

Clicking on these orange buttons will reveal pop ups giving information
on the respective boxes. The actual buying and selling of stocks, insurance, etc. will only be done after the game starts.
Click on the close button to close all these pop ups after reading them.
</div>
<div className="row help-row">
<div className=" col-4">
<img src={Img4} alt="help-image1" className="help-image1" style={{height:"200px"}}/>
</div>
<div className=" col-4">
<img src={Img5} alt="help-image1" className="help-image1" style={{height:"200px"}}/>
</div>
<div className=" col-4">
<img src={Img6} alt="help-image1" className="help-image1" style={{height:"200px"}}/>
</div>
</div>
<div className="row help-row">
<div className="col-5 help-text">
  Click again on the start button at the top right corner of your screen and the game begins:
</div>
<div className=" col-7 ">
<img src={Img7} alt="help-image" className="help-image" style={{height:"300px"}}/>
</div>
</div>
<div className="row help-row">
<div className="col-7">

<img src={Img8} alt="help-image" className="help-image" style={{height:"300px"}}/>
</div>
<div className=" col-5 help-text">
The big square box right in the middle represents the dice. The game is quite simple. You roll
the dice by clicking on the green “roll dice” button.<br/>
You then move ahead by a certain number of blocks, whichever number the dice lands on.
</div>
</div>
<div className="row help-row">
<div className="col-5 help-text">
On the left side of the screen is a graph that shows you your net worth as you progress in the game.
</div>
<div className=" col-7 ">
<img src={Img9} alt="help-image" className="help-image" style={{height:"300px"}}/>
</div>
</div>
<div className="row help-row">
<div className="col-7">

<img src={Img10} alt="help-image" className="help-image" style={{height:"300px"}}/>
</div>
<div className=" col-5 help-text">
On the right side are a number of blue buttons with a circular white “i” on their right side. Clicking
 on these i’s will tell you what the blue buttons mean.
</div>
</div>
<div className="row help-row">
<div className="col-6">
<img src={Img11} alt="help-image" className="help-image" style={{height:"300px"}}/>
</div>
<div className="col-6">
<img src={Img12} alt="help-image" className="help-image" style={{height:"300px"}}/>
</div>
</div>
<div className="row help-row">
<div className="col-5 help-text">
Asset Button
</div>
<div className=" col-7 ">
<img src={Img13} alt="help-image" className="help-image" style={{height:"300px"}}/>
</div>
</div>
<div className="row help-row">
<div className="col-7">

<img src={Img14} alt="help-image" className="help-image" style={{height:"300px"}}/>
</div>
<div className=" col-5 help-text">
Stock Button
</div>
</div>

<div className="row help-row">
<div className="col-5 help-text">
Once you land on a block it turns green. Clicking on that block will then reveal the task that is to be done.
</div>
<div className=" col-7 ">
<img src={Img15} alt="help-image" className="help-image" style={{height:"300px"}}/>
</div>
</div>
<div className="row help-row help-text">
These tasks range from being as simple as calculating rate
of interest to being as difficult as falling into credit card fraud.
These tasks will lead you to profit or loss depending on how smartly you maneuver through them.
If you have made an overall profit, then you win!
If you face a loss, You lose.

You can go back and to the next page in the game by clicking the two respective buttons on the top corners of your screen.
</div>


      </div>
    )
}

export default Help;
