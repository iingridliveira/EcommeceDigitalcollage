import { NavLink } from "react-router-dom";
import { SearchContext } from "../context";
import { useContext } from "react";
import  searchimg  from "../assets/search-img.svg"
import carrinhoCompras from "../assets/carrinhoCompras.svg"


const Header = () => {
  const { search, setSearch, filterProduct } =  useContext(SearchContext);
  return (
    <>
      <main className="container d-flex-collumn py-3">
        <div className="d-flex w-max-content align-items-center gap-5">
          <div className="d-flex justify-content-center align-items-center gap-3 py-4">
            <img src="src/assets/logo.svg" />
            <h2
              style={{ color: "#C92071" }}
              className="fw-bold flex-center mt-1rem text-nowrap"
            >
              Digital Store
            </h2>
          </div>

          <div className="input-group">
            <input
              type="text"
              className="form-control bg-body-tertiary border-0 "
              placeholder="Pesquisar produto..."
              aria-label="Pesquisar-Produto"
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
            />
              <button className="bg-white d-flex justify-content-center align-items-center border-0" onClick={filterProduct}><img src={searchimg} alt="logo-img" /></button>
              
          </div>

          <div className="d-flex gap-4 justify-content-center align-items-center">
            <a className="color-red text-nowrap" href="#">
              Cadastre-se
            </a>
            <button type="button" class="btn btn-primary btn-lg">Entrar</button>
          </div>
          <div>
            <img src={carrinhoCompras} alt="carrinho" /></div>           

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
                to="/produtos"
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
