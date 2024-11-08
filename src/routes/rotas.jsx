
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePage/home';
import Product from '../pages/ProductListingPage/product';
import ProductcView from '../pages/ProductViewPage';


//rotas criadas pelo react-routerdom
 const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path='/product/:id' element ={<ProductcView/>}/>

    </Routes>
  );
}
   export default Rotas;