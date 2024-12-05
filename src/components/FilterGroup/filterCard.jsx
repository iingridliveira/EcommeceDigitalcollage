/* eslint-disable react/prop-types */
import { useState } from "react";

// Importando a imagem (certifique-se de que a variável SneakersBox está definida corretamente)

// Componente de filtro K-Swiss
const FilterCard = ({ setSelectedBrands }) => {
  const [checkBoxValue, setCheckBoxValue] = useState({
    Adidas: false,
    "K-Swiss": false,
    Nike: false,
    Balenciaga: false,
    Puma: false,
  });

  const handleCheckboxChange = (ev) => {
    const { name, checked } = ev.target;

    setCheckBoxValue((prevState) => ({
      ...prevState,
      [name]: checked,
    }));

    // Atualiza as marcas selecionadas no pai
    setSelectedBrands((prevBrands) => {
      const newBrands = checked
        ? [...prevBrands, name] // Adiciona a marca se marcada
        : prevBrands.filter((brand) => brand !== name); // Remove a marca se desmarcada
      return newBrands;
    });
  };

  return (
    <main
      className="d-flex flex-column flex-shrink-0 p-5 py-2 bg-white  "
      style={{ width: "300px" }}
    >
      <div className="border-bottom border-1 mt-4 border-secondary border-opacity-50 ">
        <p>Filtrar por</p>
      </div>
      <h6 className="pt-2"> Marca</h6>
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
export default FilterCard;
