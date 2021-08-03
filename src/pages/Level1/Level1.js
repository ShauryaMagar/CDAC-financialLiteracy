import React from 'react';
import { useHistory } from 'react-router-dom';
import Landing from './Landing';
const Level1 =()=>{
    const history=useHistory();
    React.useEffect(()=>{
        window.onpopstate = e => {
            history.push('/');
        }
        // eslint-disable-next-line 
    },[]);
    const [disp,setDisp]=React.useState(false);
    // eslint-disable-next-line 
    const [fake,setFake]=React.useState(false);
    if(!disp){
        return(
            <div >
                 <Landing setDisp={setDisp} setFake={setFake}/>
            </div>
               
        )
    }
    
}

export default Level1;