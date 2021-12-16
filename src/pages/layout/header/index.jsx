import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex bg-white shadow-lg justify-between max-w-auto mx-auto px-4">
      {/* <!-- left side --> */}
      <div className="flex items-center space-x-3">
        <NavLink
          to="/home"
          className="block py-4 px-2 text-indigo-500 border-indigo-500 font-semibold"
          activeclassname="active">
          Home
        </NavLink>
        <NavLink
          to="/contracts"
          className="block p-3 py-4 px-2 text-gray-500 font-semibold hover:text-indigo-500 transition duration-300"
          activeclassname="active">
          Contracts
        </NavLink>
        {/* <NavLink
                href="/about"
                activeclassname="active"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">
                About
              </NavLink>
              <NavLink
                href="/contact-us"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">
                Contact Us
              </NavLink> */}
      </div>

      {/* <!-- right side --> */}
      <div className="flex items-center space-x-3">
        <NavLink
          to="/sign-up"
          className="block p-3 py-3 px-2 text-gray-500 font-semibold rounded hover:bg-indigo-500 hover:text-white transition duration-300"
          activeclassname="active">
          Sign Up
        </NavLink>
        <NavLink
          to="/login"
          className="block p-3 py-3 px-2 text-gray-500 font-semibold rounded hover:bg-indigo-500 hover:text-white transition duration-300"
          activeclassname="active">
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
