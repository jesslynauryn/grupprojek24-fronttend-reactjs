import React from "react";
import Carousell from "./components/Carousel";
import ButtonItem from "./components/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./components/Navbar";
import CardCustom from "./components/Card";
import ScrollToTop from "./components/ScrollToTop";
// import Slide from "./components/Slider";
// import "@splidejs/splide/dist/css/splide.min.css";


function App() {
  return (
    <div>
      <NaviBar></NaviBar>
      <Carousell></Carousell>
      <Carousell></Carousell>
      <Carousell></Carousell>
      <Carousell></Carousell>
      <ButtonItem></ButtonItem>
      <CardCustom></CardCustom>
      <ScrollToTop></ScrollToTop>
      {/* <Slide /> */}
    </div>
  );
}

export default App;
