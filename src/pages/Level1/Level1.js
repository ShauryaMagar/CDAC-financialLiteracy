import React from 'react';
import { useHistory } from 'react-router-dom';
import Landing from './Landing';

import SelectedOp from './SelectedOp';
const Level1 =()=>{
    const history=useHistory();
    React.useEffect(()=>{
        window.onpopstate = e => {
            history.push('/');
        }
    },[]);
    const [disp,setDisp]=React.useState(false);
    const [fake,setFake]=React.useState(false);
    //fake;
    if(!disp){
        return(
            <div >
                 <Landing setDisp={setDisp} setFake={setFake}/>
            </div>
               
        )
    }
    
}

export default Level1;