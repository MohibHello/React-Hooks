import React, { useState } from 'react'
import FunctionalComponentLifeCycle from './FunctionComponentLifeCycle';
import UseEffectMountAndUnMountOnly from './UseEffectMountAndUnMountOnly';

function Counter() {

    const [visible,setVisible] = useState(false);


    const handleVisible =()=>{
        setVisible(!visible)
    }

    return (
        <div>
            <button onClick={handleVisible}>Hide/Show Counter</button>
           {visible && <UseEffectMountAndUnMountOnly/>} 
        </div>
    )
}

export default Counter
