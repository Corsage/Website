import React, { useState } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import Menu from './menu';

import Gmail from '../assets/svg/gmail.svg';
import Github from '../assets/svg/github.svg';
import LinkedIn from '../assets/svg/linkedin.svg';

const Header = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <nav className="navbar py-6 relative flex items-center w-full justify-between">
      <Menu isOpen={sideBarOpen} setOpen={setSideBarOpen} />

      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex items-center w-full">
          <button
            className="icon flex items-center justify-center relative text-cyan hover:text-accent"
            onClick={() => setSideBarOpen(true)}
          >
            <span
              className={`transform transition w-full h-px bg-current absolute ${
                sideBarOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
              }`}
            />

            <span
              className={`transform transition w-full h-px bg-current absolute ${
                sideBarOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
              }`}
            />

            <span
              className={`transform transition w-full h-px bg-current absolute ${
                sideBarOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
              }`}
            />
          </button>

          <ul className="navbar-nav flex ml-auto">
            <li className="nav-item mr-5">
              <OutboundLink
                href="mailto:jay.corsage@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Gmail className="icon text-cyan hover:text-accent" />
              </OutboundLink>
            </li>
            <li className="nav-item mr-5">
              <OutboundLink
                href="https://github.com/Corsage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="icon text-cyan hover:text-accent" />
              </OutboundLink>
            </li>
            <li className="nav-item">
              <OutboundLink
                href="https://linkedin.com/in/corsage/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className="icon text-cyan hover:text-accent" />
              </OutboundLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
