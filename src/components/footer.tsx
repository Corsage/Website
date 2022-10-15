import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="navbar py-6 relative flex items-center w-full justify-between">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="flex flex-col-reverse md:flex-row items-center w-full">
          <span className="text-sm sm:text-center text-cyan dark:text-medium-cyan">
            &copy; {new Date().getFullYear().toString()} Corsage. All Rights
            Reserved.
          </span>

          <ul className="navbar-nav flex md:ml-auto mb-1 md:mb-0 text-cyan dark:text-medium-cyan">
            <li className="nav-item mr-5">
              <Link
                to="/"
                className="text-sm hover:text-accent dark:hover:text-dark-accent"
                activeClassName="text-accent dark:text-dark-accent"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link
                to="/portfolio"
                partiallyActive={true}
                className="text-sm hover:text-accent dark:hover:text-dark-accent"
                activeClassName="text-accent dark:text-dark-accent"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link
                to="/blog"
                partiallyActive={true}
                className="text-sm hover:text-accent dark:hover:text-dark-accent"
                activeClassName="text-accent dark:text-dark-accent"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                partiallyActive={true}
                className="text-sm hover:text-accent dark:hover:text-dark-accent"
                activeClassName="text-accent dark:text-dark-accent"
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
