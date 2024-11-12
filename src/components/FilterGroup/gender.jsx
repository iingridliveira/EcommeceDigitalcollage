/* eslint-disable react/prop-types */
import { useState } from "react";

// Componente de filtro de gênero
const GenderCard = ({ setSelectedGender }) => {
  const [checkBoxValue, setCheckBoxValue] = useState({
    Masculino: false,
    Feminino: false,
    Unisex: false,
  });

  const handleCheckboxChange = (ev) => {
    const { name, checked } = ev.target;

    setCheckBoxValue((prevState) => ({
      ...prevState,
      [name]: checked,
    }));

    // Atualiza os gêneros selecionados no componente pai
    setSelectedGender((prevGenders) => {
      const newGenders = checked
        ? [...prevGenders, name] // Adiciona o gênero se marcado
        : prevGenders.filter((gender) => gender !== name); // Remove o gênero se desmarcado
      return newGenders;
    });
  };

  return (
    <main
      className="d-flex flex-column flex-shrink-0 p-5 py-2 bg-white"
      style={{ width: "300px" }}
    >
      <h6 className="pt-2">Gênero</h6>
      <form className="form-check">
        {Object.keys(checkBoxValue).map((gender) => (
          <div key={gender} className="d-flex py-2">
            <input
              className="d-inline-block me-2 form-check-input"
              type="checkbox"
              name={gender}
              checked={checkBoxValue[gender]}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label">{gender}</label>
          </div>
        ))}
      </form>
    </main>
  );
};

export default GenderCard;
