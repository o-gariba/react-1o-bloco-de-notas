import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props)
    this.titulo = ""
    this.texto = ""
  }

  // Handler
  _mudancaDeTitulo(evento) {
    // console.log(evento.target.value)
    evento.stopPropagation()
    this.titulo = evento.target.value;
  }

  _handlerMudancaTexto(evento) {
    evento.stopPropagation()
    // console.log(evento.target.value)
    this.texto = evento.target.value
  }

  _criaCartao(evento) {
    evento.preventDefault()
    evento.stopPropagation()
    evento.target.reset()
    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criaCartao.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._mudancaDeTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handlerMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;