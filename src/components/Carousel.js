import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Carousell = ({ carouselData }) => {
  console.log(carouselData)
  return (
    <Carousel>
      {carouselData.map((data) => (
          <Carousel.Item>
          {data.content}
          <Carousel.Caption>
            <h3>{data.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carousell;
