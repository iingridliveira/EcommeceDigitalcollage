
import "bootstrap/dist/css/bootstrap.min.css";
import Section from "../../components/section";
import WhiteSneakers from "../../assets/White-Sneakers-PNG-Clipart.svg";
import BlackSneakers from "../../assets/Laye 1.svg";
import SectionThree from "../../components/SectionThree";
import ProductListing from "../../components/ProductListing";
import Arrow from "../../assets/Right 24px.svg";
import Carousel from "../../components/Carousel";
import SectionOne from "../../components/SectionOne";


const Home = () => {
  return (
    <>
      <Section id={""} cor={"bg-secondary  bg-opacity-10 "}>
        <Carousel
          slideUne={
            <SectionOne
              title={
                <h1 style={{ fontSize: "80px" }} className="">
                  Queima de estoque Nike🔥
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
                <h1 style={{ fontSize: "80px" }} className="">
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
                <h1 style={{ fontSize: "80px" }} className="">
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
                <h1 style={{ fontSize: "80px" }} className="">
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
      <Section cor={"container-xxl"}>
        <div className=" container d-flex justify-content-between ">
          <h4 className="bold-text">Produtos em alta</h4>
          <div className="d-flex mx-5">
            <p className="d-inline-block me-3" style={{ color: "#C92071" }}>
              Ver todos{" "}
            </p>
            <img className="d-inline-block me-3 mb-3 " src={Arrow} />
          </div>
        </div>
        <ProductListing />
      </Section>
      <Section cor={"bg-white"}>
        <main className="  container d-flex flex-column flex-md-row align-items-center justify-content-between ">
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
              className=" text-dark text-opacity-75"
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
