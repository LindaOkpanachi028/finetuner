import React from 'react';
import '../css/spinner.css';
import { createPortal } from 'react-dom';

const Spinner = () => {
  return (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const Loader = ({ isActive,onClose }) => {
  return (
    <>
      {isActive && (
        <Modal onClose={onClose}>
          <Spinner />
        </Modal>
      )}
    </>
  );
};

export default Loader;

export const Response = ({ response, onClose }) => {
  return (
    <>
      {response && (
        <Modal onClose={onClose}>
          <div className="max-w-6xl my-auto mx-auto px-3 border-gray-100 h-[200px] inset-0 flex justify-center z-[400] items-center backdrop-blur-sm bg-white fixed">
            {response}
          </div>
        </Modal>
      )}
    </>
  );
};

const Modal = ({ children,onClose, rootId = 'root' }) => {
  return (
    <>
      {createPortal(
        <>
          <div onClick={onClose} className="w-full fixed inset-0 flex justify-center z-[400] items-center backdrop-blur-sm bg-black/50">
            {children}
          </div>
        </>,
        document.getElementById('root')
      )}
    </>
  );
};