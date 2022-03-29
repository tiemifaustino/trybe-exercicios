import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cadastro from './pages/Cadastro';
import ClientesCadastrados from './pages/ClientesCadastrados';
import Home from './pages/Home';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/login" component={ Login }/>
          <Route path="/cadastro" component={ Cadastro }/>
          <Route path="/clientes" component={ ClientesCadastrados }/>
        </Switch>
      </div>
    );
  }
}

export default App;
