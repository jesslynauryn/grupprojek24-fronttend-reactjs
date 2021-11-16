import React from "react";
import { Card }from "react-bootstrap"

export default function CardCustom(props) {
    return (
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={props.data.imageUrl} /> */}
        <Card.Body>
            <Card.Title style={{textAlign: "center"}}>Card Title</Card.Title>
        </Card.Body>
        </Card>
    )
}