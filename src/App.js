import React from 'react';
import Button from './components/useState/Button'
import './App.css';
import ClassCounter from './components/useState/ClassCounter';
import FunctionalCounter from './components/useState/FunctionalCounter';
import StateObject from './components/useState/StateObject';

function App() {

  return (
    <div >
    {/* <ClassCounter/>
    <FunctionalCounter/> */}
    <StateObject/>
    </div>
  );
}

export default App;
