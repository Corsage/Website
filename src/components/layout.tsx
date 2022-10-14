import React from 'react';
import { PageProps } from 'gatsby';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import Footer from './footer';
import Header from './header';
import Banner from './banner';
import Notifications from './notifications';

import Waves from './waves';

const Layout = ({ children, location }: PageProps) => {
  const waves: boolean = useSelector((state: RootState) => state.global.waves);
  const banner: boolean = useSelector(
    (state: RootState) => state.global.banner
  );

  return (
    <div className="relative flex flex-col min-h-screen">
      {banner && (
        <Banner
          text="This website is currently in pre-release and may contain bugs."
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-cyan"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          }
        />
      )}
      <Header />
      <main className="container flex flex-1 mx-auto">
        <Notifications />
        {children}
      </main>
      <Footer />

      {waves &&
        (location.pathname === '/' ||
          location.pathname.includes('contact') ||
          location.pathname.includes('blog')) && (
          <div
            style={styles.wavesContainer}
            className="absolute flex w-full bottom-0 -z-50 overflow-hidden"
          >
            <Waves />
          </div>
        )}
    </div>
  );
};

const styles = {
  wavesContainer: {
    height: 400
  }
};

export default Layout;
