import React, { useState } from 'react';
import './index.css';
import Filtra from './common/filtra.js';
import ListaEsercizio from './components/registra/lista-esercizio.js';
import { nanoid } from 'nanoid';
import ListaEsercitazioni from './components/registra/lista-esercitazione.js';
import Container from '@mui/material/Container';
import dataEsercizi from './data/mockup-data.json';
import dataSchede from './data/mockup-schede.json';

export default function Registra() {
    const vDataSchede = [...dataSchede];
    const [idScheda, setScheda] = useState(null);
    const [idEsercizio, setIdEsercizio] = useState(null);
    const [esercizi, setEsercizi] = useState(dataEsercizi);
    const [nuovaEsercitazione, setNuovaEsercitazione] = useState({
        id: "",
        esercizio: "",
        data: new Date(),
        note: ""
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
    const handleNuovaEsercitazioneChange = (event) => {

        event.preventDefault();
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const newFormData = { ...nuovaEsercitazione };
        newFormData[fieldName] = fieldValue;
        setNuovaEsercitazione(newFormData);
    }
    const handleNuovaEsercitazioneSubmit = () => {
        const myNuovaEsercitazione = {
            id: nanoid(),
            esercizio: idEsercizio,
            data: nuovaEsercitazione.data,
            note: nuovaEsercitazione.note
        };
        const newEsercizi = esercizi.slice();

        const esercizioIndex = esercizi.findIndex((esercizio) => esercizio.id === idEsercizio);
        const newEserciatazioni = [...esercizi[esercizioIndex].esercitazioni, myNuovaEsercitazione];
        esercizi[esercizioIndex].esercitazioni = newEserciatazioni;
        setEsercizi(newEsercizi);
        setNuovaEsercitazione({
            id: "",
            esercizio: "",
            data: new Date(),
            note: ""
        });
    }
    return (
        <Container maxWidth="xl">
            <Filtra onChangeSelection={setScheda} data={vDataSchede}></Filtra>

            <ListaEsercizio idScheda={idScheda} esercizi={esercizi} handleSetIdEsercizio={handleSetIdEsercizio}></ListaEsercizio>
            <ListaEsercitazioni>
            </ListaEsercitazioni>
        </Container>
    );
};



