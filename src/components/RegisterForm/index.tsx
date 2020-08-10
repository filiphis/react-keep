/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './styles.css';

class RegisterForm extends Component {
  titulo = '';

  handleMudancaTitulo(event: React.ChangeEvent<HTMLInputElement>) {
    this.titulo = event.target.value;
    console.log(this.titulo);
  }

  render() {
    return (
      <form className="form-cadastro" action="">
        <input
          onChange={this.handleMudancaTitulo}
          className="form-cadastro_input"
          type="text"
          placeholder="Titulo"
        />

        <textarea
          rows={15}
          className="form-cadastro_input"
          placeholder="Escreva sua nota"
        />
        <button
          className="form-cadastro_input form-cadastro_submit"
          type="button"
        >
          Criar nota
        </button>
      </form>
    );
  }
}

export default RegisterForm;
