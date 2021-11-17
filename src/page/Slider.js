import React from "react";
import styled from "styled-components";
import Slide from "../components/Slider";
import '../FolderCSS/Slider.css'


const dataSlider = [
    {
        image:"https://images.unsplash.com/photo-1595319101337-601371f02e1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
        alt:"Image 1",
        text: "Nusa Penida"
    },
    {
        image:"https://images.unsplash.com/photo-1444194563460-454833ba6005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80", 
        alt:"Image 2",
        text: "Ubud",
    },
    {
        image:"https://images.unsplash.com/photo-1538172522459-61e5aede6d06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80", 
        alt:"Image 3",
        text: "Kuta"
    },
    {
        image:"https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80", 
        alt:"Pura Uluwatu",
        text: "Pura Uluwatu",
    },
    {
        image:"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_klook_water/activities/dw5mamvpyhc4jp0xohoc/Vue%20Beach%20Club%20Day%20Pass%20di%20Canggu.jpg",
        alt:"Image 5",
        text: "Vue Beach Club, Canggu",
    }
];

 const Slider = () => (
     <>
     <div className="foto-slider">
         <Slide src={dataSlider}/>
     </div>
    
     </>
 )

export default Slider;