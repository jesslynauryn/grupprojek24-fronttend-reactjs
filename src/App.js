import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import Wisata from "./page/wisata";

function App() {
  return (
    <div>
      <Wisata />
      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default App;
