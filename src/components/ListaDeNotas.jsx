import React, { Component } from "react";
import CardNota from "./CardNotas/CardNota.jsx";

class ListaDeNotas extends Component {
    render() { 
        return (
            <ul>
            {Array.of('Trabalho', 'Estudo').map((topico, index) => {
                    return (
                        <li key={index}>
                            <div>{topico}</div>
                            <CardNota/>
                        </li>
            )})}
            </ul>
        )
    }
}

export default ListaDeNotas;