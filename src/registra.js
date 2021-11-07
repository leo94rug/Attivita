import React from 'react';
import './index.css';
import Filtrascheda from './filtra-scheda.js';
import ListaEsercizio from './lista-esercizio.js';
import RegistraEsercizio from './registra-esercizio.js';
import Container from '@mui/material/Container';

const esercizi = [
    {
        nome: 'Panca', descrizione: 'descri', id: 1, idScheda: 1, esercitazioni: [
            { id: 1, data: '30/10/2021', note: 'tutto ok' }, { id: 2, data: '29/10/2021', note: 'tutto no' }, { id: 3, data: '31/10/2021', note: 'tutto si' },
        ]
    },
    {
        nome: 'Alzate', descrizione: 'descri2', id: 2, idScheda: 1, esercitazioni: [
            { id: 4, data: new Date('30/10/2021'), note: 'tutto ok' }, { id: 5, data: '29/11/2021', note: 'tutto no' }, { id: 6, data: '31/11/2021', note: 'tutto si' },
        ]
    },
    { nome: 'Flessioni', descrizione: 'descri3', id: 3, idScheda: 1, esercitazioni: [] },
    { nome: 'Flessioni', descrizione: 'descri3', id: 4, idScheda: 2, esercitazioni: [] }

];
class Registra extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nuovaEsercitazione: {
                id: '',
                esercizio: '',
                data: null,
                note: ''
            },
            idScheda: '',
            esercizi: [
            ]
        };
    }
    removeEsercitazione(id) {
        debugger;
        const appoggioEsercizi = this.state.esercizi.map((esercizio) => {
            esercizio.esercitazioni = esercizio.esercitazioni.filter(function (esercitazione) {
                return esercitazione.id !== id;
            });
            return esercizio;
        });
        this.setState({ esercizi: appoggioEsercizi });
    }
    aggiungiEsercitazione(event) {
        debugger;
        event.preventDefault();
        const nome = event.target.name;
        const valore = event.target.value;
        const nuovoStato = { ...this.state.nuovaEsercitazione };
        nuovoStato[nome] = valore;
        this.setState({ nuovaEsercitazione: nuovoStato });

    }
    aggiungiEsercitazioneData(valore) {
        const nuovoStato = { ...this.state.nuovaEsercitazione };
        nuovoStato['data'] = valore;
        this.setState({ nuovaEsercitazione: nuovoStato });

    }
    onSelezionaScheda = (id) => {
        this.setState({ idScheda: id });
        this.setState({
            esercizi: esercizi.filter((esercizio) => {
                return id == esercizio.idScheda;
            })
        });

    }
    submit = () => {
        const idEsercizio = this.state.nuovaEsercitazione.esercizio;
        const note = this.state.nuovaEsercitazione.note;
        const data = this.state.nuovaEsercitazione.data;
        const id = Math.floor(Math.random() * 100);
        debugger;
        const appoggioEsercizi = this.state.esercizi.map((esercizio) => {
            if(esercizio.id == idEsercizio){
                let nuovoStato = esercizio.esercitazioni.slice();
                nuovoStato.push({ id: id, data: data, note: note });
                esercizio.esercitazioni= nuovoStato;
            }
            return esercizio;
            
        });

        this.setState({ esercizi: appoggioEsercizi });
        this.setState({nuovaEsercitazione: {
            id: '',
            esercizio: '',
            data: null,
            note: ''
        }})

    };

    render() {
        return (
            <Container maxWidth="xl">
                <Filtrascheda value={this.state.idScheda}
                    onChangeScheda={this.onSelezionaScheda}></Filtrascheda>
                <RegistraEsercizio
                    value={this.state.nuovaEsercitazione}
                    esercizi={this.state.esercizi}
                    addData={(data) => this.aggiungiEsercitazioneData(data)}
                    add={(event) => this.aggiungiEsercitazione(event)}
                    submit={() => this.submit()}
                >

                </RegistraEsercizio>
                <ListaEsercizio value={this.state.esercizi} onRimuoviEsercitazione={(a) => this.removeEsercitazione(a)}></ListaEsercizio>
            </Container>
        );
    }
}

export default Registra;
