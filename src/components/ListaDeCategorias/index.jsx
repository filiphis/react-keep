/* eslint-disable react/no-array-index-key */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {
  handleEventoInput(e) {
    if (e.key === 'Enter') {
      const { adicionarCategoria } = this.props;
      console.log('Adicionar nota');
      console.log(e.target.value);
      const valorCategoria = e.target.value;
      adicionarCategoria(valorCategoria);
    }
  }

  render() {
    const { categorias } = this.props;
    return (
      <div className="categorias">
        <ul className="categorias-lista">
          <li className="categorias-item">Categoria1</li>
          {categorias.map((categoria, index) => (
            <li key={index} className="categorias-item">
              {categoria}
            </li>
          ))}
        </ul>
        <input
          onKeyUp={this.handleEventoInput.bind(this)}
          className="categorias-input"
          type="text"
          placeholder="Nova categoria"
        />
      </div>
    );
  }
}

export default ListaDeCategorias;
