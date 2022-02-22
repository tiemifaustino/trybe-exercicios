import './App.css';
import React from 'react';

function handleClick() {
  console.log('Clicou no botão');
}

function handleClickButton2() {
  console.log('Você clicou no botão 2');
}

function handleClickButton3() {
  console.log('Clicou no botão 3');
}

class App extends React.Component {
  render() {
    return (
      <>
        <button type="button" onClick={handleClick}>My Button</button>
        <button type="button" onClick={handleClickButton2}>My Button 2</button>
        <button type="button" onClick={handleClickButton3}>My Button 3</button>
      </>
    );
  }
}

export default App;
