import { Link } from 'gatsby';
import React, { useState } from 'react';

import Icon from '../assets/svg/menu.svg';

const Menu = () => {
  const [open, isOpen] = useState(false);

  const menuPress = () => {
    isOpen(!open);
  };

  return (
    <div>
      <div
        id="collapsable-menu"
        className={`fixed mt-7 ${
          open ? 'left-0' : 'left-[-250px]'
        } w-[240px] h-screen z-50 p-5
    flex flex-col space-y-4 duration-300`}
      >
        <Link
          to="/"
          className="flex w-full justify-center"
          activeStyle={{ background: 'rgba(153, 204, 204, 0.25)' }}
        >
          <button
            type="button"
            className="w-full py-1 rounded text-green-cyan border border-green-cyan hover:bg-green-cyan hover:text-black"
            onClick={() => isOpen(false)}
          >
            Home
          </button>
        </Link>

        <Link
          to="/portfolio"
          className="flex w-full justify-center"
          activeStyle={{ background: 'rgba(153, 204, 204, 0.25)' }}
        >
          <button
            type="button"
            className="w-full py-1 rounded text-green-cyan border border-green-cyan hover:bg-green-cyan hover:text-black"
            onClick={() => isOpen(false)}
          >
            Portfolio
          </button>
        </Link>

        <button
          type="button"
          className="w-full py-1 rounded text-green-cyan border border-green-cyan hover:bg-green-cyan hover:text-black"
          onClick={() => isOpen(false)}
        >
          <Link
            to="/projects"
            className="flex w-full justify-center"
            activeStyle={{ color: 'white' }}
          >
            Projects
          </Link>
        </button>

        <button
          type="button"
          className="w-full py-1 rounded text-green-cyan border border-green-cyan hover:bg-green-cyan hover:text-black"
          onClick={() => isOpen(false)}
        >
          <Link
            to="/contact"
            className="flex w-full justify-center"
            activeStyle={{ color: 'white' }}
          >
            Contact
          </Link>
        </button>
      </div>

      <button
        className="icon flex items-center justify-center relative text-green-cyan hover:text-light-green-cyan"
        onClick={() => menuPress()}
      >
        <span
          className={`transform transition w-full h-px bg-current absolute ${
            open ? 'translate-y-0 rotate-45' : '-translate-y-2'
          }`}
        />

        <span
          className={`transform transition w-full h-px bg-current absolute ${
            open ? 'opacity-0 translate-x-3' : 'opacity-100'
          }`}
        />

        <span
          className={`transform transition w-full h-px bg-current absolute ${
            open ? 'translate-y-0 -rotate-45' : 'translate-y-2'
          }`}
        />
      </button>
    </div>
  );
};

export default Menu;
