import React from 'react';
import PropTypes from 'prop-types';
import IdleTimer from 'react-idle-timer';

import Header, { logoutHandler } from './header';

import { appConstants } from '../../utils/constants';

const Layout = ({ navigate, children }) => {
  const handleOnIdle = () => {
    logoutHandler('/login', navigate);
  };

  return (
    <IdleTimer timeout={appConstants?.timeout} onIdle={handleOnIdle}>
      <Header navigate={navigate} />
      <div className="max-w-screen-lg mx-auto pt-10">{children}</div>
    </IdleTimer>
  );
};

Layout.propTypes = {
  navigate: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Layout;
