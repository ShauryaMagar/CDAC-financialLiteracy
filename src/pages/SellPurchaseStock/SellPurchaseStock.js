import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
const SellPurchaseStock=()=>{
    const history=useHistory();
    const [retrievedObject,setRetrievedObject]= useState({});
    const [med, setMed] = useState(0);
    const [steel, setSteel] = useState(0);
    const [oil, setOil] = useState(0);
    const [auto, setAuto] = useState(0);
    const [amt,setAmt]=useState(0);
    const [boil,setBoil]=useState(0);
    const [bsteel,setBsteel]=useState(0);
    const [bauto,setBauto]=useState(0);
    const [bmed,setBmed]=useState(0);
    const [passbook,setPassbook]=useState()
    useEffect(()=>{
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setMed(retrievedObj.stocks.med);
        setPassbook(retrievedObj.passbook);
        setAmt(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length-1]);
        setSteel(retrievedObj.stocks.steel);
        setOil(retrievedObj.stocks.oil);
        setAuto(retrievedObj.stocks.auto);
    },[])
    const sellAuto=()=>{
        let add = parseInt(amt);
        let obj12=passbook;
        let obj={
            name:"Automobile stocks sold",
            type:'credit',
            amount:auto
        }
        obj12.push(obj);
        setPassbook(obj12);
        setAmt(add+parseInt(auto));
        setAuto(0);
    }
    const sellOil=()=>{
        let add = parseInt(amt);
        let obj12 = passbook;
        let obj = {
            name: "Oil stocks sold",
            type: 'credit',
            amount: oil
        }
        obj12.push(obj);
        setPassbook(obj12);
        setAmt(add + parseInt(oil));
        setOil(0);
    }
    const sellSteel=()=>{
        let add = parseInt(amt);
        let obj12=passbook;
        let obj={
            name:"Steel stocks sold",
            type:'credit',
            amount:steel
        }
        obj12.push(obj);
        setPassbook(obj12);
        setAmt(add + parseInt(steel));
        setSteel(0);
    }
    const sellMed=()=>{
        let add = parseInt(amt);
        let obj12=passbook;
        let obj={
            name:"Pharmaceutical stocks sold",
            type:'credit',
            amount:med
        }
        obj12.push(obj);
        setPassbook(obj12);
        setAmt(add + parseInt(med));
        setMed(0);
    }
    const purchaseOil=(e)=>{
        e.preventDefault();
        if(amt-boil<1000){
            alert("Too low");
        }else{
            setAmt(amt-boil);
            let obj12 = passbook;
            let obj = {
                name: "Oil stocks purchased",
                type: 'debit',
                amount: boil
            }
            obj12.push(obj);
            setPassbook(obj12);
            setOil(boil);
            setBoil(0);
        }
        
    }
    const purchaseMed=(e)=>{
        e.preventDefault();
        if(amt-bmed<1000){
            alert("Too low");
        }else{
            setAmt(amt-bmed);
            let obj12 = passbook;
            let obj = {
                name: "Pharmaceutical stocks purchased",
                type: 'debit',
                amount: bmed
            }
            obj12.push(obj);
            setPassbook(obj12);
            setMed(bmed);
            setBmed(0);
        }
    }
    const purchaseSteel=(e)=>{
        e.preventDefault();
        if(amt-bsteel<1000){
            alert("Too low");
        }else{
            setAmt(amt-bsteel);
            let obj12 = passbook;
            let obj = {
                name: "Steel stocks purchased",
                type: 'debit',
                amount: bsteel
            }
            obj12.push(obj);
            setPassbook(obj12);
            setSteel(bsteel);
            setBsteel(0);
        }
    }
    const purchaseAuto = (e) => {
        e.preventDefault();
        if(amt-bauto<1000){
            alert("Too low");
        }else{
            setAmt(amt-bauto);
            let obj12 = passbook;
            let obj = {
                name: "Automobile stocks purchased",
                type: 'debit',
                amount: bauto
            }
            obj12.push(obj);
            setPassbook(obj12);
            setAuto(bauto);
            setBauto(0);
        }
    }
    const nextPage=()=>{
        retrievedObject.stocks.med=med;
        retrievedObject.stocks.steel = steel;
        retrievedObject.passbook=passbook;
        retrievedObject.stocks.oil = oil;
        retrievedObject.stocks.auto = auto;
        retrievedObject.moneyInHand.push(amt);
        localStorage.setItem("financialLiteracy", JSON.stringify(retrievedObject));
        setTimeout(()=>{
            history.push("/start")
        },2000)
    }
    const changeOil=(e)=>setBoil(e.target.value);
    const changeMed=(e)=>setBmed(e.target.value);
    const changeAuto=(e)=>setBauto(e.target.value);
    const changeSteel=(e)=>setBsteel(e.target.value);
    const displayOil=(
            <form onSubmit={purchaseOil}>
                <input type="text" value={boil} onChange={changeOil}/>
                <button className="btn btn-dark" type="submit">Purchase</button>
            </form>
    )
    const displayMed=(
            <form onSubmit={purchaseMed}>
                <input type="text" value={bmed} onChange={changeMed}/>
                <button className="btn btn-dark" type="submit">Purchase</button>
            </form>
    )
    const displaySteel=(
            <form onSubmit={purchaseSteel}>
                <input type="text" value={bsteel} onChange={changeSteel}/>
                <button className="btn btn-dark" type="submit">Purchase</button>
            </form>
    )
    const displayAuto=(
            <form onSubmit={purchaseAuto}>
                <input type="text"  value={bauto} onChange={changeAuto}/>
                <button className="btn btn-dark" type="submit">Purchase</button>
            </form>
        
    )
    return (
        <>

        <div className="container">
            <div className="row justify-content-center" style={{marginTop:"2rem"}}>
                <div className="col-8" style={{textAlign:"center"}}>
                   <h1>Sell/Purchase Stocks</h1> 
                </div>
                <div className="col-3">
                    Money: Rs {amt}
                </div>
            </div>
            <div className="row justify-content-around" style={{marginTop:"1rem"}}>
                <div className="col-2">
                    Add Oil image here
                </div>
                <div className="col-4">
                    Current Value: {oil} <br/>
                    {oil===0?"":<button onClick={sellOil} className="btn btn-dark">Sell</button>}
                </div>
                <div className="col-4">
                    {oil===0?displayOil:""}
                </div>
                
            </div>
            <div className="row justify-content-around" style={{marginTop:"1rem"}}>
                <div className="col-2">
                    Add Pharma image here
                </div>
                <div className="col-4">
                    Current Value: {med} <br/>
                    {med===0?"":<button onClick={sellMed} className="btn btn-dark">Sell</button>}
                </div>
                <div className="col-4">
                    {med===0?displayMed:""}
                </div>
                
            </div>
            <div className="row justify-content-around" style={{marginTop:"1rem"}}>
                <div className="col-2">
                    Add steel image here
                </div>
                <div className="col-4">
                    Current Value: {steel} <br/>
                    {steel===0?"":<button onClick={sellSteel} className="btn btn-dark">Sell</button>}
                </div>
                <div className="col-4">
                    {steel===0?displaySteel:""}
                </div>
            </div><div className="row justify-content-around" style={{marginTop:"1rem"}}>
                <div className="col-2">
                    Add auto image here
                </div>
                <div className="col-4">
                    Current Value: {auto} <br/>
                    {auto===0?"":<button onClick={sellAuto} className="btn btn-dark">Sell</button>}
                </div>
                <div className="col-4">
                    {auto===0?displayAuto:""}
                </div>
                
            </div>
            <div className="row justify-content-end" style={{marginTop:'2rem'}}>
                <div className="col-4">
                    <button className="btn btn-dark" onClick={nextPage}>Next Page</button>
                </div>
            </div>
        </div>

        </>
    );
};

export default SellPurchaseStock;