/* eslint-disable react/prefer-stateless-function */
import React, { FormEvent } from 'react';
import './styles.css';

interface RegisterFormProps {
  handleCreateCard: any;
}

class RegisterForm extends React.Component<RegisterFormProps> {
  titulo: string;

  descricao: string;

  constructor(props: any) {
    super(props);
    this.titulo = '';
    this.descricao = '';
  }

  handleCreateCard = (event: FormEvent) => {
    const { handleCreateCard } = this.props;
    event.preventDefault();
    handleCreateCard(this.titulo, this.descricao);
  };

  handleMudancaDescricao(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.descricao = event.target.value;
  }

  handleMudancaTitulo(event: React.ChangeEvent<HTMLInputElement>) {
    this.titulo = event.target.value;
  }

  render() {
    return (
      <form
        onSubmit={this.handleCreateCard.bind(this)}
        className="form-cadastro"
        action=""
      >
        <input
          onChange={this.handleMudancaTitulo.bind(this)}
          className="form-cadastro_input"
          type="text"
          placeholder="Titulo"
        />

        <textarea
          onChange={this.handleMudancaDescricao.bind(this)}
          rows={15}
          className="form-cadastro_input"
          placeholder="Escreva sua nota"
        />
        <button
          className="form-cadastro_input form-cadastro_submit"
          type="submit"
        >
          Criar nota
        </button>
      </form>
    );
  }
}

export default RegisterForm;
