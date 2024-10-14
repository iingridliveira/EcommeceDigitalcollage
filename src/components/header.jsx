import { NavLink } from "react-router-dom";

const Header = () => {
    return ( <><header>
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
        </header></> );
}
 
export default Header;