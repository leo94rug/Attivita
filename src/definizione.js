import React, { useState } from 'react';
import './index.css';
import InsertScheda from './components-definizione/insert-scheda.js';
import InsertAttivita from './components-definizione/insert-attivita.js';
import InsertEsercizio from './components-definizione/insert-esercizio.js';
import { nanoid } from 'nanoid';
import Container from '@mui/material/Container';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import dataAttivita from './data/mockup-attivita.json';

export default function Definizione() {
    const [tabValue, setTabValue] = useState("1");

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const [nuovaScheda, setNuovaScheda] = useState({
        id: "",
        nome: "",
        idAttivita: "",
    });
    const [nuovaAttivita, setNuovaAttivita] = useState({
        id: "",
        nome: ""
    });
    const handleNuovaSchedaChange = (event) => {
        debugger;
        event.preventDefault();
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const newFormData = { ...nuovaScheda };
        newFormData[fieldName] = fieldValue;

        setNuovaScheda(newFormData);
    }
    const handleNuovaAttivitaChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const newFormData = { ...nuovaAttivita };
        newFormData[fieldName] = fieldValue;
        setNuovaAttivita(newFormData);
    }
    const handleNuovaSchedaSubmit = () => {
        debugger;
        const myNuovaScheda = {
            id: nanoid(),
            nome: nuovaScheda.nome,
            idAttivita: nuovaScheda.idAttivita
        };
        // post
        setNuovaScheda({
            id: "",
            nome: "",
            idAttivita: "",
        });
    }
    const handleNuovaAttivitaSubmit = () => {
        const myNuovaScheda = {
            id: nanoid(),
            nome: nuovaScheda.nome,
        };
        // post
        setNuovaAttivita({
            id: "",
            nome: ""
        });
    }

    return (
        <Container maxWidth="xl">
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={tabValue}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                            <Tab label="Scheda" value="1" />
                            <Tab label="Attivita" value="2" />
                            <Tab label="Item Three" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <InsertScheda
                            elencoAttivita={dataAttivita}
                            nuovaScheda={nuovaScheda}
                            handleNuovaSchedaChange={handleNuovaSchedaChange}
                            handleNuovaSchedaSubmit={handleNuovaSchedaSubmit}
                        >
                        </InsertScheda>
                    </TabPanel>
                    <TabPanel value="2">
                    <InsertAttivita
                            nuovaAttivita={nuovaAttivita}
                            handleNuovaAttivitaChange={handleNuovaAttivitaChange}
                            handleNuovaAttivitaSubmit={handleNuovaAttivitaSubmit}
                        >
                        </InsertAttivita>

                    </TabPanel>
                    <TabPanel value="3"><InsertEsercizio elencoAttivita={dataAttivita}></InsertEsercizio></TabPanel>
                </TabContext>
            </Box>




        </Container>
    );
}