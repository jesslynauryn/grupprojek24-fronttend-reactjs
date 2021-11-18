import Carousell from "../components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "../components/Navbar";
import Slide from "../components/Slider";
import "../FolderCSS/Slider.css"
import Content from "../components/Content";
import Gallery from "../components/Gallery";
import Slider from "./Slider";
import ButtonItem from "../components/Button";

// Landing Page
const dataSlider = [
  {
      image:"https://images.unsplash.com/photo-1595319101337-601371f02e1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80",
      alt:"Image 1",
      text: "Nusa Penida",
      link: "/wisata1"
  },
  {
      image:"https://images.unsplash.com/photo-1444194563460-454833ba6005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80", 
      alt:"Image 2",
      text: "Ubud",
      link: "/wisata1"
  },
  {
      image:"https://images.unsplash.com/photo-1538172522459-61e5aede6d06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80", 
      alt:"Image 3",
      text: "Kuta",
      link: "/wisata1"
  },
  {
      image:"https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80", 
      alt:"Pura Uluwatu",
      text: "Pura Uluwatu",
      link: "/wisata1"
  },
  {
      image:"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_klook_water/activities/dw5mamvpyhc4jp0xohoc/Vue%20Beach%20Club%20Day%20Pass%20di%20Canggu.jpg",
      alt:"Image 5",
      text: "Vue Beach Club, Canggu",
      link: "/wisata1"
  }
];

const dataLandingPage = [
  {
    content: (
      <>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1555433258-d095529cd481?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
          alt="Nusapenida"
        />
      </>
    ),
    title: "Nusa Penida"
  },
  {
    content: (
      <>
       <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1555433258-d095529cd481?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80"
          alt="Nusapenida"
        />
      </>
    ),
    title: ""
  }
];

const buttonWisata = {
  href: "https://www.traveloka.com/id-id/kereta-api/search?st=PSE.ML&dt=22-10-2021.null&ps=2.0&pd=KAI",
  title: "Pesan Sekarang",
};


const LandingPage = () => (
  <>
    <div>
      <NaviBar />
      <Carousell carouselData={dataLandingPage} />
      <div className="foto-slider">
      <Slide src={dataSlider} />
      </div>

      <Carousell carouselData={dataLandingPage}/>
      <ButtonItem style={{position:"absolute", top:"95%", left:"45%"}} buttonLink={buttonWisata.href} title={buttonWisata.title} />
     </div>
    <div>
      <Content></Content>
      <Slider></Slider>
      <Gallery></Gallery>
    </div>
  </>
);





// -------------------------------------------------------------------------------------------

export default LandingPage;
