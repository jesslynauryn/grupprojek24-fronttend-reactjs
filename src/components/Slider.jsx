import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import "../FolderCSS/Slider.css";


const Slide = ({src}) => {
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
            <img src={data.image}  alt={data.alt} className="img"/>
          </SplideSlide>
        ))}
      </Splide>
    );
  };

export default Slide;