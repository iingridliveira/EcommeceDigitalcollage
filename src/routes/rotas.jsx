
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Product from '../pages/product';

//rotas criadas pelo react-routerdom
 const Rotas = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/product' element= {<Product/>}/>

    </Routes>
    </BrowserRouter>

  )
}
   export default Rotas;