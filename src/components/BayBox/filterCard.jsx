import { useState } from "react";

const FilterCard = () => {
  const [checkBoxvalue, setcheckBoxvalue] = useState({
    Adiddas: false,
    KSwiss: false,
    Nike: false,
    Calenciaga: false,
    Puma: false,
  });
  const handlecheckbox = (ev) => {
    const { name, checked } = ev.target;
    setcheckBoxvalue((prevBrands) => {
      const newBrands = checked
        ? [...prevBrands, name] // Adiciona a marca se marcada
        : prevBrands.filter((brand) => brand !== name); // Remove a marca se desmarcada
      return newBrands;
    });
  };
  return (
    <>
      <main className="d-flex flex-column flex-shrink-0 p-5 bg-white  " style={{width:"300px"}}>
        <div className="border-bottom border-1 border-secondary border-opacity-50 ">
          <p>Filtrar por</p>
        </div>
        <h6 className="pt-2"> Marca</h6>
        <form className="form-check">
          {Object.keys(checkBoxvalue).map((brand) => (
            <div key={brand} className="d-flex py-2 ">
              <input
                className="d-inline-block  me-2 form-check-input"
                type="checkbox"
                name={brand}
                checked={checkBoxvalue[brand]}
                onChange={handlecheckbox}
              />
              <label className=" form-check-label">{brand}</label>
            </div>
          ))}
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio1"
              name="optradio"
              value="option1"
              checked
            />
            Option 1<label className="form-check-label"></label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="radio2"
              name="optradio"
              value="option2"
            />
            Option 2<label className="form-check-label"></label>
          </div>
        </form>
      </main>
    </>
  );
};

export default FilterCard;
