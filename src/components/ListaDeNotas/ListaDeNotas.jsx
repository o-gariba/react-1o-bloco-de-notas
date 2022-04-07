import React, { Component } from "react";
import CardNota from "../CardNotas/CardNota.jsx";
import "./estilo.css" 

class ListaDeNotas extends Component {
    // constructor(props){
    //     super(props)
    // }
    // Não precisamos declarar o constructor passando o props pq ele já faz isso automaticamente!!
    render() { 
        return (
            <ul className="lista-notas">
            {this.props.notas.map((nota, index) => {
                return (
                    <li className="lista-notas_item" key={index}>
                        <CardNota/>
                    </li>
                );
            })}
            </ul>
        )
    }
}

export default ListaDeNotas;