import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
/* eslint-disable react/prop-types */
const BuyBox = ({ name, priceDiscount, price, category }) => {
  return (
    <>
      <main className="">
        <h3>{name}</h3>
        <p>
          {category}| {name}| REF:38416711
        </p>
        <div className="">
          <ul className="list-unstyled ">
            <li className="d-inline-block me-3">
              <FontAwesomeIcon className="" icon={faStar} />{" "}
            </li>
            <li className="d-inline-block me-3">
              <FontAwesomeIcon className="" icon={faStar} />{" "}
            </li>
            <li className="d-inline-block me-3">
              <FontAwesomeIcon className="" icon={faStar} />{" "}
            </li>
            <li className="d-inline-block me-3">
              <FontAwesomeIcon className="" icon={faStar} />{" "}
            </li>
          </ul>

          <h6>
            4.7 <FontAwesomeIcon icon={faStar} />{" "}
          </h6>
          <p>(90 avaliações)</p>
        </div>
        <div className="">
          {" "}
          <h3>R${price}</h3>
          <p>{priceDiscount}</p>
        </div>
        <article className="">
          <h4>Descrição do produto</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </article>
      </main>
    </>
  );
};

export default BuyBox;
