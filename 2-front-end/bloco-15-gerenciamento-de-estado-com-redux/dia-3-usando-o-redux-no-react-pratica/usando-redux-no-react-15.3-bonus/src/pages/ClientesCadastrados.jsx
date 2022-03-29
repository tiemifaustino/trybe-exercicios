import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClientesCadastrados extends Component {
  render() {
    const { email } = this.props;

    return (
      <div>

        {
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

const mapStateToProps = (state) => ({
  email: state.emailLoginReducer.email,
})

export default connect(mapStateToProps)(ClientesCadastrados);
