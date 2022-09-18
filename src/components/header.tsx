import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import Menu from './menu';

import Gmail from '../assets/svg/gmail.svg';
import Github from '../assets/svg/github.svg';
import LinkedIn from '../assets/svg/linkedin.svg';

const Header = () => {
  return (
    <nav className="navbar py-6 relative flex items-center w-full justify-between">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex items-center w-full">
          <Menu />

          <ul className="navbar-nav flex ml-auto">
            <li className="nav-item mr-5">
              <OutboundLink
                href="mailto:jay.corsage@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Gmail className="icon text-green-cyan hover:text-light-green-cyan" />
              </OutboundLink>
            </li>
            <li className="nav-item mr-5">
              <OutboundLink
                href="https://github.com/Corsage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="icon text-green-cyan hover:text-light-green-cyan" />
              </OutboundLink>
            </li>
            <li className="nav-item">
              <OutboundLink
                href="https://linkedin.com/in/corsage/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className="icon text-green-cyan hover:text-light-green-cyan" />
              </OutboundLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
