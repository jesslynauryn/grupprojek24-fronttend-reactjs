import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./components/Navbar";
import CardCustom from "./components/Card";
import ScrollToTop from "./components/ScrollToTop";
// import Slide from "./components/Slider";
import "@splidejs/splide/dist/css/splide.min.css";
import LandingPage from "./page/LandingPage"
import Gallery from "./page/Gallery";
import Slider from "./page/Slider";
import Content from "./page/Content";
import Wisata1 from "./page/Wisata1";

function App() {
  return (
    <div>
      <NaviBar></NaviBar>
      <LandingPage></LandingPage>
      <Gallery></Gallery>
      <Slider></Slider>
      <Content></Content>

      {/* -------------------page wisata-1--------------------------------------------- */}
      {/* <Wisata1 /> */}
    </div>
  );
}

export default App;
