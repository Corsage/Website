import React, { useState } from 'react';

const Menu = () => {
  const [open, isOpen] = useState(false);

  return (
    <div>
      <div
        id="collapsable-menu"
        className={`fixed top-0 ${
          open ? 'left-0' : 'left-[-250px]'
        } w-[240px] h-screen z-50 bg-gray-700 p-5
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

      <span className="cursor-pointer text-4xl" onClick={() => isOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#89D9C6"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default Menu;
