import React, {Fragment} from 'react';
import '../index.css';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Button from '@mui/material/Button';


const RegistraEsercitazione = ({ nuovaEsercitazione, idEsercizio, handleNuovaEsercitazioneSubmit, handleNuovaEsercitazioneChange }) => {

    return (
        <Fragment>
            {(idEsercizio != null) ? (
                <div>
                    <div>Registra esercitazione</div>
                    <FormControl variant="standard">

                        <DateTimePicker
                            renderInput={(inp) => <TextField {...inp} />}
                            label="DateTimePicker"
                            name="data"
                            value={nuovaEsercitazione.data}
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
                            label="Multiline"
                            multiline
                            maxRows={4}
                            name="note"
                            value={nuovaEsercitazione.note}
                            onChange={handleNuovaEsercitazioneChange}
                        />
                        <Button variant="contained" onClick={handleNuovaEsercitazioneSubmit}>Contained</Button>
                    </FormControl>
                </div>
            ) : (<div></div>)}
        </Fragment>
    );
}
export default RegistraEsercitazione;

