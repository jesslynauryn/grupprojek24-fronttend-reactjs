import React from "react";
import styled from "styled-components";
import Slide from "../components/Slider";
import '../FolderCSS/Slider.css'


const dataSlider = [
    {
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-52537875/original/197e7acb-3023-408f-82d9-3963d54541c3.jpeg?im_w=1200",
      alt: "Image 1",
      text: "Umalas-area Oasis New 1BR Villa with Private Pool",
      href: "https://www.airbnb.co.id/rooms/52537875?federated_search_id=525d36dc-ae2b-4838-9816-653fb51d4012&source_impression_id=p3_1637214141_uoId0Oxr4StqRfUu",
    },
    {
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-50985387/original/716003ae-cb90-49a4-b109-7cd552977dee.jpeg?im_w=960",
      alt: "Image 2",
      text: "Brand New Villa - 1BR - Seminyak",
      href: "https://www.airbnb.co.id/rooms/50985387?federated_search_id=525d36dc-ae2b-4838-9816-653fb51d4012&source_impression_id=p3_1637214148_X47k2uQL%2FeBMlOrI",
    },
    {
      image: "https://a0.muscache.com/im/pictures/a260144b-3d63-4035-a153-e627a52ba399.jpg?im_w=960",
      alt: "Image 3",
      text: "Villa Island Seminyak",
      href: "https://www.airbnb.co.id/rooms/47037328?federated_search_id=525d36dc-ae2b-4838-9816-653fb51d4012&source_impression_id=p3_1637214164_zXtFZcQfYJTfzLjH",
    },
    {
      image: "https://a0.muscache.com/im/pictures/b7407b97-82e0-4caa-992a-f28a31333e2f.jpg?im_w=960",
      alt: "Image 4",
      text: "Villa LaDonna",
      href: "https://www.airbnb.co.id/rooms/48022603?federated_search_id=525d36dc-ae2b-4838-9816-653fb51d4012&source_impression_id=p3_1637213907_WmGyAGlKNyM2mYwM",
    },
    {
      image: "https://a0.muscache.com/im/pictures/4dd98184-a61b-4f78-903c-f7aebae3361b.jpg?im_w=960",
      alt: "Image 5",
      text: "Amazing Luxury Villa - 2BR - Seminyak",
      href: "https://www.airbnb.co.id/rooms/28712924?federated_search_id=525d36dc-ae2b-4838-9816-653fb51d4012&source_impression_id=p3_1637214118_onnS3MCLfLGPx59U",
    },
  ];
  

 const Slider = () => (
     <>
     <div className="foto-slider">
         <Slide src={dataSlider}/>
     </div>
    
     </>
 )

export default Slider;