import React from 'react';
import ReactDOM from 'react-dom';
import Esercizio from './esercizio.js';
import './index.css';

const ListaEsercizio = ({ idScheda, esercizi, handleSetIdEsercizio }) => {

    const lista = esercizi == null ? [] : esercizi.map((esercizio) => {
        if (esercizio.idScheda == idScheda) {
            return <Esercizio key={esercizio.id}
                esercizio={esercizio}
                handleSetIdEsercizio={handleSetIdEsercizio}
            />
        }
    });
    return (
        <div>
            <div>Lista esercizi</div>
            <div class="orizzontali">{lista}</div>

        </div>
    );

}
export default ListaEsercizio;
