import React from "react";
import { Card }from "react-bootstrap"

const CardCustom = ({imageUrl, title}) => {
    return (
        <Card>
            <Card.Img src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CardCustom;