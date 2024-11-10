import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LinkProduct = ({ index, children }) => {
  return (
    <Link className="text-decoration-none" to={`/product/${index}`}>
      {children}
    </Link>
  );
};

export default LinkProduct;
