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
                        <Route exact path="/2" component={Two}/>
                        <Route exact path="/3" component={Three}/>
                        <Route exact path="/1.1" component={SelectedOp}/>
					</div>
				</Switch>
			</Router>
            </>
        );
    }
}

export default App;