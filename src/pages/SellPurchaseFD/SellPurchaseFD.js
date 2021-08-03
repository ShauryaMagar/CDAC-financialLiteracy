import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import './SellPurchaseFD.css'

const SellPurchaseFD=()=>{
    const [retrievedObject,setRetrievedObject]=useState({});
    const [amt,setAmt]=useState(0);
    const [bFD,setBFD]=useState(0);
    const [fd,setFd]=useState(0);
    const [passbook,setPassbook]=useState()
    const [turns,setTurns]=useState(0);
    const [moneyArray,setMoneyArray]=useState();
    const history=useHistory();
    useEffect(()=>{
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        window.scrollTo(0, 0);
         window.onpopstate = e => {
             history.push('/');
         }
        setAmt(parseInt(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length - 1]));
        setMoneyArray(parseInt(retrievedObj.moneyInHand));
        setFd(parseInt(retrievedObj.fixedDeposit.purchased));
        setPassbook(retrievedObj.passbook);
        setTurns(parseInt(retrievedObj.fixedDeposit.turnsLeft));
    },[])
    const handleChange=e=>setBFD(e.target.value);
    const buyFD=(e)=>{
        e.preventDefault();
        if(amt-bFD<1000){
            alert("Too low");
        }else{
            var obj12=passbook;
            var obj={
                name:'Fixed Deposit Purchased',
                type:'debit',
                amount:bFD
            }
            obj12.push(obj);
            setPassbook(obj12);
            setFd(parseInt(bFD));
            setTurns(3);
            setAmt(amt-bFD);
            setBFD(0);
        }
    }
    const sellFD=()=>{
        var obj12 = passbook;
        var am=fd-(fd*10)/100;
        var obj = {
            name: 'Fixed Deposit Sold',
            type: 'credit',
            amount: am
        }
        obj12.push(obj);
        setPassbook(obj12);
        setAmt(amt+(fd-(fd*10)/100));
        setFd(0);
        setTurns(-1);
    }
    const nextPage=()=>{
        retrievedObject.moneyInHand.push(amt);
        retrievedObject.passbook=passbook
        retrievedObject.fixedDeposit.purchased=fd;
        retrievedObject.fixedDeposit.turnsLeft=turns;
        localStorage.setItem("financialLiteracy", JSON.stringify(retrievedObject));
        setTimeout(() => {
            history.push("/start")
        }, 500)
    }
    return(
        <div className='spfd-back'>
                    <div className="row justify-content-between" style={{paddingTop:'2rem'}}>
                <div className="col-2">
                <button onClick={nextPage} className="btn btn-danger" style={{marginLeft:'2rem'}}>
        Back
    </button>
                </div>
                <div className="col-2" style={{fontSize:'20px',fontFamily:'Poppins',fontWeight:'600'}}>
                    <strong>Rs. {amt}</strong>
                </div>
            </div>
        <div className="container  spfd-content " style={{marginTop:'2rem',borderRadius:'15px',border:'4px solid black',paddingBottom:'4rem'}}>


            <div className="row justify-content-center" style={{marginTop:'1rem'}}>
                <div className="col-10" style={{textAlign:'center'}}>
                   <h1 style={{fontFamily:'Poppins',fontWeight:'800'}}>Fixed Deposits</h1>
                    <hr />
                    <p>Rate of Interest: 15%</p>
                    <p>Maturity time: 4 turns</p>
                    <p>Selling Fixed deposits before maturity will result in some loss.</p>
                </div>
            </div>
            <div className="row justify-content-center" style={{marginTop:'1rem'}}>
                <div className="col-5">
                    <p>Currently Purchased: Rs {fd}</p>
                    {fd!=0
                    ?
                    <>
                    <p>Time to Mature: {turns} dice rolls</p>
                    <p>Money to be received after maturity: {fd+(fd*15)/100}</p>
                    <p>Money to be received before maturity: {fd-(fd*10)/100}</p>
                    </>
                    :
                    ""
                    }
                </div>
                <div className="col-5" style={{textAlign:'center'}}>
                    {
                        fd!=0?
                        <button onClick={sellFD}  className="btn btn-primary" style={{fontWeight:'700',fontFamily:'Poppins',fontSize:'18px',marginTop:"1rem",width:'220px'}}>Sell</button>
                        :
                        <form onSubmit={buyFD}>
                            <input type="tel" value={bFD} onChange={handleChange} style={{padding:'8px',border:'2px solid black',borderRadius:'10px'}}/><br/>

                            <button className="btn btn-primary" type='submit' style={{fontWeight:'700',fontFamily:'Poppins',fontSize:'18px',marginTop:"1rem",width:'220px'}}>Purchase</button>
                        </form>
                            
                    }
                </div>
            </div>
        </div>
        </div>
    );
}

export default SellPurchaseFD;