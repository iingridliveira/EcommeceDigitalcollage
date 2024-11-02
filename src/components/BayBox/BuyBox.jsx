import LinkProduct from "./Link";

/* eslint-disable react/prop-types */
const BuyBox = ({photo, price,name,priceDiscount, index}) => {
    return (
      <>
        <main className=" ">
          <LinkProduct index={index}>
            <div className="bg-white py-5  me-3 rounded-1 shadow-lg py-3 align-items-center">
              {photo}
            </div>

            <h4 className="fw-light text-black text-opacity-75">{name}</h4>
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
 
export default BuyBox;