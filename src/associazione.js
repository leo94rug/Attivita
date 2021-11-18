import React, { useState } from 'react';
import './index.css';
import Container from '@mui/material/Container';
import dataAttivita from './data/mockup-attivita.json';
import Filtra from './components-registra/filtra.js';
import AssociaEsercizio from './components-associazione/associa-esercizio.js';
import dataSchede from './data/mockup-schede.json';
import dataEsercizi from './data/mockup-esercizi.json';

import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap,
    move
} from "react-grid-dnd";
import Esercizio from './components-registra/esercizio';

export default function Associazione() {
    const vDataAttivita = [...dataAttivita];
    const [idAttivita, setIdAttivita] = useState(null);
    const [eserciziPerAttivita, setEserciziPerAttivita] = useState([]);
    const [eserciziPerScheda, setEserciziPerScheda] = useState([]);
    function setOrdine(esercizi){
        return esercizi.map((esercizio,index)=>{
            esercizio.ord = index;
            debugger;
                return esercizio;
        })
    }
    function onChange(sourceId, sourceIndex, targetIndex, targetId) {

        if (targetId===1) {
            const esercizioSource = eserciziPerAttivita[sourceIndex];
             const newEse = eserciziPerScheda.slice(0,targetIndex).concat(esercizioSource).concat(eserciziPerScheda.slice(targetIndex));
            setEserciziPerScheda(setOrdine(newEse));
        } else if (targetId ===2){

        } else {
            const result = swap(eserciziPerScheda, sourceIndex, targetIndex);
            setEserciziPerScheda(setOrdine(result));
        }

    }
    function setSchedeAttivita(idAttivita){
        debugger;
        setIdAttivita(idAttivita);
        setEserciziPerScheda(dataSchede.find((scheda)=>{
            return scheda.idAttivita===idAttivita;
        }).esercizi);
        setEserciziPerAttivita(dataEsercizi.filter((esercizio)=>{
            return esercizio.idAttivita===idAttivita;
        }));
    }

    return (
        <Container maxWidth="xl">
            <Filtra onChangeSelection={setSchedeAttivita} data={vDataAttivita}></Filtra>
            <AssociaEsercizio onChange={onChange} eserciziPerScheda={eserciziPerScheda} eserciziPerAttivita={eserciziPerAttivita}></AssociaEsercizio>

        </Container>
    );
}