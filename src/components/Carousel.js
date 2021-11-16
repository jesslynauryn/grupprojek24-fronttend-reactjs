import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousell = ({content, title}) => {
    return(
        <Carousel>
             <Carousel.Item>
            {content}
                <Carousel.Caption>
                <h3>{title}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default Carousell;