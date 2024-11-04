/* eslint-disable react/prop-types */
import { useState } from "react";


// Importando a imagem (certifique-se de que a variável SneakersBox está definida corretamente)

// Componente de filtro K-Swiss
const GenderCard = ({ setSelectedGender }) => {
  const [checkBoxValue, setCheckBoxValue] = useState({
    "Masculino": false,
    "Feminino": false,
    "Unisex": false,
  });

  const handleCheckboxChange = (ev) => {
    const { gender, checked } = ev.target;

    setCheckBoxValue((prevState) => ({
      ...prevState,
      [gender]: checked,
    }));

    // Atualiza as marcas selecionadas no pai
    setSelectedGender((prevBrands) => {
      const newBrands = checked
        ? [...prevBrands, gender] // Adiciona o gênero se marcado
        : prevBrands.filter((brand) => brand !== gender); // Remove o gênero se desmarcado
      return newBrands;
    });
  };

  return (
    <main
      className="d-flex flex-column flex-shrink-0 p-5 bg-white  "
      style={{ width: "300px" }}
    >
      
      <h6 className="pt-2"> Gênero</h6>
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
export default GenderCard;
