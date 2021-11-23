import React from 'react';
import Container from '@mui/material/Container';

import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap,
    move
} from "react-grid-dnd";

export default function AssociaEsercizio({ onChange, eserciziPerScheda, eserciziPerAttivita }) {
debugger;
    return (
        <Container maxWidth="xl">

            <GridContextProvider onChange={onChange}>
                <div className="container">

                        <GridDropZone
                            className="dropzone left"
                            id={1}
                            key={1}
                            boxesPerRow={1}
                            rowHeight={70}
                        >
                            {eserciziPerScheda.map(esercizio => (
                                <GridItem key={esercizio.id}>
                                    <div className="grid-item">
                                        <div className="grid-item-content">
                                            {esercizio.nome}
                                        </div>
                                    </div>
                                </GridItem>
                            ))}
                        </GridDropZone>
                        <GridDropZone
                            className="dropzone left"
                            id={2}
                            key={2}
                            disableDrop = {true}

                            boxesPerRow={1}
                            rowHeight={70}
                        >
                            {eserciziPerAttivita.map(esercizio => (
                                <GridItem key={esercizio.id}>
                                    <div className="grid-item">
                                        <div className="grid-item-content">
                                            {esercizio.nome}
                                        </div>
                                    </div>
                                </GridItem>
                            ))}
                        </GridDropZone>
                </div>
            </GridContextProvider>
        </Container>
    );
}