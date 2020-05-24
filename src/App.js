import React from 'react';
import Button from './components/useState/Button'
import './App.css';
import ClassCounter from './components/useState/ClassCounter';
import FunctionalCounter from './components/useState/FunctionalCounter';
import StateObject from './components/useState/StateObject';
import MultipleUseState from './components/useState/MultipleUseState';

function App() {

  return (
    <div >
    {/* <ClassCounter/>
    <FunctionalCounter/> */}
    <StateObject/>
    <MultipleUseState/>
    </div>
  );
}

export default App;
