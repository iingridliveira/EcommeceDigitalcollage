import { useState, useEffect } from "react";
import BuyBox from "./BayBox/BuyBox";
import SneakersBox from "../assets/Layer 1aa 2.svg";

const ProductListing = () => {
    
const [Product, setProduto] = useState([]);


const getProducts = () =>{
  const ProductListing = [
    {
      name: "Nome do produto 1",
      image: <img  src={SneakersBox} />,
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: "Nome do produto 2",
      image: <img src={SneakersBox} />,
      price: 49.9,
    },
    {
      name: "Nome do produto 2",
      image: <img src={SneakersBox} />,
      price: 49.9,
    },
    {
      name: "Nome do produto 2",
      image: <img src={SneakersBox} />,
      price: 49.9,
    },
    {
      name: "Nome do produto 2",
      image: <img src={SneakersBox} />,
      price: 49.9,
    },
    {
      name: "Nome do produto 2",
      image: <img src={SneakersBox} />,
      price: 49.9,
    },
    {
      name: "Nome do produto 2",
      image: <img src={SneakersBox} />,
      price: 49.9,
    },
    {
      name: "Nome do produto 2",
      image: <img src={SneakersBox} />,
      price: 49.9,
    },
    {
      name: "Nome do produto 2",
      image: <img src={SneakersBox} />,
      price: 49.9,
    },
  ];
  const response = ProductListing;
  setProduto(response);
  console.log(response)
}
 useEffect(() => {
   getProducts();
 }, []);
       
        return (
          <div className=" d-flex flex-wrap container-xxl">
            {Product.map((item, index) => {
              if (index >= 8) {
                // Quando chegar no nono produto, interrompe a renderização
                return null;
              }

              return (
                <BuyBox
                  key={item.index}
                  name={item.name}
                  photo={item.image}
                  price={item.price}
                  priceDiscount={item.priceDiscount}
                />
              );
            })}
          </div>
        );
}
 
export default ProductListing;