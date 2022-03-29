import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveEmailLogin } from '../redux/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    
    // estado inicial da aplicação
    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    }
  }

  // função que salva os values no estado do componente
  // ao digitar no input, o value será salvo no estado (onChange)
  // o name do input será a chave
  // o value do input será o value da chave
  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateInputsForm)
  }

  // função que valida os inputs de email e passwourd
  validateInputsForm = () => {
    const emailREGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const { email, password } = this.state;
    // O método test() executa uma busca por uma correspondência entre uma expressão regular e uma string. Retorna true ou false.
    // se o e-mail for válido e o campo de senha for maior ou igual a 6 caracteres, o button será ativado.
    if (emailREGEX.test(email) && password.length >= 6) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  // função que é disparada quando o forms é submetido
  submitHandler = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { saveEmailLogin, history } = this.props;
    // a propriedade (chave) do mapDispatchToProps é também uma função que chama o dispatch e atribui o argumento recebido para a action que está dentro do dispatch
    // o email é o email que está no this.state (no estado do componente)
    saveEmailLogin(email);
    // o history.push redireciona para a página de clientes cadastrados
    history.push("/clientes");
  }

  render() {
    const { isButtonDisabled } = this.state;

    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={ this.submitHandler }>
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

const mapDispatchToProps = (dispatch) => ({
  saveEmailLogin: (email) => dispatch(saveEmailLogin(email)),
})

export default connect(null, mapDispatchToProps)(Login);

/* 
  Referência regex e-mail: https://regexr.com/3e48o
  Método test(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
*/