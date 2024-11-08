import Section from "./section";

import orangeBoll from "../assets/Ornament 11.svg";
// eslint-disable-next-line react/prop-types
const SectionOne = ({ title, img }) => {
  return (
    <>
      <Section id={""} cor={""}>
        <main className="   d-flex flex-column flex-md-row align-items-center justify-content-between ">
          {/* Div para o texto e botão */}
          {/* Div para o texto e botão */}
          <div className="order-1 order-md-0 flex-wrap mt-3 mt-md-0   ">
            <h5 style={{ color: "#F6AA1C" }}>
              Melhores ofertas personalizadas
            </h5>
            {title}
            <p style={{ color: "#474747", fontSize: "18px" }}>
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button
              className="px-5 py-2 mt-5 text-white border-0 rounded fw-bold"
              style={{ background: "#C92071" }}
            >
              Ver Ofertas
            </button>
          </div>
          {/* Div para a imagem com ordem 1 no mobile */}
          <div
            className="order-0 ml-0 w-100 mt-5 "
            style={{ margin: "-110px" }}
          >
            {img}
          </div>
          <img className=" order-0 ml-0" src={orangeBoll} />
        </main>
        <div className="m-5"></div>
      </Section>
    </>
  );
};

export default SectionOne;
