import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="navbar py-6 relative flex items-center w-full justify-between">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex flex-col-reverse md:flex-row items-center w-full">
          <span className="text-sm text-green-cyan sm:text-center">
            &copy; {new Date().getFullYear().toString()} Corsage. All Rights
            Reserved.
          </span>

          <ul className="navbar-nav flex md:ml-auto mb-1 md:mb-0">
            <li className="nav-item mr-5">
              <Link
                to="/"
                className="text-sm text-green-cyan hover:text-light-green-cyan"
                activeClassName="text-light-green-cyan"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link
                to="/portfolio"
                partiallyActive={true}
                className="text-sm text-green-cyan hover:text-light-green-cyan"
                activeClassName="text-light-green-cyan"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link
                to="/projects"
                partiallyActive={true}
                className="text-sm text-green-cyan hover:text-light-green-cyan"
                activeClassName="text-light-green-cyan"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                partiallyActive={true}
                className="text-sm text-green-cyan hover:text-light-green-cyan"
                activeClassName="text-light-green-cyan"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
