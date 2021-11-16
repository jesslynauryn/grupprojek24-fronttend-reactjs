import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousell = () => {
    return(
        <Carousel>
            {/* 1 */}
            <Carousel.Item>
            <img className="d-block w-100"
                 src="https://images.unsplash.com/photo-1636972708846-7988b903a53c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80"
                 alt="First slide"
                  />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* 2 */}
            <Carousel.Item>
            <img className="d-block w-100"
                 src="https://images.unsplash.com/photo-1636972708846-7988b903a53c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80"
                 alt="First slide" />
                <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

            {/* 3 */}
            <Carousel.Item>
            <img className="d-block w-100"
                 src="https://images.unsplash.com/photo-1636972708846-7988b903a53c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80"
                 alt="First slide" />
                <Carousel.Caption>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default Carousell;