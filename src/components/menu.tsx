import React, { useState } from 'react';

import Icon from '../assets/svg/menu.svg';

const Menu = () => {
  const [open, isOpen] = useState(false);

  return (
    <div>
      <div
        id="collapsable-menu"
        className={`fixed top-0 ${
          open ? 'left-0' : 'left-[-250px]'
        } w-[240px] h-screen z-50 bg-teal-900 p-5
    flex flex-col space-y-5 text-white duration-300`}
      >
        <a
          href="#"
          className="text-right text-4xl"
          onClick={() => isOpen(false)}
        >
          &times;
        </a>
        <a className="hover:text-amber-500" href="#">
          Home
        </a>
        <a className="hover:text-amber-500" href="#">
          Portfolio
        </a>
        <a className="hover:text-amber-500" href="#">
          Projects
        </a>
        <a className="hover:text-amber-500" href="#">
          Contact
        </a>
      </div>

      <span className="cursor-pointer" onClick={() => isOpen(true)}>
        <Icon className="icon text-green-cyan hover:text-light-green-cyan" />
      </span>
    </div>
  );
};

export default Menu;
