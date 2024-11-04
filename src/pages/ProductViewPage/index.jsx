import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductListingArray } from "../../components/array";
import BuyBox from "../../components/BayBox/Buybox";

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
      <BuyBox
        key={product}
        category={product.category}
        name={product.name}
        price={product.price}
        priceDiscount={product.priceDiscount}
      />
    </>
  );
};

export default ProductcView;
