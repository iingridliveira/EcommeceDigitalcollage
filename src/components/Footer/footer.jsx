import Facebook from "../../assets/Path 22671.svg";
import Intagram from "../../assets/Group 2556.svg";
import X from "../../assets/Path 22667.svg";
import Logo from "../../assets/Vector-6.svg";
const Footer = () => {
  return (
    <>
      <div className="container-xxl  text-md-start mt-5 border-bottom border-1 border-white pb-4">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-automb-4">
            <h2 className=" fw-bold mb-4">
              <i className="fas fa-gem me-3"></i>{" "}
              <img src={Logo} /> Digital Store
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              eaque blanditiis rem iusto doloremque, tempora ipsa
            </p>
            <ul className="list-unstyled ">
              <li className="d-inline-block me-3">
                <img src={Facebook} />
              </li>
              <li className="d-inline-block me-3">
                <img src={Intagram }/>
              </li>
              <li className="d-inline-block me-3">
                <img src={X} />
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="fw-bold mb-4">Informação</h6>
            <ul className="list-unstyled">
              <li className="text-reset">Sobre Drip Store</li>
              <li>Seguraça</li>
              <li>Wishilist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className=" fw-bold mb-4">Categorias</h6>
            <ul className="list-unstyled">
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bones</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className=" fw-bold mb-4">Contatos</h6>
            <ul className="list-unstyled">
              <li>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </li>
              <li>(85) 3051-3411</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-4">@ 2022 Digital College</div>
    </>
  );
};

export default Footer;
