import React from 'react';
import Esercitazione from './esercitazione.js';
import './index.css';

const ListaEsercitazione = ({ esercizi, idEsercizio, rimuoviEsercitazione }) => {
    const listaEsercizi = esercizi.filter((esercizio) => {
        return esercizio.id == idEsercizio;
    });
    const esercizio = listaEsercizi.shift();
    const esercitaz =  esercizio == null ? [] : esercizio.esercitazioni;
    const lista = esercitaz.map((esercitazio) => 
        <Esercitazione key={esercitazio.id}
            esercitazione={esercitazio}
            rimuoviEsercitazione={rimuoviEsercitazione}
        />
    );
    debugger;
const a = 'a';
    return (
        <div>
            <div>Lista esercitazioni</div>
            {lista}
        </div>
    );

}
export default ListaEsercitazione;
