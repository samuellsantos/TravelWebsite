import React from 'react';
import './Button.css';
export const Button = ({ children }) => {
  return (
    <button className="w-30 h-18 py-3 px-12 rounded bg-cyan button transition-all duration-200 z-100">
      {children}
    </button>
  );
};
