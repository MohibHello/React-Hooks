import React, { useState, useEffect } from "react";

function useEffectMountAndUnMountOnly() {
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

  /*implementing CDM (ComponentDidMount) and CWU (ComponentWillUnmount) LifeCycle 
    Excluding CWU (ComponentWillUpdate) by passing empty array [] i.e.,

    when component is mounted first time it will call useEffect(), Return's Anonymous arrow function is cached
  this cached function() will gets called when Component Unmounts

  to mimic this we need to pass empty array [] as second argument to useEffect()
    */

  useEffect(() => {
    console.log(`inside useEffect when component mounted`);
    console.log(`count is ${count}`);
    return () => {
      console.log(`Executing useEffect return statement and count is ${count}`);
    };
  }, []);

  return (
    <div>
      <h1 className="mt-5" style={{ textAlign: "center" }}>
        {count}
      </h1>
      <div className="row justify-content-center">
        <button
          className="col-auto btn btn-primary mr-2"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="col-auto btn btn-secondary ml-2"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button className="col-auto btn btn-dark ml-2" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default useEffectMountAndUnMountOnly;
