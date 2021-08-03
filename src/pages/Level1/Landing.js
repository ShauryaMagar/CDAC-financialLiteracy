import React from 'react';
import imgNote from "./images/img-note.jpg";
import fakeNote from './images/fake-note.jpg';
import {useHistory} from 'react-router-dom';
import './Level1.css';
const Landing=()=>{
    const history=useHistory();
    React.useEffect(()=>{
        window.onpopstate = e => {
            history.push('/');
        }
        // eslint-disable-next-line 
    },[]);
    const [option,setOption]=React.useState(false);
    const onImageClick=()=>{
        setOption(true);
    }
    const onYesClick=()=>{
        history.push('/1.1',{
            real:true
        })
    }
    const onNoClick = () => {
        history.push("/1.1",{
            real:false
        });
    }
    if(!option){
        return(
        <>
            <div className="container-fluid shopseller-container" style={{paddingTop:"7rem", paddingBottom:"8.4rem"}}>
                <div className="row justify-content-center">
                    <div className="col-5" onClick={onImageClick}>
                        <img src={imgNote} alt="background"></img>
                    </div>
                    <div className="col-5">
                        <p style={{fontSize:'2rem'}}>
                            You have to go to buy vegetables. The vegetable seller asks you to give change for Rs 2000.
                        </p>
                        <p style={{fontSize:'2rem'}}>
                            You're supposed to give 2 Rs 1000 notes. Click on the note!
                        </p>
                    </div>
                </div>
            </div>
        </>
        )
    }else{
        return (
            <>
            <div className="container-fluid  shopseller-container" style={{textAlign:'center',paddingTop:"7rem", paddingBottom:"10.3rem"}}>
                <div className="row justify-content-center">
                        <img src={fakeNote} alt="fake-note"></img>
                </div>
                <br/>
                
                <div className="row justify-content-center">
                    <p style={{fontSize:'2rem'}}>Will You accept this note?</p>
                </div>
                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-dark level-one-button animate__animated animate__backInLeft " onClick={onYesClick}>YES</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-dark level-one-button animate__animated animate__backInRight" onClick={onNoClick}>NO</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
    
}

export default Landing;