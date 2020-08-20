/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    const { notas } = this.state;
    const arrayNotas = notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  adicionarCategoria(categoria) {
    const { categorias } = this.state;
    const novaCategorias = [...categorias, categoria];
    const novoEstado = { ...this.setState, categorias: novaCategorias };
    this.setState(novoEstado);
  }

  render() {
    const { notas, categorias } = this.state;
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            notas={notas}
            deletarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

// new ListaDeNotas({notas:this.notas})
export default App;
