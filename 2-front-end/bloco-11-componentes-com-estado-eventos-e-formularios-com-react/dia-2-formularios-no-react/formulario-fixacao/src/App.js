import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
    }
  }

  handleChange = (event) => {
    this.setState((previousState) => ({
      name: event.target.value,
    }))
  }

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form>

          <label className="campos-form" htmlFor="name">
            Nome:
            {' '}
            <input
              id="name"
              name="name"
              type="text"
              value={ name }
              onChange={this.handleChange}
            />
          </label>

          <label className="campos-form" htmlFor="email">
            Email:
            {' '}
            <input
              id="email"
              name="email"
              type="email"
            />
          </label>

          <label className="campos-form" htmlFor="age">
            Idade:
            {' '}
            <select
              id="age"
              name="age"
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

          <label className="campos-form" htmlFor="anecdote">
            Anedota:
            {' '}
            <textarea
              id="anecdote"
              name="anecdote"
            />
          </label>

        </form>
      </div>
    );
  }
}

export default App;
