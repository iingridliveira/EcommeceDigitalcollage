
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <section>
        <main className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* Div para o texto e botão */}
          <div className="order-1 order-md-0 flex-wrap mt-3 mt-md-0 px-5 px-5 mx-5 my-5 ">
            <h5 style={{ color: "#F6AA1C" }}>
              Melhores ofertas personalizadas
            </h5>
            <h1 style={{ fontSize: "65px" }} className="fw-bolder">
              Queima de estoque Nike 🔥
            </h1>
            <p style={{ color: "#474747" }}>
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button
              className="px-5 py-2  border-0 rounded fw-bold"
              style={{ background: "#C92071" }}
            >
              Ver Ofertas
            </button>
          </div>
          {/* Div para a imagem com ordem 1 no mobile */}
          <div className="order-0 ml-0 " style={{ margin: "-110px" }}>
            <img
              src={"./../public/img/White-Sneakers.png"}
              alt="Tênis Branco"
              style={{ Width: "100%", height: "600px" }}
            />
          </div>
        </main>
      </section>
      <section className="my-5">
        <main className="d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* Div para a imagem com ordem 1 no mobile */}
          <div
            className="order-0 rounded-circle  py-5"
            style={{
              background:
                "linear-gradient(180deg, rgba(66, 0, 255, 0.25) -40.67%, rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <img src="../public/img/Laye 1.png" alt="Tênis Branco" />
          </div>
          {/* Div para o texto e botão */}
          <div className="order-1 order-md-0 flex-wrap mt-3 mt-md-0 px-5 mx-5 my-5">
            <h5 style={{ color: "#F6AA1C" }}>Oferta especial</h5>
            <h1 className="fw-bold">Air Jordan edição de colecionador</h1>
            <p style={{ color: "#474747" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              facere dolores asperiores illo magni. Tenetur, commodi eligendi
              aperiam nemo voluptatem impedit.
            </p>
            <button
              className="px-5 py-2  border-0 rounded fw-bold"
              style={{ background: "#C92071" }}
            >
              Ver Ofertas
            </button>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
