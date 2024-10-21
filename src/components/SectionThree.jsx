import Section from "./section";
import Shirts from "../assets/Vector-1.svg"
import Sneakers from "../assets/Vector-5.svg";
import Pants from "../assets/Vector-2.svg";
import Phones from "../assets/Vector-4.svg";
import Card2 from "./cards";

const SectionThree = () => {
    return (
      <>
        <Section cor={""}>
          <main className="container-xxl ">
            <div>
              <h3>Coleções em destaque</h3>
            </div>
            <div className=" d-flex flex-column  align-items-center justify-content-between">
              <div>
                <h3>Coleções em destaque</h3>
              </div>
              <ul className="list-unstyled">
                <li className="d-inline-block me-3       ">
                  <Card2 photo={Shirts} text={"Camisetas"} />
                </li>
                <li className="d-inline-block me-3      ">
                  <Card2 photo={Pants} text={"Calças"} />
                </li>
                <li className="d-inline-block me-3      ">
                  <Card2 photo={Pants} text={"Bonés"} />
                </li>
                <li className="d-inline-block me-3       ">
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