import axios from 'axios'
import {
    FETCH_ESERCITAZIONE_REQUEST,
    FETCH_ESERCITAZIONE_SUCCESS,
    FETCH_ESERCITAZIONE_FAILURE,
    RIMUOVI_ESERCITAZIONE
} from './esercitazioneTypes'

export const rimuoviEsercitazione = (id) => {
    return {
        type: RIMUOVI_ESERCITAZIONE,
        payload: id
    }
}
export const handleNuovaEsercitazioneSubmit = (id) => {
    return {
        type: SUBMIT_NUOVA_ESERCITAZIONE,
        payload: id
    }
}
export const fetchEsercitazioni = () => {
    return (dispatch) => {
        dispatch(fetchEsercitazioniRequest());
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response.data is the users
                const esercitazioni = response.data
                dispatch(fetchEsercitazioniSuccess(esercitazioni))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchEsercitazioniFailure(error.message))
            })
    }
}

export const fetchEsercitazioniRequest = () => {
    return {
        type: FETCH_ESERCITAZIONE_REQUEST
    }
}

export const fetchEsercitazioniSuccess = esercitazioni => {
    return {
        type: FETCH_ESERCITAZIONE_SUCCESS,
        payload: esercitazioni
    }
}

export const fetchEsercitazioniFailure = error => {
    return {
        type: FETCH_ESERCITAZIONE_FAILURE,
        payload: error
    }
}