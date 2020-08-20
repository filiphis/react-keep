/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './estilo.css';
import { ReactComponent as DeleteSVG } from '../../assets/images/delete.svg';

class CardNota extends Component {
  apagar() {
    const { indice, deletarNota } = this.props;
    deletarNota(indice);
  }

  render() {
    const { titulo, texto } = this.props;
    return (
      <section className="card-nota">
        <DeleteSVG
          onClick={this.apagar.bind(this)}
          className="card-nota__icon-delete"
        />
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{titulo}</h3>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{texto}</p>
      </section>
    );
  }
}

export default CardNota;
