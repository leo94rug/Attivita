import React from 'react';
import '../index.css';

import TextField from '@mui/material/TextField';
import DateTimePicker from '@mui/lab/DateTimePicker';
const Esercitazione = ({ esercitazione, handleNuovaEsercitazioneChange }) => {
    debugger;
    return (

        <div class="orizzontali">

            <DateTimePicker
                renderInput={(inp) => <TextField {...inp} />}
                name="data"
                value={new Date(esercitazione.data)}
                onChange={(myDate) => {
                    myDate.target = {
                        name: "",
                        value: ""
                    }
                    myDate.target.name = "data";
                    myDate.target.value = new Date(myDate);
                    myDate.preventDefault = () => { };
                    handleNuovaEsercitazioneChange(myDate);
                }}
            />

            <TextField
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                name="note"
                value={esercitazione.note}
                onChange={handleNuovaEsercitazioneChange}
            />
        </div>
    );
}
export default Esercitazione;
