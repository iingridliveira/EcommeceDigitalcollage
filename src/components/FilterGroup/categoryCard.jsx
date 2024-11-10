/* eslint-disable react/prop-types */
import { useState } from "react";

// Componente de filtro de categorias
const CategoryCard = ({ setSelectedCategory }) => {
  const [checkBoxValue, setCheckBoxValue] = useState({
    "Esporte e lazer": false,
    "Casual": false,
    "Utilitário": false,
    "Corrida": false,
  });

  const handleCheckboxChange = (ev) => {
    const { name, checked } = ev.target;

    setCheckBoxValue((prevState) => ({
      ...prevState,
      [name]: checked,
    }));

    // Atualiza as categorias selecionadas no pai
    setSelectedCategory((prevCategories) => {
      const newCategories = checked
        ? [...prevCategories, name] // Adiciona a categoria se marcada
        : prevCategories.filter((category) => category !== name); // Remove a categoria se desmarcada
      return newCategories;
    });
  };

  return (
    <main
      className="d-flex flex-column flex-shrink-0 p-5 bg-white"
      style={{ width: "300px" }}
    >
      <h6 className="pt-2">Categoria</h6>
      <form className="form-check">
        {Object.keys(checkBoxValue).map((category) => (
          <div key={category} className="d-flex py-2">
            <input
              className="d-inline-block me-2 form-check-input"
              type="checkbox"
              name={category}
              checked={checkBoxValue[category]}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label">{category}</label>
          </div>
        ))}
      </form>
    </main>
  );
};

export default CategoryCard;
