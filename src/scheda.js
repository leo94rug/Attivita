import React from 'react';
import './index.css';



function Scheda (props){
    
        return (
            <div>            
                <div>Nome : {props.value.nome}</div>
                <div>Start : {props.value.inizio}</div>
                <div>End : {props.value.fine}</div>


            </div>
        );
}
export default Scheda;