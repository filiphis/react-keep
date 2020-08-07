/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import CardNote from './CardNote';

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        <CardNote title="Titulo da nota1" description="Descrição da nota1" />
        <CardNote title="Titulo da nota2" description="Descrição da nota2" />
        <CardNote title="Titulo da nota3" description="Descrição da nota3" />
        <CardNote title="Titulo da nota4" description="Descrição da nota4" />
      </ul>
    );
  }
}
