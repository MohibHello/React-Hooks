import React, { useState } from "react";

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  // function handleIncrement(){
  //     setCount(count+1)
  // }

//if you are writing arrow function within function declare it with const keyword
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

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={handleIncrement}>
        Increment
      </button>
      <br />
      <button className="btn btn-danger mt-2" onClick={handleDecrement}>
        Decrement
      </button>
      <br />
      <button  className="btn btn-dark mt-2" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default FunctionalCounter;
