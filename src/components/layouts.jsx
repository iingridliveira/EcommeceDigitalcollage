
import Header from './header';
import Footer from './footer';


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <header className='text-md-start d-flow-collum m bg-white'> {<Header />}</header>
      <main className=" container mt-5 ">{children}</main>
      <footer className="text-white pt-3 mw-100">{<Footer />}</footer>
    </div>
  );
};

export default Layout;