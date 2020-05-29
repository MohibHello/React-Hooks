import React from 'react'
import useCounter from './useCounter';

function CustomCounter2(props) {

    const {count,increment,decrement} =useCounter(props.start===undefined?0:props.start);

        return (
            <div>
            <h2 style={{textAlign:'center',color:'blue'}}>{count}</h2>
           <div className=" row w-50 m-auto">
           <button className="col-6 btn btn-primary" onClick={increment}>
              Increment
            </button>
            <br />
            <button className="col-6 btn btn-danger" onClick={decrement}>
              Decrement
            </button>
            <br />
           </div>
          </div>
        )
}

export default CustomCounter2
