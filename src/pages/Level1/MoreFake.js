import React from 'react';
import { useHistory } from 'react-router';
import Fake from './fake.png'
const MoreFake=()=>{
    const history=useHistory();
    React.useEffect(()=>{
         window.onpopstate = e => {
             history.push('/');
         }
    },[]);
    const onSubmit=()=>{
        history.push('/start')
    }
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10" style={{textAlign:'center'}}>
                    <p style={{marginTop:'1.5rem'}}><h1>More to Know!</h1></p>
                    <img src={Fake} alt="Fake currency image" style={{height:'80%',width:'100%'}}/>
                    <div style={{marginTop:'1rem'}}><button className="btn btn-dark" onClick={onSubmit}>Click to continue</button></div>
                </div>
            </div>
        </div>
    )
}

export default MoreFake;