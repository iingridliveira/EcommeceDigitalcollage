import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductListingArray } from "../../components/array";
import BuyBox from "../../components/BayBox/Buybox";
import Galery from "../../components/Galery/galery";
import ProductListing from "../../components/ProductListing/ProductListing";
import { Link } from "react-router-dom";
import Arrow from "../../assets/Right 24px.svg";
const ProductcView = () => {
  const index = useParams();
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    const response = ProductListingArray;
    const numero1 = parseInt(index.id, 10);
    const productFound = response.slice(index)[numero1];

    setProduct(productFound);
    console.log(index);
    console.log(productFound);
    console.log(productFound + "  aa");
    console.log(product + " bb");
  };

  useEffect(() => {
    getProduct();
  }, [index]);

  return (
    <>
      <section className="container-xxl py-5">
        <div className="d-flex flex-nowrap h-100 overflow-auto overflow-y-hidden">
          <div>
            {/* GALERY AQUI*/}
            <Galery />
          </div>
          <div className="d-flex flex-wrap container-xxl d-md-flex">
            <BuyBox
              key={product}
              category={product.category}
              name={product.name}
              price={product.price}
              priceDiscount={product.priceDiscount}
            />
          </div>
        </div>
      </section>
      <section className="container-xxl py-5">
        <div className=" d-flex justify-content-between">
          <h4 className="fw-bold">Produtos relacinados</h4>
          <div className="d-flex mx-5">
            <p className="d-inline-block me-3" style={{ color: "#C92071" }}>
              <Link className="text-decoration-none" to={"/product"}>
                {" "}
                Ver todos{" "}
              </Link>
            </p>
            <img className="d-inline-block me-3 mb-3 " src={Arrow} />
          </div>
        </div>
        <ProductListing />
      </section>
    </>
  );
};

export default ProductcView;
