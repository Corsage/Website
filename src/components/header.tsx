import React, { useState } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import { useDispatch, useSelector } from 'react-redux';
import { toggleWaves } from '../redux/slices/globalSlice';

import Menu from './menu';

import Gmail from '../assets/svg/gmail.svg';
import Github from '../assets/svg/github.svg';
import LinkedIn from '../assets/svg/linkedin.svg';
import { RootState } from '../redux/store';

const Header = () => {
  const dispatch = useDispatch();
  const waves: boolean = useSelector((state: RootState) => state.global.waves);

  const [sideBarOpen, setSideBarOpen] = useState(false);

  const setWaves = () => {
    dispatch(toggleWaves(!waves));
  };

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
              <label
                htmlFor="waves-toggle"
                className="inline-flex relative items-center mr-5 cursor-pointer"
              >
                <input
                  type="checkbox"
                  value=""
                  id="waves-toggle"
                  className="sr-only peer"
                  checked={waves}
                  onChange={setWaves}
                />
                <div className="w-11 h-6 bg-light-cyan peer-checked:bg-cyan rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
                <span className="ml-3 text-sm font-medium font-mono text-light-cyan">
                  Waves
                </span>
              </label>
            </li>
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
