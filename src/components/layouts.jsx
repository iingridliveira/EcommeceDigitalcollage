
import Header from './Header/header';
import Footer from './Footer/footer';
import SearchProvider from '../context';
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <SearchProvider>
        <header className="text-md-start d-flow-collum m bg-white">
         
          {<Header />}
        </header>
        <main className="">{children}</main>
        <footer className="text-white pt-3 mw-100">{<Footer />}</footer>
      </SearchProvider>
    </div>
  );
};

export default Layout;