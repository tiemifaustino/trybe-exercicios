import React, { Component } from "react";

class PersonalForm extends Component {
  render() {
    const { changeHandler } = this.props;

    return (
        <fieldset>
            <legend>Dados Pessoais</legend>
            <div className="container__inputs">
               Nome:
                <input
                    type="text"
                    name='name'
                    maxLength="40"
                    required
                    onChange={changeHandler}
                    >
                </input> 
            </div>
            
        </fieldset>
    )
  }
}

export default PersonalForm;
