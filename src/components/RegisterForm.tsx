import React, { Component } from "react";

class RegisterForm extends Component {
  render() {
    return (
      <form className="form-cadastro" action="">
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva sua nota" />
        <button type="button">Criar nota</button>
      </form>
    );
  }
}

export default RegisterForm;
