import * as React from 'react';
import type { HeadFC } from 'gatsby';

import Layout from '../components/layout';

const Home = () => {
  return (
    <div className="flex m-auto">
      <input
        style={{ height: 42, width: 720 }}
        type="text"
        name="search-query"
        id="search-query"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>;
