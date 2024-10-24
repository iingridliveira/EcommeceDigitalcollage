import { useContext } from "react";
import { SearchContext } from "../context";
import BuyBox from "./BayBox/BuyBox";

const SearchProducts = () => {

    const {buttonseach } = useContext(SearchContext);
   
   
   
    return (
      <>
   
         <div className=" d-flex flex-wrap container-xxl d-md-flex  ">
         

          {buttonseach.map((product) => (
            <BuyBox
                  key={product.name}
                  name={product.name}
                  photo={product.image}
                  price={product.price}
                  priceDiscount={product.priceDiscount}
                />
          ))}
        </div>
      </>
    );
}
 
export default SearchProducts;
