/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';

function App() {
  return (
    <section>
      <FormularioCadastro />
      <ListaDeNotas />
    </section>
  );
}

export default App;
