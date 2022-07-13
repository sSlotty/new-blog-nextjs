import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Navbar />
  </>
);

export default Layout;
