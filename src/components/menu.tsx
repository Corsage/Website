import React, { useState } from 'react';

import Icon from '../assets/svg/menu.svg';

const Menu = () => {
  const [open, isOpen] = useState(false);

  const genericHamburgerLine =
    'rounded-full bg-green-cyan transition ease transform duration-300';

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
        <button
          type="button"
          className="w-full py-1 rounded text-green-cyan border border-green-cyan hover:bg-green-cyan hover:text-black"
        >
          Home
        </button>

        <button
          type="button"
          className="w-full py-1 rounded text-green-cyan border border-green-cyan hover:bg-green-cyan hover:text-black"
        >
          Portfolio
        </button>

        <button
          type="button"
          className="w-full py-1 rounded text-green-cyan border border-green-cyan hover:bg-green-cyan hover:text-black"
        >
          Projects
        </button>

        <button
          type="button"
          className="w-full py-1 rounded text-green-cyan border border-green-cyan hover:bg-green-cyan hover:text-black"
        >
          Contact
        </button>
      </div>

      <button
        className="icon flex items-center justify-center relative text-green-cyan"
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
