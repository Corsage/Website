import React, { ReactNode } from 'react';

import Footer from './footer';
import Header from './header';

import Waves from './waves';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <main className="container flex flex-1 mx-auto">{children}</main>
      <Footer />

      <div style={styles.wavesContainer} className="absolute bottom-0 -z-50">
        <Waves />
      </div>
    </div>
  );
};

const styles = {
  wavesContainer: {
    height: 400
  }
};

export default Layout;
