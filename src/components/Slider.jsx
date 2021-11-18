import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from "react-router-dom";

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
            <Link to={data.link}>
            <img src={data.image}  alt={data.alt}/>
            </Link>
            <h5 className="text-slider">{data.text}</h5>
          </SplideSlide>
        ))}
      </Splide>


    /* {src.map((data) => (
      <SplideSlide>
      <div>
        <a>
          <img src={data.image}  alt={data.alt}/>
          <p>{data.text}</p>
        </a>
      </div>
      </SplideSlide>
    ))}
    </Splide> */


    );
  };

export default Slide;