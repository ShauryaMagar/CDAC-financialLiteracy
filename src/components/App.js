import React from 'react';
import LandingPageMain from '../pages/LandingPage/LandingPageMain';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IntroScreen from '../pages/introScreen/IntroScreen';
import './App.css';
import One from '../pages/Level1/Level1';
import Two from '../pages/Level2/Level2';
import Three from '../pages/Level3/Level3';
import DiceRoll from "../pages/DiceRoll/DiceRoll";
import SelectedOp from '../pages/Level1/SelectedOp';
import Four from '../pages/Level4/Level4';
import Five from '../pages/Level5/Level5';
import IntroStock from '../pages/Level1 Stock/IntroStock';
import Mid from '../pages/Level1.3/Level1.3'
import Six from '../pages/Level6/Level6';
import Seven from '../pages/Level7/Level7';
import Eight from '../pages/Level8/Level8';
import Nine from '../pages/Level9/Level9';
import Ten from '../pages/Level10/Level10';
import Eleven from '../pages/Level11/Level11';
import SellPurchase from '../pages/SellPurchaseStock/SellPurchaseStock';
import SellPurchaseIns from '../pages/SellPurchaseIns/SellPurchaseIns';
import SellPurchaseFD from '../pages/SellPurchaseFD/SellPurchaseFD';
import Twelve from '../pages/Level12/Level12';
import Thirteen from '../pages/Level13/Level13';
import MoreFire from '../pages/Level7/MoreInfoFire';
import MoreScam from '../pages/Level5/MoreScam';
import MoreFake from '../pages/Level1/MoreFake';
import Mcq from '../pages/MCQ/mcq';
class App extends React.Component{
    
    render(){
        return (
            <>
                <Router>
				<Switch>
					<div>

						<Route exact path="/" component={LandingPageMain}></Route>
						<Route exact path="/intro" component={IntroScreen}></Route>
                        <Route exact path="/start" component={DiceRoll}></Route>
                        <Route exact path="/1" component={One}/>
                        <Route exact path="/2" component={Mid}/>
                        <Route exact path="/3" component={Two}/>
                        <Route exact path="/1.2" component={IntroStock}/>
                        <Route exact path="/4" component={Three}/>
                        <Route exact path="/5" component={Four}/>
                        <Route exact path="/6" component={Five}/>
                        <Route exact path="/7" component={Six}/>
                        <Route exact path="/8" component={Seven}/>
                        <Route exact path="/9" component={Eight}/>
                        <Route exact path="/moreFire" component={MoreFire}/>
                        <Route exact path="/moreScam" component={MoreScam}/>
                        <Route exact path="/moreFake" component={MoreFake}/>
                        <Route exact path="/10" component={Four}/>
                        <Route exact path="/SPStock" component={SellPurchase}/>
                        <Route exact path="/SPIns" component={SellPurchaseIns}/>
                        <Route exact path="/SPFD" component={SellPurchaseFD}/>
                        <Route exact path="/1.1" component={SelectedOp}/>
                        <Route exact path="/11" component={Nine}/>
                        <Route exact path="/12" component={Ten}/>
                        <Route exact path="/13" component={Eleven}/>
                        <Route exact path="/14" component={Twelve}/>
              <Route exact path="/15" component={Thirteen}/>
              <Route exact path="/16" component={Mcq}/>

					</div>
				</Switch>
			</Router>
            </>
        );
    }
}

export default App;