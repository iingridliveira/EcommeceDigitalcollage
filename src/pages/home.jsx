import { Link } from "react-router-dom"


 const Home = () => {
  return (
    <>
      <h1 className="my-4">Home</h1>
      {/* exemplo de como funciona o rauter*/}
      <Link to={`/product`}>
        <button className="btn btn-primary">Produtos</button>
      </Link>
    </>
  );
}
  export default Home