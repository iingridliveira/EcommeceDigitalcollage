
import Header from './header';
import Footer from './footer';


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <header> {<Header />}</header>
      <main className=''>{children}</main>
      <footer className=" text-white pt-3">{<Footer />}</footer>
    </div>
  );
};

export default Layout;