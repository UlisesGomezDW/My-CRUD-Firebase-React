import React, { Component } from 'react';
import './App.css';
import UseStateExercice from './components/useState'; 
import UseStateWithView from './components/useState/VersionTwo';
import UseStateWithObject from './components/useState/withObject'
class App extends Component {
  render() {
    return (
      <div className="App">
        <UseStateExercice/>
        <UseStateWithView/>
        <UseStateWithObject/>
      </div>
    );
  }
}

export default App;
