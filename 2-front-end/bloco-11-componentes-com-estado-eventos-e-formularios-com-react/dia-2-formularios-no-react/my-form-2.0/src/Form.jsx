import React, { Component } from "react";
import PersonalForm from "./PersonalForm";

class Form extends Component {
  render() {
    // const { changeHandler } = this.props;

    return (
      <PersonalForm changeHandler={this.props.changeHandler} />
    )
  }
}

export default Form;
