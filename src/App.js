import React, { Component } from "react";
import FormTarefas from "./components/FormsTarefas";
import ListaDeNotas  from "./components/ListaDeNotas";

class App extends Component {
  render() {
    return ( 
      <section>
        <FormTarefas/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
