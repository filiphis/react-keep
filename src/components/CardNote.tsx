/* eslint-disable react/prefer-stateless-function */
import React from 'react';

/**
 * this interface represent a CardNote item
 * title: String;
 * description: String;
 */
interface CardNoteProps {
  title: string;
  description: string;
}

class CardNote extends React.Component<CardNoteProps> {
  render() {
    const { title, description } = this.props;
    return (
      <li>
        <section>
          <header>
            <h3>{title}</h3>
          </header>
          <p>{description}</p>
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
