import {
    FETCH_ESERCITAZIONI_REQUEST,
    FETCH_ESERCITAZIONI_SUCCESS,
    FETCH_ESERCITAZIONI_FAILURE,
    RIMUOVI_ESERCITAZIONE
} from './esercitazioneTypes'

const initialState = {
    loading: false,
    esercitazioni: [],
    error: '',
    nuovaEsercitazione:{
        id: "",
        esercizio: "",
        data: new Date(),
        note: ""
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ESERCITAZIONI_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_ESERCITAZIONI_SUCCESS:
            return {
                loading: false,
                esercitazioni: action.payload,
                error: ''
            }
        case FETCH_ESERCITAZIONI_FAILURE:
            return {
                loading: false,
                esercitazioni: [],
                error: action.payload
            }
        case RIMUOVI_ESERCITAZIONE:
            debugger;
            return {
                esercitazioni: state.esercitazioni.filter(function (esercitazione) {
                    return esercitazione.id !== action.payload;
                })
            }
        default: return state
    }
}

export default reducer