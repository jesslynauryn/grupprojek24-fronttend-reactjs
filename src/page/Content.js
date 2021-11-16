import React from "react";
import {Container, Row, Col, Image, Card} from 'react-bootstrap'
import '../FolderCSS/Content.css'

function Content () {
    return (
        <Container>
                <br/>
                <h2>ABOUT BALI</h2><br/><br/>
                <Row>
                    <Col lg={3} md={6}>
                        <Image src="https://images.unsplash.com/photo-1587542513982-535059868fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80" fluid className="jarak" />
                        <Image src="https://images.unsplash.com/photo-1587542513982-535059868fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80" fluid className="jarak" />
                    </Col>
                    <Col lg={3} md={6}>
                        <Image src="https://images.unsplash.com/photo-1587542513982-535059868fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80" fluid className="jarak"/>
                        <Image src="https://images.unsplash.com/photo-1587542513982-535059868fad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1935&q=80" fluid className="jarak" />

                    </Col>
                    <Col lg={6} sm={12}>
                        <Card className="card">
                            <p>Bali Island is a small beautiful island and a part of Indonesia archipelago, and the most famous of Indonesian tourism in the world. Bali Island has many places of interest such as rice paddies, beautiful panorama, volcanoes, tourism activities as well as attractions. Also, it also has beautiful jungle, long sandy beaches, warm blue water, crashing surf and friendly people. </p>
                        </Card>
                    </Col>
                </Row>
                <br/><br/><br/>
            </Container>
    )
}

export default Content;