import React from 'react';
import {useHistory} from 'react-router-dom';
 import FirstImg from './img1.jpeg'
 import SecondImg from './note.jpeg'


const FakeNote=(props)=>{
    const history=useHistory();
    const [option,setOption]=React.useState(false);
    const onImageClick=()=>{
        setOption(true);
    }
    const onYesClick=()=>{
        history.push('/22.1',{
            real:false
        })
    }
    const onNoClick = () => {
        history.push("/22.1",{
            real:true
        });
    }
    if(!option){
        return(
        <>
            <div className="container-fluid " onClick={onImageClick}>


                      <img src={FirstImg} alt="img" style={{width: '100%',height:"auto"}}></img>



            </div>
        </>
        )
    }else{
        return (
            <>
            <div className="container-fluid  shopseller-container" style={{textAlign:'center',paddingTop:"7rem", paddingBottom:"10.3rem"}}>
                <div className="row justify-content-center">
                  <img src={SecondImg} alt="note"></img>
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

export default FakeNote;
