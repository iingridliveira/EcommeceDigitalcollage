
import FilterCard from "../../components/BayBox/filterCard";
import SearchProducts from "../../components/search"




 const Product = () => {

  return (
    <>
      <section className="container-xxl ">
        <div className=" container d-flex justify-content-between py-5">
          <p className="fw-bold">Resultados para tenes </p>
          <div className="d-flex mx-5">
            <select
              className="form-select p-3 bg-transparent border border-dark"
              aria-label="Default select example"
            >
              <option selected className="fw-bold">
                <p className="">Ordernar por:</p>
              </option>
              <option value="1">
                <p className="fw-bold-important">Ordernar por:</p>mais
                relevantes
              </option>
              <option value="2">
                <p className="fw-bold-important">Ordernar por:</p>menos
                relevantes
              </option>
            </select>
          </div>
        </div>
        <div className=" d-flex flex-nowrap h-100 overflow-auto overflow-y-hidden">
          <div className="">
            <FilterCard />
          </div>
          <div className="">
            <SearchProducts />
          </div>
        </div>
      </section>
    </>
  );
}
  export default Product;