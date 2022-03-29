import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    }
  }

  // ao digitar no input, o value será salvo no estado (onChange)
  // o name do input será a chave
  // o value do input será o value da chave
  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" onChange={ this.inputHandler }/>
          </label>

          <label htmlFor="password">
            Senha:
            <input type="password" name="password" id="password" onChange={ this.inputHandler }/>
          </label>

          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
