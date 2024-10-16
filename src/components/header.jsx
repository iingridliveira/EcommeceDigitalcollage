import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
    <>
    <div>
        <img src="src/assets/logo.svg"/>
        <h2 style={{color: "#C92071"}} className="fw-bold mb-4">Digital Store</h2>
    </div>

        <form action="">
            <input type="search" name="search" id="search-home" placeholder="Pesquisar produto..."  />

            <button type="buscar"></button>

        </form>
        <div>
            <a href="">Cadastre-se</a>
            <button type="submit">Entrar</button>
        </div>
        
        <nav>
            <ul>
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                    
                <NavLink to="/Product">
                    <li>Produtos</li>
                </NavLink>

                <NavLink to="/C">
                    <li>Categorias</li>
                </NavLink>

                <NavLink to="/M">
                    <li>Meus Produtos</li>
                </NavLink>
            </ul>
        </nav>
        </> );
}
 
export default Header;