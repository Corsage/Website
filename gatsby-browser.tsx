import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';

import './src/styles/global.css';
import Layout from './src/components/layout';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props
}) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it.
  return <Layout {...props}>{element}</Layout>;
};
