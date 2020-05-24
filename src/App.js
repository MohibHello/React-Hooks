import React from 'react';
import Button from './components/useState/Button'
import './App.css';
import ClassCounter from './components/useState/ClassCounter';
import FunctionalCounter from './components/useState/FunctionalCounter';

function App() {

  return (
    <div className='App'>
    <ClassCounter/>
    <FunctionalCounter/>
    </div>
  );
}

export default App;
