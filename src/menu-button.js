import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

import './index.css';

class MenuButton extends React.Component {
    render() {
      return (

          <div className="bordo">
            <button onClick={() => this.props.onClick()}>{this.props.buttonName}</button>
          </div>
      );
    }
  }
  export default MenuButton;