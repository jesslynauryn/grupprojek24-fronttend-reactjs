import Carousell from "../components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

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

const LandingPage = () => (
  <>
    <div>
      <Carousell carouselData={dataLandingPage} />
    </div>
  </>
);





// -------------------------------------------------------------------------------------------

export default LandingPage;
