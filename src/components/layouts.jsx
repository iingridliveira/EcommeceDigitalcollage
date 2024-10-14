import React from 'react';
import Header from './header';
import Footer from './footer';

// Definindo o componente de layout
const Layout = ({ children }) => {
  return (
    <div>
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      {children}

      {/* Componente do rodapé */}
      <Footer />
    </div>
  );
};

export default Layout;