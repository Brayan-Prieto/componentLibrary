import React from 'react';
import './Button.css';

interface ButtonInterface {
    label:string
}

const Button = (props:ButtonInterface) => {
    return <button>{props.label}</button>
}

export default Button;