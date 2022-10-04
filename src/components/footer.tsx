import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="navbar py-6 relative flex items-center w-full justify-between">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex flex-col-reverse md:flex-row items-center w-full">
          <span className="text-sm text-cyan sm:text-center">
            &copy; {new Date().getFullYear().toString()} Corsage. All Rights
            Reserved.
          </span>

          <ul className="navbar-nav flex text-cyan md:ml-auto mb-1 md:mb-0">
            <li className="nav-item mr-5">
              <Link
                to="/"
                className="text-sm hover:text-accent"
                activeClassName="text-accent"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link
                to="/portfolio"
                partiallyActive={true}
                className="text-sm hover:text-accent"
                activeClassName="text-accent"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link
                to="/blog"
                partiallyActive={true}
                className="text-sm hover:text-accent"
                activeClassName="text-accent"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                partiallyActive={true}
                className="text-sm hover:text-accent"
                activeClassName="text-accent"
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
