import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Bem-vindo!</h1>
        <h2>Faça seu login</h2>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Home;
