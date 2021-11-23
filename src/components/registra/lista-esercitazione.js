import React from 'react';
import Esercitazione from './esercitazione.js';
import '../../index.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import FormControl from '@mui/material/FormControl';
import { connect } from 'react-redux'
import { rimuoviEsercitazione, handleNuovaEsercitazioneSubmit,handleNuovaEsercitazioneChange } from '../../redux'

const ListaEsercitazione = ({ nuovaEsercitazione,esercizi,idEsercizio, rimuoviEsercitazione, handleNuovaEsercitazioneSubmit,handleNuovaEsercitazioneChange  }) => {
    debugger;
    if(esercizi == null){
        esercizi = [{
            id : 1,
            esercitazioni : []
        }]
    }
    const listaEsercizi = esercizi.filter((esercizio) => {
        return esercizio.id === idEsercizio;
    });
    const esercizio = listaEsercizi.shift();
    const esercitaz = esercizio == null ? [] : esercizio.esercitazioni;
    const lista = esercitaz.map((esercitazio) => {
        return (
            <div className="orizzontali">

                <Esercitazione key={esercitazio.id}
                    esercitazione={esercitazio}
                    handleNuovaEsercitazioneChange={() => { }}
                />
                <IconButton aria-label="delete" onClick={() => { rimuoviEsercitazione(esercitazio.id) }}>
                    <DeleteIcon />
                </IconButton>
            </div>)
    });

    const nuovaEsercit = (
        <div className="orizzontali">
        
            <Esercitazione key={nuovaEsercitazione.id}
                esercitazione={nuovaEsercitazione}
                handleNuovaEsercitazioneChange={handleNuovaEsercitazioneChange}
            />
            <IconButton aria-label="add" onClick={() => { handleNuovaEsercitazioneSubmit() }}>
                <AddIcon />
            </IconButton>
        </div>
    );
    
    return (
        <div>

            <div className="verticali">
                <FormControl variant="standard">
                    {(idEsercizio != null) ? (
                        <div>
                            <div>Lista esercitazioni</div>
                            {nuovaEsercit}
                        </div>
                    ) : (<div></div>)}
                    {lista}
                </FormControl>
            </div>
        </div>
    );

}
  const mapStateToProps = state => {
    debugger;
    return {
        
        nuovaEsercitazione: state.esercitazione.nuovaEsercitazione,
        esercizi: state.esercitazione.esercizi,
        idEsercizio: state.esercitazione.idEsercizio
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        rimuoviEsercitazione: (id) => dispatch(rimuoviEsercitazione(id)),
        handleNuovaEsercitazioneSubmit : () => dispatch(handleNuovaEsercitazioneSubmit()),
        handleNuovaEsercitazioneChange: () => dispatch(handleNuovaEsercitazioneChange())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListaEsercitazione);
