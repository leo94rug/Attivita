import React from 'react';
import './index.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import DateTimePicker from '@mui/lab/DateTimePicker';
const Esercitazione = ({ esercitazione, rimuoviEsercitazione }) => {
debugger;
    return (
        <div class="orizzontali">
            <div>
                <IconButton aria-label="delete" onClick={() => { rimuoviEsercitazione(esercitazione.id) }}>
                    <DeleteIcon />
                </IconButton>
            </div>

                <div>
                    <DateTimePicker
                        label="Data"
                        readOnly
                        value={new Date(esercitazione.data)}
                        name="data"
                        renderInput={(params) => <TextField {...params} />}
                    />

                </div>
                <div>
                    Note : {esercitazione.note}
                </div>
            </div>
    );
}
export default Esercitazione;
