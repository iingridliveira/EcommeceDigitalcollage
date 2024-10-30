import { useState } from "react";

const FilterCard = () => {
    
    const [checkBoxvalue, setcheckBoxvalue]=useState(
        {
            option01: false,
             option02: false,
              option03: false,
               option04: false,
                option05: false
        }
    )
    const handlecheckbox =(ev)=>{
      const {name, checked}= ev.target
      setcheckBoxvalue({
          option01: name === "option01"? checked :checkBoxvalue.option01,
          option02: name === "option02"? checked :checkBoxvalue.option02,
          option03: name === "option03"? checked :checkBoxvalue.option03,
          option04: name === "option04"? checked :checkBoxvalue.option04,
          option05: name === "option05"? checked :checkBoxvalue.option05
      });
    }
    
    return (
      <>
        <form>
          <input
            type="checkbox"
            name="option01"
            checked={checkBoxvalue.option01}
            onChange={handlecheckbox}
          />
          <input
            type="checkbox"
            name="option02"
            checked={checkBoxvalue.option02}
            onChange={handlecheckbox}
          />
          <input
            type="checkbox"
            name="option03"
            checked={checkBoxvalue.option03}
            onChange={handlecheckbox}
          />
          <input
            type="checkbox"
            name="option04"
            checked={checkBoxvalue.option04}
            onChange={handlecheckbox}
          />
          <input
            type="checkbox"
            name="option05"
            checked={checkBoxvalue.option05}
            onChange={handlecheckbox}
          />
        </form>
      </>
    );
}
 
export default FilterCard;