import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import { ImageSmall, ImageLarge, Div, H4, H5, FlexContainer, P, Margin } from "../styles/styledComponents";
import ButtonItem from "../components/Button";
import CardCustom from "../components/Card";
import Coment from "../components/Coment";
import Testimonial from "../components/Testimonial";
import Slide from "../components/Slider";

export default function Wisata1() {
  const highlights = [
    {
      src: "https://images.unsplash.com/photo-1486655643111-5a1741acd481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80",
      title: "Snorkeling",
    },
    {
      src: "https://i.postimg.cc/PrbkTMv8/gambar.png",
      title: "Surfing",
    },
    {
      src: "https://makeuptutorials.com/wp-content/uploads/2020/05/woman-on-beach-sunbathing-tanning-oil-canva-featured-1200x720.jpg",
      title: "Sunbathing",
    },
  ];

  const buttonWisata = {
    href: "https://www.traveloka.com/id-id/kereta-api/search?st=PSE.ML&dt=22-10-2021.null&ps=2.0&pd=KAI",
    title: "Pesan Sekarang",
  };

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

  return (
    <>
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col md={3}>
            <div>
              <ImageSmall src="https://raw.githubusercontent.com/jesslynauryn/group-project-24/master/images/images-nusa-5.jpg" />
              <ImageSmall src="https://raw.githubusercontent.com/jesslynauryn/group-project-24/master/images/images-nusa-4.jpg" />
              <ImageSmall src="https://raw.githubusercontent.com/jesslynauryn/group-project-24/master/images/images-nusa-6.jpg" />
            </div>
          </Col>
          <Col md={4}>
            <Div>
              <ImageLarge src="https://raw.githubusercontent.com/jesslynauryn/group-project-24/master/images/images-nusa-3.jpg" />
            </Div>
          </Col>
          <Col md={5}>
            <Div>
              <H4>KUTA</H4>
              <H5 className="">“The best places Bali’s famous sunsets”</H5>
              <P>
                Itulah julukan dari Kuta. Kuta menjadi salah satu destinasi wisata favorit menjadi jantungnya pariwisata di Pulau Bali. Pantai Kuta menjadi lokasi yang pas untuk menikmati panorama matahari terbenam yang begitu indah di
                Pulau Bali. <br />
                <br />
                Selain itu, kebersihan Pantai Kuta juga sangat terjaga, sehingga banyak wisatawan yang merasa betah dan selalu ingin berlama-lama saat berada di pantai ini. kalian juga bisa berjemur dan berselancar.
              </P>
              <P style={{ fontWeight: "600" }}>
                Kunjungi Nusa Penida dengan{" "}
                <span style={{ color: "blue" }}>
                  <i>Traveloka!</i>
                </span>
              </P>
              <Margin>
                <ButtonItem buttonLink={buttonWisata.href} title={buttonWisata.title} />
              </Margin>
            </Div>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginBottom: "100px", marginTop: "-60px" }}>
        <h3 style={{ textAlign: "center", marginBottom: "50px", fontWeight: "600" }}>HIGHLIGHTS</h3>
        <FlexContainer>
          {highlights.map((data) => {
            return <CardCustom src={data.src} title={data.title} />;
          })}
        </FlexContainer>
      </Container>

      <h3 style={{ textAlign: "center", fontWeight: "600" }}>Rekomendasi Penginapan</h3>
      <div className="foto-slider" style={{ marginTop: "-10px" }}>
        <Slide src={dataSlider} />
      </div>

      <Testimonial />

      <Container>
        <Row>
          <Coment />
        </Row>
      </Container>
    </>
  );
}
