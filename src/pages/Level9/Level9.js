import React from 'react';
import {useHistory} from 'react-router-dom';
import Pandemic from './images/virus.png';

const Nine=()=>{
    const history=useHistory();
    const handleClick=()=>{
        setTimeout(()=>{
            history.push("/SPStock");
        },1000);
    }
    return(
        <>
            <div className="container">
                <div className="row justify-content-center" style={{marginTop:"2rem"}}>
                    <div className="col-11" style={{textAlign:"center"}}>
                        <h1>News Headline: Ongoing pandemic is soon going to impact India.</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-11">
                        <h6>Such events affect the behaviour of stock market. It is advisable to take a look at the stock market and the stocks owned by you.</h6>
                    </div>
                </div>

                <div className="row justify-content-center ">
                    <div className="col-lg-6 col-sm-3 ">
                        <img src= {Pandemic} alt ="image"/>
                    </div>
                    <div className="col-3 " style={{textAlign:"right"}}>
                        <button className="btn btn-dark "
                        style = {{
                          position: "absolute",
                          bottom: "0",
                          right : "0"
                        }}
                        onClick={handleClick}>Take a look at stocks!</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Nine