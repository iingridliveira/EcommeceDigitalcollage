import { useState, useEffect } from "react";
import { ProductListingArray } from "./array";
import ProductCard from "./BayBox/ProductCard";

const ProductListing = () => { 
const [Product, setProduto] = useState([]);
const getProducts = () =>{
  
  const response = ProductListingArray;
  setProduto(response);
  console.log(response)
}

 useEffect(() => {
   getProducts();
 }, []);
       
        return (
          <div className=" d-flex flex-wrap container-xxl d-md-flex  ">
            {Product.map((product, index) => {
              if (product >= 8) {
                // Quando chegar no nono produto, interrompe a renderização
                return null;
              }

              return (
                <ProductCard
                  index={index}
                  key={index}
                  category={product.category}
                  name={product.name}
                  photo={product.image}
                  price={product.price}
                  priceDiscount={product.priceDiscount}
                />
              );
            })}
          </div>
        );
}
 
export default ProductListing;