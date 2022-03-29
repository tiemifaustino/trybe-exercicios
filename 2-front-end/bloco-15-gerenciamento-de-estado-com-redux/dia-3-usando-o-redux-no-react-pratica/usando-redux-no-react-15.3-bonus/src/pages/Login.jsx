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
    this.setState({ [name]: value }, this.validateInputsForm)
  }

  validateInputsForm = () => {
    const emailREGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const { email, password } = this.state;

    // O método test() executa uma busca por uma correspondência entre uma expressão regular e uma string. Retorna true ou false.
    // se o e-mail for válido e o campo de senha for maior ou igual a 6 caracteres, o button será ativado.
    if (emailREGEX.test(email) && password.length >= 6) {
      this.setState({
        isButtonDisabled: false,
      });
    } else {
      this.setState({
        isButtonDisabled: true,
      });
    }
  }

  render() {
    const { isButtonDisabled } = this.state;

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

          <button type="submit" disabled={ isButtonDisabled }>Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;

/* 
  Referência regex e-mail: https://regexr.com/3e48o
  Método test(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
*/