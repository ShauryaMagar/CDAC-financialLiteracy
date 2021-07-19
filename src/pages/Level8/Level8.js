import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Increase from './upward-arrow.png'
import './Level8.css'
import { bottom } from '@popperjs/core';
import SellPurchaseStock from '../SellPurchaseStock/SellPurchaseStock';

const Eight=()=>{
    const history=useHistory();
    const [retrievedObject,setRetrievedObject]= useState({});
    const [amt,setAmt]=useState(0);
    const [steel, setSteel] = useState(0);
   

    useEffect(()=>{
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);

        setAmt(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
        setSteel(parseInt(retrievedObj.stocks.steel));

    },[])



    const nextPage=()=>{
        var update=parseInt(steel*0.4)+parseInt(steel);
        
        // let addAmt=parseFloat(amt)+update
     
        retrievedObject.stocks.steel = update;

        // retrievedObject.moneyInHand=addAmt;
        localStorage.setItem("financialLiteracy", JSON.stringify(retrievedObject));
        setTimeout(()=>{
            history.push("/start")
        },750)
    }
    let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
const SellPurchaseStock=()=>{
    var update = parseInt(steel * 0.4) + parseInt(steel);

    // let addAmt=parseFloat(amt)+update

    retrievedObject.stocks.steel = update;

    // retrievedObject.moneyInHand=addAmt;
    localStorage.setItem("financialLiteracy", JSON.stringify(retrievedObject));
    setTimeout(() => {
        history.push("/SPStock")
    }, 750)
}
if(retrievedObj.stocks.steel){
    return (
        <>
                <div className="container-fluid stocks-page">
            <div className="row justify-content-center" style={{paddingTop:'2.9rem',paddingBottom:"0rem"}}>
                <div className="col-7" style={{color:'white',textAlign:'center',padding:'2rem'}}>
                    <div >
                        <h1><strong>Steel Prices have Increased!!</strong></h1>
                    </div>
                    <div>
                        <h4>
                            As stated earlier Government had been planning to expand railways which has led 
                            to the increase in stock prices of the Steel Industry.
                        </h4>
                    </div>
                    <div>
                        <img src={Increase} alt="stock-increase" style={{height:"200px"}}/>
                    </div>
                    <br/>
                    <div>
                        <h4>
                           You had bought steel stocks worth ₹ {parseFloat(steel)}<br/>
                           <br/>
                           The Price has increased by a whopping 40% to ₹ {parseFloat(steel)*0.4+parseFloat(steel)}
                           <br/><br/>
                           <button className="btn btn-light btn-lg" onClick={nextPage}>Next</button>
                           <br/><br/><button onClick={SellPurchaseStock} className="btn btn-light btn-lg" >Sell / Buy Stocks</button>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
     
        </>
    );
}else{
    return(
        <>
        <div className="container-fluid stocks-page">
    <div className="row justify-content-center" style={{paddingTop:'2.9rem',paddingBottom:"0rem"}}>
        <div className="col-7" style={{color:'white',textAlign:'center',padding:'2rem'}}>
            <div >
                <h1><strong>Steel Prices have Increased!!</strong></h1>
            </div>
            <div>
                <h4>
                    As stated earlier Government had been planning to expand railways which has led 
                    to the increase in stock prices of the Steel Industry.
                </h4>
            </div>
            <div>
                <img src={Increase} alt="stock-increase" style={{height:"200px"}}/>
            </div>
            <br/>
            <div>
                <h4>
                   Uh-Oh! you did not buy any steel stocks earlier!<br/>
                   <br/>
                   Next time make sure to analyse every future planning by the government!
                   <br/><br/>
                   <button className="btn btn-light btn-lg" onClick={nextPage}>Next</button>
                   <br/><br/>
                   <Link to="/SPStock"><button className="btn btn-light btn-lg" >Sell / Buy Stocks</button></Link>
                </h4>
            </div>
        </div>
    </div>
</div>

</>
    );
}

};

export default Eight;