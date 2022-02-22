import React, { Component } from "react";

class PersonalForm extends Component {
  render() {
    return (
        <fieldset>
            <legend>Dados Pessoais</legend>
            <input
                type="text"
                name='name'
                maxLength="40"
                required
                >
            </input>
        </fieldset>
    )
  }
}

export default PersonalForm;
