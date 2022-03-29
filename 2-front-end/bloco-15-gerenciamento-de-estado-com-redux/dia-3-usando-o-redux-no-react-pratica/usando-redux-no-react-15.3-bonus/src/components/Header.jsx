import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Cadastre-se para ser nosso cliente!</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login" >Login</Link>
          <Link to="/cadastro">Cadastro</Link>
          <Link to="/clientes">Clientes cadastrados</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
