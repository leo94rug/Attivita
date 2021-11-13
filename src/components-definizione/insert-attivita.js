import React, { Fragment } from 'react';
import '../index.css';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


const InsertAttivita = ({ nuovaAttivita, handleNuovaAttivitaSubmit, handleNuovaAttivitaChange }) => {

    return (
        <Fragment>
            <div>
                <div>Nuova attivita</div>
                <FormControl variant="standard">
                    <TextField
                        id="outlined-multiline-flexible"
                        name="nome"
                        value={nuovaAttivita.nome}
                        onChange={(event) => {
                            handleNuovaAttivitaChange(event);

                        }}
                    />
                    <Button variant="contained" onClick={() => handleNuovaAttivitaSubmit()}>Inserisci</Button>
                </FormControl>
            </div>
        </Fragment>
    );
}
export default InsertAttivita;

