import React from "react";
import { Card }from "react-bootstrap"

export default function CardCustom({ src, title }) {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }