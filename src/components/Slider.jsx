import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "../styles/css/slider.css";

const Slide = ({ src }) => {
  return (
    <Splide
      options={{
        perPage: 3,
        rewind: true,
        gap: "1rem",
      }}
    >
      {src.map((data) => (
        <SplideSlide>
          <a href={data.href}>
            <img src={data.image} alt={data.alt} />
          </a>
          <h5 className="text-slider">{data.text}</h5>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slide;
