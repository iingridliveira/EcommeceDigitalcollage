import { useState, useEffect } from "react";
import { ProductListingArray } from "./array";
import BuyBox from "./BayBox/BuyBox";

const Search = () => {

   const [search, setSearch]= useState('')
   const [ buttonseach, setButtonseach] = useState([])

   const filterProduct = ()=>{

    const response = ProductListingArray;
    const lowerSearch = search.toLowerCase();
    //setSearch(response);
    const  button = response.filter((product)=>product.name.toLowerCase().includes( lowerSearch ));
     setButtonseach( button)

   }
   useEffect(() => {
      filterProduct()
   }, [ ]);
    return (
      <>
      
        <input type="text" value={search} onChange={(ev)=>setSearch(ev.target.value)}/>
        <button onClick={filterProduct}>aaaa</button>

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
 
export default Search;
