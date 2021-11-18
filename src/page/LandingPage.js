import Carousell from "../components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "../components/Content";
import Gallery from "../components/Gallery";
import Slider from "./Slider";
import ButtonItem from "../components/Button";
// import "../FolderCSS/Button.css";

// Landing Page

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
