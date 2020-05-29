import React, { useEffect, useState } from "react";

/* 
suppose i want to make keyPress as Hooks then we have to do following:
    1. create a function with name as useXXX() where XXX is name of what it will do
    2. copy the logic you want to refactor and place inside { }
    3. return the state or value from this function
    4. useKeyPress(initialValue) where initialValue we will set value
    
*/
function useKeyPress(initialValue) {
  const [userInput, setUserInput] = useState(initialValue);

  const handleEvent = (event) => {
    const { key, keyCode } = event;

    //keycode is like Char, simple condition every key in keyboard has code
    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      //setting old and new value like concatination
      setUserInput(`${userInput}${key}`);
    }
  };

  //will be called everytime on state change and re-render
  useEffect(() => {
    //Effect
    window.addEventListener("keydown", handleEvent);

    return () => {
      //clean up Effect
      window.removeEventListener("keydown", handleEvent);
    };
  });

  // return the state
  return userInput;
}

export default useKeyPress;
