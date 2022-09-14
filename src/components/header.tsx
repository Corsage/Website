import React from 'react';

import Menu from './menu';

import Gmail from '../assets/svg/gmail.svg';
import Github from '../assets/svg/github.svg';
import LinkedIn from '../assets/svg/linkedin.svg';

const Header = () => {
  return (
    <nav
      style={styles.header}
      className="navbar py-2 relative flex items-center w-full justify-between"
    >
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex items-center w-full">
          <Menu />

          <ul className="navbar-nav flex ml-auto ">
            <li className="nav-item">
              <a
                href="mailto:jay.corsage@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Gmail className="icon mr-5 text-green-cyan hover:text-light-green-cyan" />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/Corsage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="icon mr-5 text-green-cyan hover:text-light-green-cyan" />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://linkedin.com/in/corsage/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className="icon text-green-cyan hover:text-light-green-cyan" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  header: {
    minHeight: '60px'
  }
};

export default Header;
