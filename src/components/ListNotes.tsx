import React, { Component } from "react";
import CardNote, { Categorie } from "./Cardote/CardNote";

class ListNotes extends Component {
  render() {
    const categories: Categorie[] = [
      { title: "Trabalho" },
      { title: "Estudo" },
    ];

    return (
      <ul>
        <CardNote
          title="Titulo da nota1"
          description="Descrição da nota1"
          categories={categories}
        />
        {/* <CardNote title="Titulo da nota2" description="Descrição da nota2" /> */}
        {/* <CardNote title="Titulo da nota3" description="Descrição da nota3" />
        <CardNote title="Titulo da nota4" description="Descrição da nota4" />
        <CardNote title="Titulo da nota5" description="Descrição da nota5" /> */}
      </ul>
    );
  }
}

export default ListNotes;
