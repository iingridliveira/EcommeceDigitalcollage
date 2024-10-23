
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePage/home';
import Product from '../pages/ProductListingPage/product';


//rotas criadas pelo react-routerdom
 const Rotas = () => {
  return (
  
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product/>} />
        </Routes>
    
  
  );
}
   export default Rotas;