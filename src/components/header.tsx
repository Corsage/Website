import React from 'react';

import Menu from './menu';

const Header = () => {
  return (
    <div className="header">
      <div className="flex h-full px-5">
        <div className="my-auto">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
