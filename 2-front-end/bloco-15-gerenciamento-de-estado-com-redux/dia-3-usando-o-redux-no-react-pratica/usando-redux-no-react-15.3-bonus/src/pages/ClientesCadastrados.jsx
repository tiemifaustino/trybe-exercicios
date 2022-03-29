import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClientesCadastrados extends Component {
  render() {
    const { email } = this.props;

    return (
      <div>

        {
          // se o email não foi salvo no state, não foi feito o login
          // se o email estiver vazio renderizar "Login não efetuado"
          email === ''
            ? <h2>Login não efetuado</h2>
            : (
              <h2>Clientes Cadastrados</h2>
            )
        }
        
      </div>
    );
  }
}

// A página de Clientes cadastrados deverá listar todos os clientes.
const mapStateToProps = (state) => ({
  email: state.emailLoginReducer.email,
  // clients: state.clientsReducer.clients,
})

export default connect(mapStateToProps)(ClientesCadastrados);
