import React from 'react';
import {useHistory} from 'react-router-dom';

import './Level9.css'

const Nine=()=>{
    const history=useHistory();
    const handleClick=()=>{
        setTimeout(()=>{
            history.push("/SPStock");
        },1000);
    }
    return(
        <>
        <div className="news-pharma-back">
            <div className="container news-pharma"  >
                <div className="row justify-content-center" style={{marginTop:"2rem"}}>
                    <div className="col-12" style={{textAlign:"center",paddingTop:'2rem'}}>
                    <p><h3>Such events affect the behaviour of stock market. It is advisable to take a look at the stock market and the stocks owned by you.</h3></p>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        {/* <p><h3>Such events affect the behaviour of stock market. It is advisable to take a look at the stock market and the stocks owned by you.</h3></p> */}
                    </div>
                </div>

                <div className="row justify-content-end" style={{marginTop:"22rem",paddingBottom:'5rem',backgroundColor:'transparent'}}>
                    <div className="col-12" style={{textAlign:"right"}}>
                        <button className="btn btn-dark modal-card-button" onClick={handleClick} style={{fontSize:'20px',boxShadow:'5px 5px 18px black'}}><i class="fas fa-arrow-circle-right"></i>  Take a look at stocks! </button>
                    </div>
                </div>
            </div>
            </div>
        </>
     
    );
}

export default Nine