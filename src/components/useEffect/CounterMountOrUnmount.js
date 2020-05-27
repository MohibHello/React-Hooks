import React, { useState } from 'react'
import FunctionalComponentLifeCycle from './FunctionComponentLifeCycle';

function Counter() {

    const [visible,setVisible] = useState(false);


    const handleVisible =()=>{
        setVisible(!visible)
    }

    return (
        <div>
            <button onClick={handleVisible}>Hide/Show Counter</button>
           {visible && <FunctionalComponentLifeCycle/>} 
        </div>
    )
}

export default Counter
