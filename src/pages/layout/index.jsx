import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto pt-10">{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
