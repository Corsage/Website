import React from 'react';
import { Link } from 'gatsby';

interface Props {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

const Menu = ({ isOpen, setOpen }: Props) => {
  return (
    <aside
      className={`absolute top-0 w-[240px] z-50 duration-300 ${
        isOpen ? 'left-0' : 'left-[-250px]'
      }`}
      aria-label="Sidebar"
    >
      <div className="py-4 px-4 rounded-r bg-medium-cyan shadow-lg">
        <ul className="space-y-2">
          <li className="flex items-center p-2 rounded-lg text-light-cyan hover:text-accent">
            <button
              className="icon flex items-center justify-center relative text-light-cyan hover:text-accent"
              onClick={() => setOpen(false)}
            >
              <span
                className={`transform transition w-full h-px bg-current absolute ${
                  isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
                }`}
              />

              <span
                className={`transform transition w-full h-px bg-current absolute ${
                  isOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
                }`}
              />

              <span
                className={`transform transition w-full h-px bg-current absolute ${
                  isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
                }`}
              />
            </button>
          </li>

          <li>
            <Link
              to="/"
              className="flex items-center p-2 rounded-lg text-light-cyan hover:text-accent"
              activeClassName="bg-cyan/30"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="ml-3">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="flex items-center p-2 rounded-lg text-light-cyan hover:text-accent"
              activeClassName="bg-cyan/30"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>

              <span className="flex-1 ml-3 whitespace-nowrap">Portfolio</span>
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="flex items-center p-2 rounded-lg text-light-cyan hover:text-accent"
              activeClassName="bg-cyan/30"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="flex-1 ml-3 whitespace-nowrap">Blog</span>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-light-cyan">
          <li>
            <Link
              to="/contact"
              className="flex items-center p-2 rounded-lg text-light-cyan hover:text-accent"
              activeClassName="bg-cyan/30"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
              </svg>

              <span className="ml-4">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Menu;
