import { Link, NavLink } from "react-router-dom";
import { SearchContext } from "../../context";
import { useContext } from "react";
import Logo from "../../assets/logo.svg";
import  searchimg  from "../../assets/search-img.svg"
import carrinhoCompras from "../../assets/carrinhoCompras.svg"


const Header = () => {
  const { search, setSearch, filterProduct } =  useContext(SearchContext);
  return (
    <>
      <main className="container-xxl d-flex-collumn py-3">
        <div className="d-flex w-max-content align-items-center gap-5">
          <div className="d-flex justify-content-center align-items-center gap-3 py-4">
            <img src={Logo} />
            <h2
              style={{ color: "#C92071" }}
              className="fw-bold flex-center mt-1rem text-nowrap"
            >
              Digital Store
            </h2>
          </div>

          <div className="input-group w-50 ">
            <input
              type="text"
              className="form-control bg-body-tertiary border-0 rounded py-3"
              placeholder="Pesquisar produto..."
              aria-label="Pesquisar-Produto"
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
            />
            <Link to="/product" className="d-inline-flex">
              <button
                className="bg-body-tertiary btn btn-outline-secondary d-flex justify-content-center align-items-center border-0"
                onClick={filterProduct}
              >
                <img src={searchimg} alt="logo-img" />
              </button>
            </Link>
          </div>

          <div className="d-flex gap-4 justify-content-center align-items-center">
            <a className="text-nowrap" href="#">
              Cadastre-se
            </a>
            <button type="button" className="btn btn-primary btn-lg">
              Entrar
            </button>
          </div>
          <div>
            <img src={carrinhoCompras} alt="carrinho" />
          </div>
        </div>
        <nav>
          <ul className="nav nav-underline text-primary">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Produtos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/categorias"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Categorias
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/meus-produtos"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Meus Produtos
              </NavLink>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
 
export default Header;
