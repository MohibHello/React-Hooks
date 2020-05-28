import React from 'react';
import Button from './components/useState/Button'
import './App.css';
import ClassCounter from './components/useState/ClassCounter';
import FunctionalCounter from './components/useState/FunctionalCounter';
import StateObject from './components/useState/StateObject';
import MultipleUseState from './components/useState/MultipleUseState';
import ClassComponentLifeCycle from './components/useEffect/ClassComponentLifeCycle';
import SampleComponent from './components/useEffect/SampleComponent';
import FunctionalComponentLifeCycle from './components/useEffect/FunctionComponentLifeCycle';
import Counter from './components/useEffect/CounterMountOrUnmount';
import UseEffectEventListener from './components/useEffect/UseEffectEventListener';
import ParentApp from './components/useContext/ClassContext';
import FunctionalContext from './components/useContext/FunctionalContext';
function App() {

  return (
    <div >
    {/* <ClassCounter/>
    <FunctionalCounter/> */}
    {/* <StateObject/> */}
    {/* <MultipleUseState/> */}
    {/* <ClassComponentLifeCycle/> */}
    {/* <SampleComponent /> */}
    {/* <FunctionalComponentLifeCycle/> */}
    {/* <Counter/> */}
    {/* <UseEffectEventListener/> */}
    {/* <ParentApp/> */}
    <FunctionalContext/>
    </div>
  );
}

export default App;
