import React, { useState, useEffect } from "react";

function FunctionalComponentLifeCycle() {
  const [count, setCount] = useState(0);

  const handleIncrement = () =>
    setCount((prevCount) => {
      return prevCount + 1;
    });

  const handleDecrement = () =>
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return 0;
    });

  const handleReset = () => {
    setCount(0);
  };

  //similar to ComponentDidMount()
  //mimic the behaviour by passing anononymous arrow function
  useEffect(() => {
    console.log(
      `im inside useEffect function so the current count is ${count}`
    );
  });

  return (
    <div>
    <h1 className='mt-5' style={{textAlign:'center'}}>{count}</h1>
    <div className='row justify-content-center'>
    <button className="col-auto btn btn-primary mr-2" onClick={handleIncrement}>Increment</button>
    <button className="col-auto btn btn-secondary ml-2" onClick={handleDecrement}>Decrement</button>
    <button className="col-auto btn btn-dark ml-2" onClick={handleReset}>Reset</button>
    </div>
</div>
  );
}

export default FunctionalComponentLifeCycle;
