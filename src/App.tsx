import React, { Component } from "react";
import ListNotes from "./components/ListNotes";
import RegisterForm from "./components/RegisterForm";
// import './App.css';

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <RegisterForm />
        <ListNotes />
      </section>
    );
  }
}

export default App;
