import React, { Component } from "react"

class FormTarefas extends Component{ 
    
    render() {
        return (
        <form>
            <input placeholder="Qual a sua próxima tarefa?" />
            <textarea placeholder="Descreva sua tarefa..." />
            <button>Criar nota</button>
        </form>
        );
    }
}

export default FormTarefas;