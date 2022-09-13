import React, { ReactNode } from 'react';

import Footer from './footer';
import Header from './header';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container flex flex-1 mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
