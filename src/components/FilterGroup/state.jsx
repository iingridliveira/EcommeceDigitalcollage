/* eslint-disable react/prop-types */
import { useState } from "react";

//Componente de estado do produto
const StateCard = ({setSelectedState}) => {
    const [ checkBoxValue, setCheckBoxValue] = useState ({
        Novo: false,
        Usado: false,
    });


const handleCheckboxChange = (ev) => {
    const { name, checked } = ev.target;

    setCheckBoxValue((prevState) => ({
        ...prevState,
        [name]: checked,
    }));

    console.log(name)

    // Atualiza o estado selecionado no componete pai

    setSelectedState((prevState) => {
        const newStates = checked
        ? [...prevState, name] //Adiciona o estado se marcado
        : prevState.filter((state) => state !== name); // Remove o estado desmarcado
        return newStates;
    });
};

return (
    <main
      className="d-flex flex-column flex-shrink-0 p-5 py-2 bg-white"
      style={{ width: "300px" }}
    >
      <h6 className="pt-2">Estado</h6>
      <form className="form-check">
        {Object.keys(checkBoxValue).map((state) => (
            <div key={state} className="d-flex py-2">
                <input
                    className="d-inline-block me-2 form-check-input"
                    type="checkbox"
                    name={state}
                    checked={checkBoxValue[state]}
                    onChange={handleCheckboxChange}/>
                <label className="form-check-label">{state}</label>
            </div>
        ))}
      </form>
    </main>
);
};

export default StateCard;
