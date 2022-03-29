import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveClient } from '../redux/actions';

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      email: '',
      isButtonDisabled: true,
    }
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateEmail)
  }

  validateEmail = () => {
    const emailREGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const { email } = this.state;
    
    if (emailREGEX.test(email)) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }
  
  submitHandler = (event) => {
    const { name, age, email } = this.state;
    const { saveUser } = this.props;

    event.preventDefault();

    // envia os dados do state do componente para o store (estado global)
    saveUser({ name, age, email });

    // o  value={ name } é para que limpe o imput após clicar em salvar
    // limpa os imputs (o estado do componente):
    this.setState({ name: '', age: '', email: '' })
  }

  render() {
    const { name, age, email, isButtonDisabled } = this.state;

    return (
      <div>
        <form onSubmit={ this.submitHandler }>
          <label htmlFor="name">
            Nome:
            <input type="text" name="name" id="name" onChange={ this.inputHandler } value={ name }/>
            {/* o  value={ name } é para que limpe o imput após clicar em salvar */}
          </label>

          <label htmlFor="age">
            Idade:
            <input type="number" name="age" id="age" onChange={ this.inputHandler } value={ age }/>
          </label>

          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" onChange={ this.inputHandler } value={ email }/>
          </label>

          <button type="submit" disabled={ isButtonDisabled }>Salvar</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUser: (client) => dispatch(saveClient(client))
})

export default connect(null, mapDispatchToProps)(Cadastro);