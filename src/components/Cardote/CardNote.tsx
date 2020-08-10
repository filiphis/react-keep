import React from 'react';
import './CardNote.css';

export type Categorie = {
  title: string;
}

type Props = {
  title: string;
  description: string;
  // categories: string;
  categories: Categorie[];
}

class CardNote extends React.Component<Props> {
  render() {
    const { title, description, categories } = this.props;
    return (
      <li>
        <section className="card-note">
          <header>
            <h3>{title}</h3>
          </header>
          <p>{description}</p>
          <h3>Categorias</h3>
          {categories.map((item, index) => <strong key={index}>{item.title} </strong>
          )}
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
