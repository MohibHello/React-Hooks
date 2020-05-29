import React from 'react'
import useCounter from './useCounter'

function CustomCounter(props) {

    const {count,increment,decrement,reset} =useCounter(props.start);

    return (
        <div>
        <h1>{count}</h1>
        <button className="btn btn-primary" onClick={increment}>
          Increment
        </button>
        <br />
        <button className="btn btn-danger mt-2" onClick={decrement}>
          Decrement
        </button>
        <br />
        <button  className="btn btn-dark mt-2" onClick={reset}>
          Reset
        </button>
      </div>
    )
}

export default CustomCounter
