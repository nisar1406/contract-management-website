import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getSessionStorage } from '../../../utils/helpers';

export const logoutHandler = (path, navigate) => {
  localStorage.clear();
  sessionStorage.clear();
  navigate(path, { replace: true });
};

const Header = ({ navigate }) => {
  const { pathname } = useLocation();

  return (
    <nav className="flex bg-white shadow-lg justify-between max-w-auto mx-auto px-4">
      {/* <!-- left side --> */}
      <div className="flex items-center space-x-3">
        <NavLink
          to="/home"
          className={`block py-4 px-2 ${
            pathname === '/home' ? 'text-indigo-500' : 'text-gray-500'
          } px-2 font-semibold hover:text-indigo-500`}
          activeclassname="active">
          Home
        </NavLink>
        {getSessionStorage('token') && (
          <>
            <NavLink
              to="/dashboard"
              className={`block py-4 px-2 ${
                pathname === '/dashboard' ? 'text-indigo-500' : 'text-gray-500'
              } px-2 font-semibold hover:text-indigo-500`}
              activeclassname="active">
              Dashboard
            </NavLink>
            <NavLink
              to="/contracts"
              className={`block p-3 py-4  ${
                pathname === '/contracts' ? 'text-indigo-500' : 'text-gray-500'
              } px-2 font-semibold hover:text-indigo-500 transition duration-300`}
              activeclassname="active">
              Contracts
            </NavLink>
          </>
        )}
      </div>

      {/* <!-- right side --> */}
      <div className="flex items-center space-x-3">
        {getSessionStorage('token') ? (
          <>
            <NavLink
              to="/profile"
              className={`block p-3 py-3 ${
                pathname === '/profile' ? 'text-indigo-500' : 'text-gray-500'
              } px-2 font-semibold rounded hover:text-indigo-500`}
              activeclassname="active">
              Profile
            </NavLink>
            <button
              type="button"
              className={`block p-3 py-3 ${
                pathname === '' ? 'text-indigo-500' : 'text-gray-500'
              } px-2 font-semibold rounded hover:text-indigo-500`}
              activeclassname="active"
              onClick={() => logoutHandler('/home', navigate)}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/sign-up"
              className={`block p-3 py-3 px-2 ${
                pathname === '/sign-up' ? 'bg-indigo-500 text-white' : 'text-gray-500'
              } font-semibold rounded hover:bg-indigo-500 hover:text-white transition duration-300`}
              activeclassname="active">
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              className={`block p-3 py-3 px-2 ${
                pathname === '/login' ? 'bg-indigo-500 text-white' : 'text-gray-500'
              } font-semibold rounded hover:bg-indigo-500 hover:text-white transition duration-300`}
              activeclassname="active">
              Login
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

Header.propTypes = {
  navigate: PropTypes.func.isRequired
};

export default Header;
