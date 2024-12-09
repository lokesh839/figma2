import React from 'react';

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg transition duration-300 ${className}`}
  >
    {children}
  </button>
);

export default Button;
