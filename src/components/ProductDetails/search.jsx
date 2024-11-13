import { useContext, useState } from "react";
import { SearchContext } from "../../context";
import FilterCard from "../FilterGroup/filterCard";
import ProductCard from "../ProductCard/ProductCard";
import CategoryCard from "../FilterGroup/categoryCard";
import GenderCard from "../FilterGroup/gender";
import StateCard from "../FilterGroup/state";

const SearchProducts = () => {
  const { buttonseach } = useContext(SearchContext); // Dados do contexto
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  // Filtra os produtos de acordo com os filtros selecionados
  const filteredProducts = buttonseach.filter(
    (product) =>
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
      (selectedCategory.length === 0 ||
        selectedCategory.includes(product.category)) &&
      (selectedGender.length === 0 || selectedGender.includes(product.gender)) &&
      (selectedState.length === 0 || selectedState.includes(product.state))
  );

  return (
    <>
      <div className="d-flex flex-nowrap h-100 overflow-auto overflow-y-hidden">
        <div>
          {/* Componentes de filtros */}
          <FilterCard setSelectedBrands={setSelectedBrands} />
          <CategoryCard setSelectedCategory={setSelectedCategory} />
          <GenderCard setSelectedGender={setSelectedGender} />
          <StateCard setSelectedState={setSelectedState} />
        </div>
        <div className="d-flex flex-wrap container-xxl d-md-flex">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id || index} // Use um identificador único se disponível
              index={index}
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
