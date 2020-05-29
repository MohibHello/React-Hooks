import React,{useState} from 'react'
/* 
reuse bussiness logic using custom hooks
*/
function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);
  
  //if you are writing arrow function within function declare it with const keyword
    const increment = () => {setCount(count + 1)}
    const decrement = () => {setCount(count - 1)}   
    const reset = () => { setCount(0); };
  
  return {count,increment,decrement,reset}

  }

export default useCounter
