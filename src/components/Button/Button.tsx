import React from 'react';

interface ButtonInterface {
    label:string
}

const Button = (props:ButtonInterface) => {
    return <button>{props.label}</button>
}

export default Button;