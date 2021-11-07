import React from 'react';
import ReactDOM from 'react-dom';
import Esercitazione from './esercitazione.js';
import './index.css';


export default function ListaEsercitazione(props) {
    debugger;
    const lista = props.value.map((esercitazione) =>
    <Esercitazione key={esercitazione.id}
            value={esercitazione} 
            onRimuoviEsercitazione={(a) => {props.onRimuoviEsercitazione(a)}}
            />
  );
    return (
        <div>
        <div>Lista esercitazioni</div>
        {lista}
        </div>
    );

}

