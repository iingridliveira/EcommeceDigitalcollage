import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductListingArray } from "../../components/array";
import BuyBox from "../../components/BayBox/BuyBox";

const ProductcView = () => {
  const { index } = useParams();
const [produto, setProduto] = useState([{}]);

  
  const getProduct = () => {
    const response = ProductListingArray;
    const productFound = response.filter((product, i) => i === parseInt(product,index)); 
    
    setProduto(productFound);
  };

  useEffect(() => {
    getProduct();
  }, [index]);

  return (
    <>
      {produto.find ? (
        <BuyBox
          key={index}
          name={index}
          photo={produto.image}
          price={produto.price}
          priceDiscount={produto.priceDiscount}
        />
      ) : (
        <p>Produto não encontrado</p>
      )}
    </>
  );
};

export default ProductcView;
