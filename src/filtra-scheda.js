import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
export default function Filtrascheda(props) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            await sleep(1e3); // For demo purposes.

            if (active) {
                setOptions([...topFilms]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);


    return (
        <form>
            <Autocomplete
                id="asynchronous-demo"
                sx={{ width: 300 }}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                value={props.scheda}
                onChange={(event, newValue) => {
                    let lid = newValue == null ? '' : newValue.id;
                    props.onChangeScheda(lid); 


                }}
                isOptionEqualToValue={(option, value) => option.nome === value.nome}
                getOptionLabel={(option) => option.nome}
                options={options}
                loading={loading}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Seleziona"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}
            />
        </form>
    );



}
const topFilms = [
    { nome: 'Scheda 1', id: 1 },
    { nome: 'Scheda 2', id: 2 },
    { nome: 'Scheda 3', id: 3 },
    { nome: 'Scheda 4', id: 4 },
    { nome: 'Scheda 5', id: 5 },
    { nome: 'Scheda 6', id: 6 },

];

