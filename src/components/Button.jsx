import React from "react";
import Button from 'react-bootstrap/Button';

const ButtonItem = ({buttonLink, title, style}) => {
    return (
        <Button style={style} href={buttonLink}>{title}</Button> 
    )
}

export default ButtonItem;