import React, { Component } from "react";
import FormTarefas from "./components/FormsTarefas";
import ListaDeNotas  from "./components/ListaDeNotas";
import "./assets/App.css"
import "./assets/index.css"

class App extends Component {
  criarNota(titulo, texto) {
    console.log(`Cartão criado com sucesso! Nome: ${titulo} | Conteúdo: ${texto}`)
  }

  render() {
    return ( 
      <section>
        <FormTarefas criarNota = {this.criarNota}/>
        <ListaDeNotas notas = {[1,1,1,1,1,1,1,1]}/>
      </section>
    );
  }
}

export default App;
