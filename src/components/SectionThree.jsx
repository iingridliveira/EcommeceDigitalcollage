import Section from "./section";
import Shirts from "../assets/Vector-1.svg"
import Sneakers from "../assets/Vector-5.svg";
import Pants from "../assets/Vector-2.svg";
import Phones from "../assets/Vector-4.svg";
import Card2 from "./cards";
import Promocard from "./Promocard";
import Headphone from "../assets/d9db11953a2d185d37246bb1f500c957 1.svg"
import Sneaker from "../assets/ddd 1.svg"
import Shirt from "../assets/star-wars-storm-trooper-supreme-shirts-supreme-t-shirt-snoopy-clothing-apparel-t-shirt-text-transparent-png-616696 1.svg"

const SectionThree = () => {
    return (
      <>
        <Section cor={"container-xxl"}>
          <main className=" py-5 ">
            <div className="mb-5 ">
              <h4
                style={{ marginLeft: "40px" }}
                className="fw-bolder opacity-75"
              >
                Coleções em destaque
              </h4>
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginBottom: "50px",
                marginLeft: "40px",
                marginRight: "40px",
              }}
            >
              <Promocard nome={"Novo drop Supreme"} img={Shirt} />
              <Promocard nome={"Coleção Adidas"} img={Sneaker} />
              <Promocard nome={"Novo Beats Bass"} img={Headphone} />
            </div>

            <div className=" d-flex flex-column  align-items-center justify-content-between">
              <div>
                <h4 className="fw-bolder opacity-75">Coleções em destaque</h4>
              </div>
              <ul className="list-unstyled">
                <li className="d-inline-block ">
                  <Card2 photo={Shirts} text={"Camisetas"} />
                </li>
                <li className="d-inline-block     ">
                  <Card2 photo={Pants} text={"Calças"} />
                </li>
                <li className="d-inline-block     ">
                  <Card2 photo={Pants} text={"Bonés"} />
                </li>
                <li className="d-inline-block        ">
                  <Card2 photo={Phones} text={"Headphones"} />
                </li>
                <li className="d-inline-block me-3  ">
                  <Card2 photo={Sneakers} text={"Tênes"} />
                </li>
              </ul>
            </div>
          </main>
        </Section>
      </>
    );
}
 
export default SectionThree;