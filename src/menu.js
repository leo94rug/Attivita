import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './registra.js';
import MenuButton from './menu-button.js';


class Menu extends React.Component {

    
    render() {
        return (
            <div className="bordo">
                <div><MenuButton value/></div>
                <div><MenuButton /></div>
                <div><MenuButton /></div>
            </div>
        );
    }
}
export default Menu;