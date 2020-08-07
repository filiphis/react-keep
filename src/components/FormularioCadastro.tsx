/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class FormularioCadastro extends Component {
  render() {
    return (
      <form action="">
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva sua nota" />
        <button type="button">Criar nota</button>
      </form>
    );
  }
}
