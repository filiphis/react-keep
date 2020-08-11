/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Nota, ListNotes } from './components/ListNotes';
import RegisterForm from './components/RegisterForm';

import './assets/styles/App.css';

type State = {
  notas: Nota[];
};

class App extends React.Component<{}, State> {
  // notas: Nota[] = [];

  constructor(props: any) {
    super(props);
    // const { notasP } = this.props;
    this.state = {
      notas: [],
    };
  }

  handleCreateCard = (titulo: string, descricao: string) => {
    const { notas } = this.state;
    const novaNota = {
      titulo,
      descricao,
    };
    const novoArrayNotas = [...notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  };

  render() {
    return (
      <section className="conteudo">
        <RegisterForm handleCreateCard={this.handleCreateCard} />
        <ListNotes notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
