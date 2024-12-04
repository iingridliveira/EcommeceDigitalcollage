import  { useState } from "react";
import ArrayGalery  from "./arrayGalery";

const Galery = () => {
  // Estado para controlar a imagem principal
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Imagem Principal */}
      <div className="main-image text-center mb-3">
        <img
          src={ArrayGalery[activeIndex].img}
          alt={ArrayGalery[activeIndex].alt}
          className="img-fluid"
          style={{
            width: "1000px",
            height: "570px",
            objectFit: "cover", // Garante que a imagem preencha o espaço corretamente
          }}
        />
      </div>
      {/* Miniaturas */}
      <div className="thumbnails d-flex justify-content-center">
        {ArrayGalery.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={item.alt}
            onClick={() => setActiveIndex(index)}
            className={`thumbnail ${
              index === activeIndex ? "active-thumbnail" : ""
            }`}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              margin: "0 5px",
              cursor: "pointer",
              border:
                index === activeIndex ? "2px solid blue" : "1px solid gray",
              borderRadius: "4px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Galery;
