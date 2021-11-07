import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListaEsercitazione from './lista-esercitazione.js';


export default function Esercizio(props) {
    debugger;
    return (
        <div class="esercizio">
            <div>
                {props.value.nome}            
            </div>
            <div>
            <ListaEsercitazione value={props.value.esercitazioni} onRimuoviEsercitazione={props.onRimuoviEsercitazione}></ListaEsercitazione>

            </div>
        </div>
    );
}
