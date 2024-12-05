import LinkProduct from "./Link";

/* eslint-disable react/prop-types */
const ProductCard = ({photo, price, name, priceDiscount, index, category}) => {
    return (
      <>
        <main className=" ">
          <LinkProduct index={index}>
            {category}
            <div className="bg-white py-5 shadow-lg  me-3 rounded-1 py-3 align-items-center">
              {photo}
            </div>
            <p className="pt-3 fw-bolder opacity-75">tênis</p>
            <h4 className="fw-light w-100 text-black text-opacity-75">
              {name}
            </h4>
            <div className="">
              <h4 className="text-decoration-line-through d-inline-block me-3 opacity-25">
                ${price}
              </h4>
              <h4 className="d-inline-block me-3">${priceDiscount}</h4>
            </div>
          </LinkProduct>
        </main>
      </>
    );
}
 
export default ProductCard;