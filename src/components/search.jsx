import { useContext, useState, useEffect} from "react";
import { SearchContext } from "../context";
import FilterCard from "./BayBox/filterCard";
import ProductCard from "./BayBox/ProductCard";
import CategoryCard from "./BayBox/categoryCard";
import GenderCard from "./BayBox/gender";

const SearchProducts = () => {
  const { buttonseach } = useContext(SearchContext); // Dados do contexto
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectCategory, setSelectedCategory] = useState([]);
  const [selectGender, setSelectedGender] = useState([]);
 
  // Filtra os produtos de acordo com as marcas selecionadas
  const filteredProducts = buttonseach.filter(
    (product) =>
      selectedBrands.length === 0 || // Exibe todos se nenhuma marca estiver selecionada
      selectedBrands.includes(product.name.split(" ")[0]) || // Filtra pela primeira palavra do nome
      selectCategory.includes(product.category) ||
      selectGender.includes(product.gender)
    );
    console.log(filteredProducts)
   useEffect(() => {
     filteredProducts
   }, []);
  return (
    <>
      <div className="d-flex flex-nowrap h-100 overflow-auto overflow-y-hidden">
        <div>
          <FilterCard setSelectedBrands={setSelectedBrands} />{" "}
          <CategoryCard setSelectedCategory={setSelectedCategory} />
          <GenderCard setSelectedGender={setSelectedGender} />

          {/* Componente para selecionar marcas */}
        </div>
        <div className="d-flex flex-wrap container-xxl d-md-flex">
          {filteredProducts.map((product, index) => (
            <ProductCard
             index={index}
              key={index}
              name={product.name}
              photo={product.image}
              price={product.price}
              priceDiscount={product.priceDiscount}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchProducts;
