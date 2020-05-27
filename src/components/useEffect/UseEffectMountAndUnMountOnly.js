import React, { useState, useEffect } from "react";

function useEffectMountAndUnMountOnly() {
  const [count, setCount] = useState(0);

  const [color, setColor] = useState('red')

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

    /*  The Second Argument to the useEffect Hook:
        1. it takes [] to mimic CDM and CWU we need to pass empty array [] i,e., it will
           not call useEffect() when state changes or component re-renders

        2. if we want to call useEffect() when state or particular piece of state changes then we need 
          to pass that state variable as value ex: we want to keep track of change in color then
          pass color / count
     */
  useEffect(() => {
    console.log(`inside useEffect when component mounted`);
    console.log(`CDM color is ${color}`)
    return () => {
      console.log(`Executing useEffect return statement and count is ${count}`);
      console.log(`CDU color is ${color}`)
    };
  }, [color]);


  const handleColorChange=()=>{
    const newColor = color==='red'?'blue':'red'
    setColor(newColor);
  }


  return (
    <div>
      <h1 className="mt-5" style={{ textAlign: "center" ,color:color}}>
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
          className="col-auto btn btn-primary mr-2"
          onClick={handleColorChange}
        >
          Change Color
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
