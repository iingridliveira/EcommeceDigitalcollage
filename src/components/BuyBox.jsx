/* eslint-disable react/prop-types */
const BuyBox = ({photo, price,name,priceDiscount}) => {
    return (
      <>
        <main className=" ">
          <div className="bg-white  me-3 rounded-1 shadow-lg py-3 align-items-center">
            {photo}
          </div>

          <h5>{name}</h5>
          <div className="">
            <h4 className="text-decoration-line-through d-inline-block me-3 opacity-25">
              ${price}
            </h4>
            <h4 className="d-inline-block me-3">${priceDiscount}</h4>
          </div>
        </main>
      </>
    );
}
 
export default BuyBox;