import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/splide/dist/css/splide.min.css";
import LandingPage from "./page/LandingPage";
import Wisata1 from "./page/Wisata1";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./page/welcomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/wisata1" element={<Wisata1 />} />
      </Routes>
    </div>
  );
}

export default App;
