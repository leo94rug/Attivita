import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Button from '@mui/material/Button';


export default function RegistraEsercizio(props) {

    const items = props.esercizi.map((esercizio) => (
        <MenuItem value={esercizio.id} key={esercizio.id}>{esercizio.nome}</MenuItem>
    ));
    return (
        <div>
            <div>Registra esercizio</div>
            <FormControl variant="standard">
                <InputLabel id="demo-simple-select-label">Esercizio</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="esercizio"
                    value={props.value.esercizio}
                    label="Registra label"
                    onChange={props.add}
                >
                    {items}
                </Select>
                <DateTimePicker
                    renderInput={(inp) => <TextField {...inp} />}
                    label="DateTimePicker"
                    name="data"
                    value={props.value.data}
                    onChange={props.addData}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    name="note"
                    value={props.value.note}
                    onChange={props.add}
                />
                <Button variant="contained" onClick ={props.submit}>Contained</Button>
            </FormControl>
        </div>
    );

}
