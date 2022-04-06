import React, { Component } from 'react';
import "./estiloCardNota.css"

class CardNota extends Component {
    render() { 
        return (
            <section className='card-nota'>
                <h1>Título</h1>
                <p>Descrição da atividade</p>
            </section>
        );
    }
}
 
export default CardNota;