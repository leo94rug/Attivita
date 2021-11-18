import React from 'react';
import Esercizio from './esercizio.js';
import '../index.css';

const ListaEsercizio = ({ idScheda, esercizi, handleSetIdEsercizio }) => {
debugger;
    const lista = esercizi === null ? [] : esercizi.map((esercizio) => {
        if (esercizio.idScheda === idScheda) {
            return <Esercizio key={esercizio.id}
                esercizio={esercizio}
                handleSetIdEsercizio={(param) => handleSetIdEsercizio(param)}
            />
        }
    });
    return (
        <div>
            <div>Lista esercizi</div>
            <div className="orizzontali">{lista}</div>

        </div>
    );

}
export default ListaEsercizio;
