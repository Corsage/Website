import React, { useEffect, useRef } from 'react';
import type { HeadFC } from 'gatsby';

import Logo from '../assets/svg/logo.svg';

const Home = () => {
  const query = useRef<HTMLInputElement>(null);

  const suggestions = ['portfolio', 'contact', 'projects', 'test'];

  const playSuggestions = async () => {
    for (let i = 0; i < suggestions.length; i++) {
      // Type the suggestion.
      for (let j = 0; j < suggestions[i].length; j++) {
        await new Promise((r) => setTimeout(r, 180));
        if (query && query.current) {
          query.current.placeholder += suggestions[i][j];
        }
      }

      await new Promise((r) => setTimeout(r, 2000));

      // Delete the suggestion.
      for (let j = 0; j < suggestions[i].length; j++) {
        if (query && query.current) {
          await new Promise((r) => setTimeout(r, 180));
          query.current.placeholder = query.current.placeholder.slice(0, -1);
        }
      }
    }
  };

  useEffect(() => {
    playSuggestions();
  });

  return (
    <div
      style={styles.container}
      className="flex w-full h-fit flex-col self-center items-center justify-center m-auto"
    >
      <div className="mb-5">
        <Logo style={styles.logo} className="p-5 w-11/12 lg:w-full" />
      </div>

      <label
        style={styles.query}
        className="relative w-10/12 sm:w-2/3 lg:w-1/2 text-gray-400 focus-within:text-gray-600 block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>

        <input
          ref={query}
          type="text"
          name="search-query"
          id="search-query"
          placeholder=""
          className="block h-9 w-full rounded bg-white placeholder-gray-400 text-gray-500 appearance-none pl-10 focus:outline-none"
        />
      </label>
    </div>
  );
};

const styles = {
  container: {
    transform: 'translateY(-128px)'
  },
  logo: {
    maxWidth: 192,
    maxHeight: 192
  },
  query: {
    maxWidth: 720
  }
};

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>;
