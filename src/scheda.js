import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TextField from '@mui/material/TextField';



function Scheda (props){
    debugger;
        return (
            <div>            
                <div>Nome : {props.value.nome}</div>
                <div>Start : {props.value.inizio}</div>
                <div>End : {props.value.fine}</div>


            </div>
        );
}
export default Scheda;