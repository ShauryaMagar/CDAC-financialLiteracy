import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import "./SellPurchaseStock.css"
import Oil from './images/factory.png'
import Pharma from './images/vitamin.png'
import Steel from './images/beam.png'
import Auto from './images/automobile.png'

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
        window.scrollTo(0, 0);
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setMed(retrievedObj.stocks.med);
        setPassbook(retrievedObj.passbook);
         window.onpopstate = e => {
             history.push('/');
         }
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
        if (boil == "" || !Number.isInteger(parseInt(boil))) {
            alert("Enter Number")
        }else{
            if (amt - boil < 100) {
                alert("Too low");
            } else {
                setAmt(amt - boil);
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
        
        
    }
    const purchaseMed=(e)=>{
        e.preventDefault();
        if (bmed == "" || !Number.isInteger(parseInt(bmed))) {
            alert("Enter Number")
        }else{
            if (amt - bmed < 100) {
                alert("Too low");
            } else {
                setAmt(amt - bmed);
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
        
    }
    const purchaseSteel=(e)=>{
        e.preventDefault();
        if (bsteel == "" || !Number.isInteger(parseInt(bsteel))){
            alert("Enter Number")
        }else{
            if (amt - bsteel < 100) {
                alert("Too low");
            } else {
                setAmt(amt - bsteel);
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
    }
    const purchaseAuto = (e) => {
        e.preventDefault();
        if (bauto == "" || !Number.isInteger(parseInt(bauto))){
            alert("Enter Number")
        }else{
            if (amt - bauto < 100) {
                alert("Too low");
            } else {
                setAmt(amt - bauto);
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
        },500)
    }
    const changeOil=(e)=>setBoil(e.target.value);
    const changeMed=(e)=>setBmed(e.target.value);
    const changeAuto=(e)=>setBauto(e.target.value);
    const changeSteel=(e)=>setBsteel(e.target.value);
    const displayOil=(
            <form onSubmit={purchaseOil}>
                <input type="text" value={boil} onChange={changeOil} style={{border:'2px solid black', padding:'8px',borderRadius:'10px',outline:'none',fontWeight:'600',fontFamily:'Poppins'}}/>
                <button className="btn btn-primary"  style={{fontWeight:'700',fontFamily:'Poppins',fontSize:'18px',marginTop:"1rem",width:'220px',marginBottom:'10px'}} type="submit">Purchase</button>
            </form>
    )
    const displayMed=(
            <form onSubmit={purchaseMed}>
                <input type="text" value={bmed} onChange={changeMed} style={{border:'2px solid black', padding:'8px',borderRadius:'10px',outline:'none',fontWeight:'600',fontFamily:'Poppins'}}/>
                <button className="btn btn-primary"  style={{fontWeight:'700',fontFamily:'Poppins',fontSize:'18px',marginTop:"1rem",width:'220px',marginBottom:'10px'}}type="submit">Purchase</button>
            </form>
    )
    const displaySteel=(
            <form onSubmit={purchaseSteel}>
                <input type="text" value={bsteel} onChange={changeSteel} style={{border:'2px solid black', padding:'8px',borderRadius:'10px',outline:'none',fontWeight:'600',fontFamily:'Poppins'}}/>
                <button className="btn btn-primary"  style={{fontWeight:'700',fontFamily:'Poppins',fontSize:'18px',marginTop:"1rem",width:'220px',marginBottom:'10px'}} type="submit">Purchase</button>
            </form>
    )
    const displayAuto=(
            <form onSubmit={purchaseAuto}>
                <input type="text"  value={bauto} onChange={changeAuto} style={{border:'2px solid black', padding:'8px',borderRadius:'10px',outline:'none',fontWeight:'600',fontFamily:'Poppins'}}/>
                <button className="btn btn-primary"  style={{fontWeight:'700',fontFamily:'Poppins',fontSize:'18px',marginTop:"1rem",width:'220px',marginBottom:'10px'}} type="submit">Purchase</button>
            </form>
        
    )
    return (
        <>
    <div className="spstock-back">
        <div className="container spstock-content">
            <div className="row justify-content-center" style={{paddingTop:"2rem"}}>
                <div className="col-8" style={{textAlign:"center"}}>
                   <h1 style={{fontFamily:'Poppins',fontWeight:'700'}}>Sell/Purchase Stocks</h1> 
                </div>
                <div className="col-2" style={{fontSize:'20px',fontFamily:'Poppins',fontWeight:'700'}}>
                    Rs. {amt}
                </div>
                <div className="col-2">
                    <button className="btn btn-dark  btn-block" onClick={nextPage} style={{fontFamily:'Poppins',fontWeight:'700'}}>Next Page</button>
                </div>
            </div>
            
            <div className="row justify-content-around purchase-card purchase-card-oil" style={{marginTop:"1rem",paddingLeft:'20px'}}>
                <div className="col-3">
                    <h2 style={{fontFamily:'Poppins',fontWeight:'700',textAlign:'center'}}>Oil & Gas</h2>
                   <center> <img src={Oil} height='100px'/> </center>
                </div>
                <div className="col-3">
                  <p>Current Value: {oil}</p>   <br/>
                    {oil===0?"":<button onClick={sellOil} className="btn btn-primary"  style={{fontWeight:'700',fontFamily:'Poppins',fontSize:'18px',width:'220px',marginBottom:'10px'}}>Sell</button>}
                </div>
                <div className="col-4">
                    {oil===0?displayOil:""}
                </div>
                
            </div>
            <div className="row justify-content-around purchase-card purchase-card-pharma" style={{marginTop:"1rem",paddingLeft:'20px'}}>
                <div className="col-3">
                <h2 style={{fontFamily:'Poppins',fontWeight:'700',textAlign:'center'}}>Pharmaceutical</h2>
                   <center> <img src={Pharma} height='100px'/> </center> 
                </div>
                <div className="col-3">
                <p>Current Value: {med}</p> <br/>
                    {med===0?"":<button onClick={sellMed} className="btn btn-primary"  style={{fontWeight:'700',fontFamily:'Poppins',fontSize:'18px',width:'220px',marginBottom:'10px'}}>Sell</button>}
                </div>
                <div className="col-4">
                    {med===0?displayMed:""}
                </div>
                
            </div>
            <div className="row justify-content-around purchase-card purchase-card-steel" style={{marginTop:"1rem",paddingLeft:'20px'}}>
                <div className="col-3">
                <h2 style={{fontFamily:'Poppins',fontWeight:'700',textAlign:'center'}}>Steel</h2>
                   <center> <img src={Steel} height='100px'/> </center>
                </div>
                <div className="col-3">
                <p>Current Value: {steel}</p> <br/>
                    {steel===0?"":<button onClick={sellSteel} className="btn btn-primary"  style={{fontWeight:'700',fontFamily:'Poppins',fontSize:'18px',width:'220px',marginBottom:'10px'}}>Sell</button>}
                </div>
                <div className="col-4">
                    {steel===0?displaySteel:""}
                </div>
            </div><div className="row justify-content-around purchase-card purchase-card-automobile" style={{marginTop:"1rem",paddingLeft:'20px'}}>
                <div className="col-3">
                <h2 style={{fontFamily:'Poppins',fontWeight:'700',textAlign:'center'}}>Automobile</h2>
                   <center> <img src={Auto} height='100px'/> </center>
                </div>
                <div className="col-3">
                <p>Current Value: {auto}</p> <br/>
                    {auto===0?"":<button onClick={sellAuto} className="btn btn-primary"  style={{fontWeight:'700',fontFamily:'Poppins',fontSize:'18px',width:'220px',marginBottom:'10px'}}>Sell</button>}
                </div>
                <div className="col-4">
                    {auto===0?displayAuto:""}
                </div>
                
            </div>
<br/><br/>
        </div>
        </div>
        </>
    );
};

export default SellPurchaseStock;