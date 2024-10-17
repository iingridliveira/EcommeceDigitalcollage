import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
    <>
    
    <div className="d-flex w-max-content align-items-center gap-3">
        <div className="d-flex w-25 justify-content-center align-items-center bg-black gap-3">
            <img src="src/assets/logo.svg"/>
            <h2 style={{color: "#C92071"}} className="fw-bold flex-center mt-1rem">Digital Store</h2>
        </div>
            <form action="">
                <input type="search" name="search" id="search-home" placeholder="Pesquisar produto..."  />
                <button type="buscar"></button>
            </form>
        <div>
            <a href="">Cadastre-se</a>
            <button type="submit">Entrar</button>
        </div>
    </div>
    
        <nav>
            <ul className="nav nav-underline text-primary">
                <NavLink>
                    <li className="nav-item">
                        <a className="nav-link text-decoration-none" aria-current="page" href="#">Home</a>
                    </li>
                </NavLink>
                 <NavLink>
                     <li class="nav-item">
                       <a class="nav-link" href="#">Produtos</a>
                     </li>
                 </NavLink>
                 <NavLink>
                     <li class="nav-item">
                       <a class="nav-link" href="#">Categorias</a>
                     </li>
                 </NavLink>
                 <NavLink>
                     <li class="nav-item">
                       <a class="nav-link" href="#">Meus Produtos</a>
                     </li>
                 </NavLink>
            </ul>
        </nav>
        </> );
}
 
export default Header;