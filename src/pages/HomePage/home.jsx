import "bootstrap/dist/css/bootstrap.min.css";
import Section from "../../components/Section/section";
import SectionOne from "../../components/Section/SectionOne";
import SectionThree from "../../components/Section/SectionThree";
import Carousel from "../../components/Section/Carousel";
import WhiteSneakers from "../../assets/White-Sneakers-PNG-Clipart.svg";
import BlackSneakers from "../../assets/Laye 1.svg";

import ProductListing from "../../components/ProductListing/ProductListing";
import Arrow from "../../assets/Right 24px.svg";


import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>
      {/*S*/}
      <Section id={""} cor={"bg-secondary  bg-opacity-10 "}>
        <Carousel
          slideUne={
            <SectionOne
              title={
                <h1 style={{ fontSize: "80px" }} className="lh-1">
                  Queima de stoque Nike🔥
                </h1>
              }
              img={
                <img
                  src={WhiteSneakers}
                  alt="Tênis Branco"
                  style={{ Width: "100%", height: "600px" }}
                />
              }
            />
          }
          slideT={
            <SectionOne
              title={
                <h1 style={{ fontSize: "80px" }} className="lh-1">
                  O melhor é só aqui😍
                </h1>
              }
              img={
                <img
                  src={WhiteSneakers}
                  alt="Tênis Branco"
                  style={{ Width: "100%", height: "600px" }}
                />
              }
            />
          }
          slide3={
            <SectionOne
              title={
                <h1 style={{ fontSize: "80px" }} className="lh-1">
                  Tá no pé, tá na moda😎
                </h1>
              }
              img={
                <img
                  src={WhiteSneakers}
                  alt="Tênis Branco"
                  style={{ Width: "100%", height: "600px" }}
                />
              }
            />
          }
          slide4={
            <SectionOne
              title={
                <h1 style={{ fontSize: "80px" }} className="lh-1">
                  Vem que tá bombamdo 💣
                </h1>
              }
              img={
                <img
                  src={WhiteSneakers}
                  alt="Tênis Branco"
                  style={{ Width: "100%", height: "600px" }}
                />
              }
            />
          }
        />
      </Section>
      <SectionThree />
      <Section cor={"container-xxl   "}>
        <div className=" d-flex justify-content-between">
          <h4 className="fw-bold">Produtos em alta</h4>
          <div className="d-flex mx-5">
            <p className="d-inline-block me-3" style={{ color: "#C92071" }}>
              <Link className="text-decoration-none" to={"/product"}>
                {" "}
                Ver todos{" "}
              </Link>
            </p>
            <img className="d-inline-block me-3 mb-3 " src={Arrow} />
          </div>
        </div>
        <ProductListing />
      </Section>
      <Section cor={"bg-white"}>
        <main className="  container d-flex flex-column flex-md-row align-items-center justify-content-between py-5">
          {/* Div para a imagem com ordem 1 no mobile */}
          <div
            className=" order-0 ratio ratio-1x1 rounded-circle w-75  "
            style={{
              background:
                "linear-gradient(180deg, rgba(66, 0, 255, 0.25) -40.67%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <img className="" src={BlackSneakers} alt="Tênis preto" />
          </div>
          {/* Div para o texto e botão */}
          <div className="order-1 order-md-0 flex-wrap mt-3 mt-md-0 px-5 mx-5 my-5 w-100">
            <h5 style={{ color: "#F6AA1C" }}>Oferta especial</h5>
            <h1
              className=" text-black text-opacity-75 lh-1"
              style={{ fontSize: "60px" }}
            >
              Air Jordan edição de colecionador
            </h1>
            <p className="w-75" style={{ color: "#474747" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
            <button
              className=" text-white px-5 py-2  border-0 rounded fw-bold"
              style={{ background: "#C92071" }}
            >
              Ver Ofertas
            </button>
          </div>
        </main>
      </Section>
    </>
  );
};

export default Home;
