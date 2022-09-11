import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="container flex min-h-screen mx-auto">{children}</main>
  );
};

export default Layout;
