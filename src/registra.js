import React, { useState } from 'react';
import './index.css';
import Filtrascheda from './filtra-scheda.js';
import ListaEsercizio from './lista-esercizio.js';
import RegistraEsercizio from './registra-esercizio.js';
import ListaEsercitazioni from './lista-esercitazione.js';
import Container from '@mui/material/Container';
import dataEsercizi from './data/mockup-data.json';


export default function Registra() {

    const [idScheda, setScheda] = useState(null);
    const [idEsercizio, setIdEsercizio] = useState(null);
    const [esercizi, setEsercizi] = useState(dataEsercizi);
    const [nuovaEsercitazione, setNuovaEsercitazione] = useState({
        id: '',
        esercizio: '',
        data: null,
        note: ''
    });

    const handleSetIdEsercizio = (id) => {
        debugger;
        setIdEsercizio(id);
    }
    const rimuoviEsercitazione = (id) => {
        const appoggioEsercizi = esercizi.map((esercizio) => {
            esercizio.esercitazioni = esercizio.esercitazioni.filter(function (esercitazione) {
                return esercitazione.id !== id;
            });
            return esercizio;
        });
        setEsercizi(appoggioEsercizi);
    }
    return (
        <Container maxWidth="xl">
            <Filtrascheda value={idScheda}
                onChangeScheda={setScheda}></Filtrascheda>

            <ListaEsercizio idScheda={idScheda} esercizi={esercizi} handleSetIdEsercizio={handleSetIdEsercizio}></ListaEsercizio>
            <ListaEsercitazioni esercizi={esercizi} idEsercizio={idEsercizio} rimuoviEsercitazione={rimuoviEsercitazione}></ListaEsercitazioni>
        </Container>
    );
};



