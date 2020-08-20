import React, { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = '';
    this.texto = '';
    this.categoria = 'Sem categoria';
  }

  handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
        <select
          onChange={this.handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option defaultChecked>Sem categoria</option>
          {this.props.categorias.map((categoria) => (
            <option>{categoria}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastroinput"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastroinput"
          onChange={this.handleMudancaTexto.bind(this)}
        />
        <button
          type="submit"
          className="form-cadastroinput form-cadastrosubmit"
        >
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
