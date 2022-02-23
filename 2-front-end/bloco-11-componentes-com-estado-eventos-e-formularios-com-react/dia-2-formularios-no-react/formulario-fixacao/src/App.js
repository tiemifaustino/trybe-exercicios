import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      agreement: false,
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, email, age, anecdote } = this.state;

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
              value={name}
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
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className="campos-form" htmlFor="age">
            Idade:
            {' '}
            <select
              id="age"
              name="age"
              value={age}
              onChange={this.handleChange}
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
              value={anecdote}
              onChange={this.handleChange}
            />
          </label>

          <label className="campos-form" htmlFor="agreement">
            Concorda em enviar
            {' '}
            <input
              id="agreement"
              name="agreement"
              type="checkbox"
              // value={}
              onChange={this.handleChange}
            />
          </label>

        </form>
      </div>
    );
  }
}

export default App;
