import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router';
const SellPurchaseIns = () =>{
    const [amt,setAmt]=useState(0);
    const [health,setHealth]=useState(false);
    const [vehicle,setVehicle]=useState(false);
    const [home,setHome]=useState(false);
    const [passbook,setPassbook]=useState()
    const [retrievedObject, setRetrievedObject] = useState({});
    const history=useHistory();
    useEffect(() => {
        let retrievedObj = JSON.parse(localStorage.getItem("financialLiteracy"));
        setRetrievedObject(retrievedObj);
        setAmt(parseInt(retrievedObj.moneyInHand[retrievedObj.moneyInHand.length - 1]));
        setHealth(retrievedObj.insurance.healthIns.purchased);
        setPassbook(retrievedObj.passbook);
        setVehicle(retrievedObj.insurance.vehicleIns.purchased);
        setHome(retrievedObj.insurance.homeIns.purchased);
    }, [])
    const sellHealth=()=>{
        setHealth(false);
        var obj12=passbook;
        var obj={
            name:'Health Insurance sold',
            type:'credit',
            amount:'3000'
        }
        obj12.push(obj);
        setPassbook(obj12);
        setAmt(parseInt(amt)+3000);
    }
    const sellVehicle=()=>{
        setVehicle(false);
        var obj12 = passbook;
        var obj = {
            name: 'Vehicle Insurance sold',
            type: 'credit',
            amount: '4000'
        }
        obj12.push(obj);
        setPassbook(obj12);
        setAmt(parseInt(amt)+4000);
    }
    const sellHome=()=>{
        setHome(false);
        var obj12 = passbook;
        var obj = {
            name: 'House Insurance sold',
            type: 'credit',
            amount: '5000'
        }
        obj12.push(obj);
        setPassbook(obj12);
        setAmt(parseInt(amt)+5000);
    }
    const purHealth=()=>{
        
        if(parseInt(amt)-5000<1000){
            alert("Too low");
        }else{
            setHealth(true);
            var obj12 = passbook;
            var obj = {
                name: 'Health Insurance Purchased',
                type: 'debit',
                amount: '5000'
            }
            obj12.push(obj);
            setPassbook(obj12);
            setAmt(amt-5000);
        }
    }
    const purHome=()=>{
        if(amt-8000<1000){
            alert("Too low");
        }else{
            setHome(true);
            var obj12 = passbook;
            var obj = {
                name: 'House Insurance Purchased',
                type: 'debit',
                amount: '8000'
            }
            obj12.push(obj);
            setPassbook(obj12);
            setAmt(amt-8000);
        }
    }
    const purVehicle=()=>{
        if(amt-7000){
            alert("Too low");
        }else{
            setVehicle(true);
            var obj12 = passbook;
            var obj = {
                name: 'Vehicle Insurance Purchased',
                type: 'debit',
                amount: '7000'
            }
            obj12.push(obj);
            setPassbook(obj12);
            setAmt(amt-7000);
        }
    };
    const goBack=()=>{
        retrievedObject.insurance.healthIns.purchased=health;
        retrievedObject.insurance.homeIns.purchased=home;
        retrievedObject.passbook=passbook;
        retrievedObject.insurance.vehicleIns.purchased=vehicle;
        retrievedObject.moneyInHand.push(amt);
        localStorage.setItem("financialLiteracy", JSON.stringify(retrievedObject));
        setTimeout(() => {
            history.push("/start")
        }, 2000)
    }
    return(
        <div className="container">
            <div className="row justify-content-center" style={{marginTop:'2rem'}}>
                <div className="col-10" style={{textAlign:'center'}}>
                    <h1>Purchase/Sell Insurance</h1>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-2">
                    <button onClick={goBack} className="btn btn-dark">
                        Back
                    </button>
                </div>
                <div className="col-2">
                    <strong>Money: Rs {amt}</strong>
                </div>
            </div>
            <div className="row justify-content-center" style={{marginTop:"1rem"}}>
                <div className="col-10" style={{textAlign:'center'}}>
                    <p>Selling Price of Insurance is lower as compared to the price it is purchased at.</p>
                </div>
            </div>
            <div className="row justify-content-center" style={{marginTop:"1rem"}}>
                <div className="col-5">
                    <p><h2>Health Insurance</h2></p>
                    <p>Saves from huge bills when hospitalised</p>
                    <p>Selling Price: Rs 3000</p>
                    <p>Purchase Price: Rs 5000</p>
                    <p>Premium: Rs 200 per turn</p>
                </div>
                <div className="col-5" style={{textAlign:'center'}}>
                    {health?<button onClick={sellHealth} className="btn btn-dark">Sell</button>:<button onClick={purHealth} className="btn btn-dark">Purchase</button>}
                </div>
            </div>
            <div className="row justify-content-center" style={{marginTop:"1rem"}}>
                <div className="col-5" >
                    <p><h2>House Insurance</h2></p>
                    <p>Saves from huge damages in case of any accident in House</p>
                    <p>Selling Price: Rs 5000</p>
                    <p>Purchase Price: Rs 8000</p>
                    <p>Premium: Rs 200 per turn</p>
                </div>
                <div className="col-5" style={{textAlign:'center'}}>
                    {home?<button onClick={sellHome} className="btn btn-dark">Sell</button>:<button onClick={purHome} className="btn btn-dark">Purchase</button>}
                </div>
            </div>
            <div className="row justify-content-center" style={{marginTop:"1rem"}}>
                <div className="col-5">
                    <p><h2>Vehicle Insurance</h2></p>
                    <p>Saves from huge damages in case of any vehicular accident</p>
                    <p>Selling Price: Rs 4000</p>
                    <p>Purchase Price: Rs 7000</p>
                    <p>Premium: Rs 200 per turn</p>
                </div>
                <div className="col-5" style={{textAlign:'center'}}>
                    {vehicle?<button onClick={sellVehicle} className="btn btn-dark">Sell</button>:<button onClick={purVehicle} className="btn btn-dark">Purchase</button>}
                </div>
            </div>
        </div>
    );
}

export default SellPurchaseIns;