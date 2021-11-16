import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";


const Slide = () => {
    return (
      <Splide
        options={{
          perPage: 3,
          rewind: true,
          gap: "1rem"
        }}
      >
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1523429936910-42ccc0e35bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1523429936910-42ccc0e35bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="Image 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1523429936910-42ccc0e35bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="Image 3"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1523429936910-42ccc0e35bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="Image 8"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1523429936910-42ccc0e35bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="Image 8"
          />
        </SplideSlide>
      </Splide>
    );
  };

export default Slide;