import React from 'react';
import Img from './images/stock.jpg';
import { useHistory } from 'react-router';
const Level6=()=>{
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
                        <p><h1>News Headlines about Government planning to expand railways</h1></p> 
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-11">
                        <p><h3>Such events affect the behaviour of stock market. It is advisable to take a look at the stock market and the stocks owned by you.</h3></p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-11">
                        <img src={Img} style={{height:"400px",width:"500px"}}/>
                    </div>
                </div>
                <div className="row justify-content-end" style={{marginTop:"1rem"}}>
                    <div className="col-11" style={{textAlign:"right"}}>
                        <button className="btn btn-dark" onClick={handleClick}>Take a look at stocks!</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Level6;