import Section from "./section";
import BlackSneakers from "../../assets/Laye 1.svg";
const SectionFour = () => {
    return (
      <>
      
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
                className=" text-black text-opacity-75"
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
}
 
export default SectionFour;