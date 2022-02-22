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
    this.setState((estadoAnterior) => ({
      clickButtonTwo: estadoAnterior.clickButtonTwo + 1,
    }))
    console.log('Você clicou no botão 2', this.state.clickButtonTwo);
  }
  
  handleClickButton3() {
    // Descontrução do "estadoAnterior.clickButtonThree" para utilizar somente a chave "clickButtonThree" 
    this.setState(({ clickButtonThree }) => ({
      // clickButtonThree: estadoAnterior.clickButtonThree + 1,
      clickButtonThree: clickButtonThree + 1,
    }));
    console.log('Clicou no botão 3', this.state.clickButtonThree);
  }

   // Para essa função, não precisamos utilizar o bind porque ela é utilizada apenas dentro do contexto do componente App
  getButtonColor(number) {
    // Muda a cor para verde se o número for par
    return number % 2 === 0 ? 'green' : 'pink';
  }

  render() {
    const { clickButtonTwo, clickButtonThree } = this.state;

    return (
      <div>
        <button
          type="button"
          onClick={this.handleClick}
          style={{ backgroundColor: this.getButtonColor(this.state.clickButtonOne) }}
          >Button One = {this.state.clickButtonOne}
        </button>
        <button
          type="button"
          onClick={this.handleClickButton2}
          style={{ backgroundColor: this.getButtonColor(clickButtonTwo) }}
          >Button Two = {this.state.clickButtonTwo}
        </button>
        <button
          type="button"
          onClick={this.handleClickButton3}
          style={{ backgroundColor: this.getButtonColor(clickButtonThree) }}
          >Button Three = {this.state.clickButtonThree}
        </button>
      </div>
    );
  }
}

export default App;
