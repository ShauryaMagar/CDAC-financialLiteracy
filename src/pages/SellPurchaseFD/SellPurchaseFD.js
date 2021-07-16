import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
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
        }, 2000)
    }
    return(
        <div className="container">
            <div className="row justify-content-between" style={{marginTop:'1rem'}}>
                <div className="col-2">
                    <button onClick={nextPage} className="btn btn-dark">
                        Back
                    </button>
                </div>
                <div className="col-2">
                    <strong>Rs {amt}</strong>
                </div>
            </div>
            <div className="row justify-content-center" style={{marginTop:'1rem'}}>
                <div className="col-10" style={{textAlign:'center'}}>
                    <p><h1>Fixed Deposits</h1></p>
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
                        <button onClick={sellFD} className="btn btn-dark">Sell</button>
                        :
                        <form onSubmit={buyFD}>
                            <input type="tel" value={bFD} onChange={handleChange}/><br/>
                            <button style={{marginTop:"1rem"}} type='submit' className="btn btn-dark">Purchase</button>
                        </form>
                            
                    }
                </div>
            </div>
        </div>
    );
}

export default SellPurchaseFD;