import React from 'react';
import ReactDOM from 'react-dom';
import Esercizio from './esercizio.js';
import './index.css';


export default function ListaEsercizio(props) {
    debugger;
    const lista = props.value.map((esercizio) =>
    <Esercizio key={esercizio.id}
            value={esercizio} 
            onRimuoviEsercitazione={props.onRimuoviEsercitazione}
            />
  );
    return (
        <div>
        <div>Lista esercizi</div>
        <div class= "orizzontali">{lista}</div>
        
        </div>
    );

}

