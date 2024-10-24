import { useState, useEffect } from "react";
import BuyBox from "./BayBox/BuyBox";
import { ProductListingArray } from "./array";

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
            {Product.map((item, index) => {
              if (index >= 8) {
                // Quando chegar no nono produto, interrompe a renderização
                return null;
              }

              return (
                <BuyBox
                  key={item.index}
                  name={item.name}
                  photo={item.image}
                  price={item.price}
                  priceDiscount={item.priceDiscount}
                />
              );
            })}
          </div>
        );
}
 
export default ProductListing;