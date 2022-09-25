import React, { useState } from 'react';
import { Link } from 'gatsby';

interface Props {
  text: string;
  icon: any;
}

const Banner = ({ text, icon }: Props) => {
  const [show, setShow] = useState(true);

  if (!show) {
    return null;
  }

  return (
    <div className="bg-dark-cyan/50">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg p-2">{icon}</span>
            <p className="ml-3 truncate text-white">
              <span className="md:hidden">{text}</span>
              <span className="hidden md:inline">{text}</span>
            </p>
          </div>
          <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
            <Link
              to="/updates"
              className="flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-cyan text-black shadow-sm hover:bg-accent"
            >
              Learn more
            </Link>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              onClick={() => setShow(false)}
              className="-mr-1 flex rounded-md p-2 focus:outline-none sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-cyan hover:text-accent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
