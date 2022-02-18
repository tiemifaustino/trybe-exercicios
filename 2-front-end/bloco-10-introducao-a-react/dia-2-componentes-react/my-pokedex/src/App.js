import './App.css';
import React, { Component } from 'react';
import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;
