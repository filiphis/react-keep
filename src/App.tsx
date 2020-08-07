/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import ListaDeNotas from './components/ListaDeNotas';

function App() {
  return (
    <section>
      <form action="">
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva sua nota" />
        <button type="button">Criar nota</button>
      </form>

      <ListaDeNotas />
    </section>
  );
}

export default App;
