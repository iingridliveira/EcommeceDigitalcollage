/* eslint-disable react/prop-types */
import { useState } from "react";


// Importando a imagem (certifique-se de que a variável SneakersBox está definida corretamente)

// Componente de filtro K-Swiss
const CategoryCard = ({ setSelectedCategory }) => {
  const [checkBoxValue, setCheckBoxValue] = useState({
    "Esporte e lazer": false,
    "Casual": false,
    "Utilitário": false,
    "Corrida": false,
  });

  const handleCheckboxChange = (ev) => {
    const { category, checked } = ev.target;

    setCheckBoxValue((prevState) => ({
      ...prevState,
      [category]: checked,
    }));

    // Atualiza as marcas selecionadas no pai
    setSelectedCategory((prevBrands) => {
      const newBrands = checked
        ? [...prevBrands, category] // Adiciona a marca se marcada
        : prevBrands.filter((brand) => brand !== category); // Remove a marca se desmarcada
      return newBrands;
    });
  };

  return (
    <main
      className="d-flex flex-column flex-shrink-0 p-5 bg-white  "
      style={{ width: "300px" }}
    >
      
      <h6 className="pt-2"> Categoria</h6>
      <form className="form-check">
        {Object.keys(checkBoxValue).map((brand) => (
          <div key={brand} className="d-flex py-2 ">
            <input
              className="d-inline-block  me-2 form-check-input"
              type="checkbox"
              name={brand}
              checked={checkBoxValue[brand]}
              onChange={handleCheckboxChange}
            />
            <label className=" form-check-label">{brand}</label>
          </div>
        ))}
       
      </form>
    </main>
  );
};

// Componente principal que exibe os produtos
export default CategoryCard;
