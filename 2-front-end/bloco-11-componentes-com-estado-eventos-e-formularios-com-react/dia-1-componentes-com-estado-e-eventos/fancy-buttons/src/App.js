import './App.css';
import React from 'react';


class App extends React.Component {s
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClickButton2 = this.handleClickButton2.bind(this);
    this.handleClickButton3 = this.handleClickButton3.bind(this);
  }
  
  handleClick() {
    console.log('Clicou no botão', this);
  }
  
  handleClickButton2() {
    console.log('Você clicou no botão 2', this);
  }
  
  handleClickButton3() {
    console.log('Clicou no botão 3', this);
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.handleClick}>My Button</button>
        <button type="button" onClick={this.handleClickButton2}>My Button 2</button>
        <button type="button" onClick={this.handleClickButton3}>My Button 3</button>
      </>
    );
  }
}

export default App;
