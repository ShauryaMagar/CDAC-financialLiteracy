import React from 'react';
import './LandingPageMain.css';
import {NavLink} from 'react-router-dom';
class LandingPageMain extends React.Component{
    render(){
        return(
                <div className="main" style={{margin:"auto", marginTop:"3%", textAlign:"center"}}>
                <div className="container" style={{height:"10vh"}}>
                      <div className="row" >
                        <div className="col-3">
                            <img src="cloud.png"  className="cloud-image" style={{height:"7vh", zIndex:"0", marginTop:"15vh"}}></img>
                        </div>
                        <div className="col-6">
                            <div className="title ">
                        <h1>Financial Literacy</h1>
                             </div>
                        </div>
                        <div className="col-3">
                           <img src="sun-image.png" className="sun-image" style={{height:"20vh", zIndex:"0", position:"absolute"}}/>
                           <img src="cloud.png" style={{height:"7vh", zIndex:"0", marginTop:"11vh"}}></img>
                        </div>

                      </div>
                </div>
                    <div className="row">
                        <div className="col-4">
                            <img src="homeScreen2.svg" style={{width:"15vw",marginTop:"34vh"}}></img>
                        </div>
                        <div className="col-4">
                             <img src="cool-child.png" className="cool-child-pic" style={{textAlign:"center",height:"40vh", position:"relative",marginTop:"10vh"}}></img>
                        </div>
                        <div className="col-4" style={{textAlign:"center"}}>
                           <img src='payment1.svg' style={{width:"15vw",marginTop:"20vh"}}></img>
                        </div>
                     </div>
                     <div className="row">
                         <div className="col-4">

                         </div>
                         <div className="col-4" style={{textAlign:"center"}}>
                             <center style={{marginBottom:"10vh"}}><NavLink class="bn31" exact to="/intro"><span class="bn31span" >Start</span></NavLink></center>
                         </div>
                         <div className="col-4"></div>
                     </div>
                     <div className = "bottom-image-div">
                          <img src="green-bg.svg" className="bottom-image" style={{width:"80vw"}}></img>
                     </div>
                     
                </div>
            
        );
    }
}


export default LandingPageMain;