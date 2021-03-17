import React from 'react';
import Landing from './Landing';
import SelectedOp from './SelectedOp';
const Level1 =()=>{
    const [disp,setDisp]=React.useState(false);
    const [fake,setFake]=React.useState(false);
    if(!disp){
        return(
            <div style={{marginTop:"5rem"}}>
                 <Landing setDisp={setDisp} setFake={setFake}/>
            </div>
               
        )
    }
    
}

export default Level1;