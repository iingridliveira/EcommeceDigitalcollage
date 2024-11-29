
/* eslint-disable react/prop-types */
import Star from "../../assets/Path.svg";
import SmallStar from "../../assets/Star 1.svg";
import { OptionCircle, OptionSquare } from "../ProductOptions/ProductOptions";


const BuyBox = ({ name, priceDiscount, price, category }) => {
  return (
    <>
      <main className="py-5 w-700">
        <h3 className="fw-bolder">{name}</h3>
        <p>
          {category}| {name}| REF:38416711
        </p>
        <div className="d-flex">
          <ul className="list-unstyled pt-2  ">
            <li className="d-inline-block me-3">
              <img src={Star} alt="" />
            </li>
            <li className="d-inline-block me-3">
              <img src={Star} alt="" />
            </li>
            <li className="d-inline-block me-3">
              <img src={Star} alt="" />
            </li>

            <li className="d-inline-block me-3">
              <img src={Star} alt="" />
            </li>
          </ul>

          <div className="d-flex align-items-center   ">
            <h6
              style={{ background: "#F6AA1C" }}
              className=" px-3  py-2 rounded text-white fw-bolder "
            >
              4,7 <img className="px-2 w-" src={SmallStar} />
            </h6>

            <h6 className="pt-3 px-3 d-inline-block me-3 opacity-75">
              (90 avaliações)
            </h6>
          </div>
        </div>
        <div className="d-flex">
          {" "}
          <h2 className="fw-bolder ">R${price}</h2>
          <p className="pt-2 text-decoration-line-through  me-3 opacity-25">
            {priceDiscount}
          </p>
        </div>
        <article className="w-75">
          <h6 className="fw-bolder opacity-50">Descrição do produto</h6>
          <p className="text-black opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </article>
        <div className="py-3">
          <OptionSquare />
         <OptionCircle/>
        </div>
        <button
          style={{ background: "#F6AA1C" }}
          className=" btn custom-btn px-5  py-2 rounded text-white fw-bolder "
        >
          COMPRAR
        </button>
      </main>
    </>
  );
};

export default BuyBox;
