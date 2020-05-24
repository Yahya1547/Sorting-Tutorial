import React from 'react';
import './gradientbutton.css';

const GradientButton = ({value, onClick, type}) => {
    const className = "btn-hover color-" + type;
    return ( 
        <button className={className} onClick={onClick} >{value}</button>
    );
}

export default GradientButton;