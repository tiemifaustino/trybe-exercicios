import React, { Component } from 'react';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
    }
  }

  changeHandler = (event) => {
    let { name, value } = event.target
    if (name === 'name') {
      value = value.toUpperCase();
      this.setState((previousState) => ({
        [name]: value,
      }))
    }
    // this.updateState(name, value);
  }

  // updateState = (name, value) => {
  //   this.setState((previousState) => ({
  //     [name]: value,
  //   }))
  // }

  render() {
    return (
      <main className="App">
        <Form changeHandler={this.changeHandler} />
      </main>
    );
  }
}

export default App;
