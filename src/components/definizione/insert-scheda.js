import React, { Fragment } from 'react';
import '../../index.css';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


const InsertScheda = ({ elencoAttivita, nuovaScheda, handleNuovaSchedaSubmit, handleNuovaSchedaChange }) => {
    const items = elencoAttivita.map((attivita) => (
        <MenuItem value={attivita.id} key={attivita.id}>{attivita.nome}</MenuItem>
    ));
    debugger;
    return (
        <Fragment>
            <div>
                <div>Nuova scheda</div>
                <FormControl variant="standard">
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="idAttivita"
                        value={nuovaScheda.idAttivita}
                        label="Attivita"
                        onChange={(event) => {
                            handleNuovaSchedaChange(event);

                        }}
                    >
                        {items}
                    </Select>
                    <TextField
                        id="outlined-multiline-flexible"
                        name="nome"
                        value={nuovaScheda.nome}
                        onChange={(event) => {
                            handleNuovaSchedaChange(event);

                        }}
                    />
                    <Button variant="contained" onClick={() => handleNuovaSchedaSubmit()}>Inserisci</Button>
                </FormControl>
            </div>
        </Fragment>
    );
}
export default InsertScheda;

