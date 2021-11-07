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


 const RegistraEsercizio = ({esercizi,value,add,addData,submit}) => {

    const items = esercizi.map((esercizio) => (
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
                    value={value.esercizio}
                    label="Registra label"
                    onChange={add}
                >
                    {items}
                </Select>
                <DateTimePicker
                    renderInput={(inp) => <TextField {...inp} />}
                    label="DateTimePicker"
                    name="data"
                    value={value.data}
                    onChange={addData}
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    name="note"
                    value={value.note}
                    onChange={add}
                />
                <Button variant="contained" onClick ={submit}>Contained</Button>
            </FormControl>
        </div>
    );
}
export default RegistraEsercizio;

