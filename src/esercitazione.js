import React from 'react';
import './index.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import DateTimePicker from '@mui/lab/DateTimePicker';

export default function Esercitazione(props) {
    const handleClick = () => {
        props.onRimuoviEsercitazione(props.value.id);
    }
    return (
        <div class="orizzontali">
            <div>
                <IconButton aria-label="delete" onClick={() => {handleClick()}}>
                    <DeleteIcon />
                </IconButton>
            </div>
            <div class="verticali">

                <div>
                <DateTimePicker
          label="Data"
          readOnly
          value={props.value.data}

          renderInput={(params) => <TextField {...params} />}
        /> 

                </div>
                <div>
                    Note : {props.value.note}
                </div>
            </div>
        </div>
    );
}
