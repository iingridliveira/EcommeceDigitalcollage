import { createContext, useState, useEffect } from "react";
import { ProductListingArray } from "../components/array";

 export const SearchContext = createContext()

// eslint-disable-next-line react/prop-types
const SearchProvider = ({children}) => {
   const [search, setSearch]= useState('');
   const [ buttonseach, setButtonseach] = useState([])


    const filterProduct = () => {
      const response = ProductListingArray;
      const lowerSearch = search.toLowerCase();
      //setSearch(response);
      const button = response.filter((product) =>
        product.name.toLowerCase().includes(lowerSearch)
      );
      setButtonseach(button);
    };

    useEffect(() => {
      filterProduct();
    }, [ ]);

    return ( 
  <SearchContext.Provider value={{ search, setSearch, buttonseach, setButtonseach , filterProduct}}>
      {children}
    </SearchContext.Provider>);
}
 
export default SearchProvider;
