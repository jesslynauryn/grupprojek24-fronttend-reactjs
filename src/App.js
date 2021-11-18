import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./components/Navbar";
import CardCustom from "./components/Card";
import ScrollToTop from "./components/ScrollToTop";
import "@splidejs/splide/dist/css/splide.min.css";
import LandingPage from "./page/LandingPage"
import Gallery from "./page/Gallery";
import Slider from "./components/Slider";
import Content from "./page/Content";
import Wisata1 from "./page/Wisata1";
import Comment from "./components/Comment";

import { Routes, Route, Link } from 'react-router-dom';
import Kuliner from "./page/kuliner"
import WelcomePage from "./page/welcomePage";



function App() {
  return (
  
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<LandingPage />}/>
        <Route path="/wisata1" element={<Wisata1/>}/> 
      </Routes>
     
    </div>
   
  );
}

export default App;


