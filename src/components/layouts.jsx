
import Header from './header';
import Footer from './footer';


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
      <div>
        <header> {<Header />}</header>
        <main>{children}</main> 
        <footer> {<Footer />}</footer>
      </div>
  
  );
};

export default Layout;