/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './styles.css';

// export type Categorie = {
//   title: string;
// };

type Props = {
  title: string;
  description: string;
  // categories: string;
  // categories: Categorie[];
};

class CardNote extends React.Component<Props> {
  render() {
    const { title, description } = this.props;
    return (
      <li className="lista-notas_item">
        <section className="card-nota">
          <header className="card-nota_cabecalho">
            <h3 className="card-nota_cabecalho">{title}</h3>
          </header>
          <p className="card-nota_texto">{description}</p>
          {/* <h3>Categorias</h3> */}
          {/* {categories.map((item, index) => (
            <strong key={index}>{item.title} </strong>
          ))} */}
        </section>
      </li>
    );
  }
}

export default CardNote;

// Function component
// export interface CardNoteProps {
//   title: string;
//   description: string;
// }

// const CardNote: React.FC<CardNoteProps> = ({ title, description }: CardNoteProps) => (
// <li>
//   <section>
//     <header>
//       <h3>{title}</h3>
//     </header>
//     <p>{description}</p>
//   </section>
// </li>
// );

// export default CardNote;
