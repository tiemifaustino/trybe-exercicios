import './App.css';
import React from 'react';


class App extends React.Component {s
  constructor() {
    super();

    this.state = {
      clickButtonOne: 0,
      clickButtonTwo: 0,
      clickButtonThree: 0,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClickButton2 = this.handleClickButton2.bind(this);
    this.handleClickButton3 = this.handleClickButton3.bind(this);
  }
  
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      clickButtonOne: 1,
    }))
    console.log('Clicou no botão', this.state.clickButtonOne)
  }
  
  handleClickButton2() {
    this.setState((estadoAnterior, _props) => ({
      clickButtonTwo: estadoAnterior.clickButtonTwo + 1,
    }))
    console.log('Você clicou no botão 2', this);
  }
  
  handleClickButton3() {
    this.setState((estadoAnterior, _props) => ({
      clickButtonThree: estadoAnterior.clickButtonThree + 1,
    }))
    console.log('Clicou no botão 3', this);
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.handleClick}>{this.state.clickButtonOne}</button>
        <button type="button" onClick={this.handleClickButton2}>{this.state.clickButtonTwo}</button>
        <button type="button" onClick={this.handleClickButton3}>{this.state.clickButtonThree}</button>
      </>
    );
  }
}

export default App;
