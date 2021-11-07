import React from 'react';
import Button from '@mui/material/Button';
import './index.css';

const Esercizio = ({esercizio,handleSetIdEsercizio}) => {

    return (
        <div class="esercizio">
          
            <Button variant="contained"  onClick={() => handleSetIdEsercizio(esercizio.id)}>
            {esercizio.nome}   
            </Button>
        </div>
    );
}

export default  Esercizio;