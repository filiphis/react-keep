/* eslint-disable react/prefer-stateless-function */
import React, { Fragment } from 'react';
// import CardNote, { Categorie } from '../CardNote';
import CardNote from '../CardNote';
import './styles.css';

export type Nota = {
  titulo: string;
  descricao: string;
};
type ListNotesProps = {
  notas: Nota[];
};

export class ListNotes extends React.Component<ListNotesProps> {
  render() {
    // const categories: Categorie[] = [
    //   { title: 'Trabalho' },
    //   { title: 'Estudo' },
    // ];

    const { notas } = this.props;
    return (
      <ul className="lista-notas">
        {notas.map((nota, index) => {
          return (
            <Fragment key={index}>
              <CardNote title={nota.titulo} description={nota.descricao} />
            </Fragment>
          );
        })}

        {/* <CardNote
          title="Titulo da nota1"
          description="Descrição da nota1"
          categories={categories}
        /> */}

        {/* <CardNote title="Titulo da nota2" description="Descrição da nota2" /> */}
        {/* <CardNote title="Titulo da nota3" description="Descrição da nota3" />
        <CardNote title="Titulo da nota4" description="Descrição da nota4" />
        <CardNote title="Titulo da nota5" description="Descrição da nota5" /> */}
      </ul>
    );
  }
}
