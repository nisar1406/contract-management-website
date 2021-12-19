import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ title, buttonProps, handleClose, handleClick }) => {
  return (
    <main className="antialiased fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
      <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
        <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mx-4 md:relative">
          <div className="modal-close cursor-pointer z-50">
            <button type="button" onClick={() => handleClose()}>
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
              </svg>
            </button>
          </div>
          <div className="text-center">
            <p className="font-bold">{title}</p>
          </div>
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => handleClick(buttonProps?.link)}
              className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm">
              {buttonProps.message}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  buttonProps: PropTypes.objectOf(PropTypes.string).isRequired,
  handleClose: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Modal;
