import React from 'react';
import './flatbutton.scss';

const FlatButton = ({onClick, value}) => {
    return ( 
        <div className="button effect01" onClick={onClick}> 
            <span>{value}</span>
        </div>
    );
}

export default FlatButton;