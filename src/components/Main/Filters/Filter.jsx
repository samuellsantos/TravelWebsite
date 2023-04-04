import React from 'react';
import './Filters.css';

export const Filter = ({ icon, filter }) => {
  return (
    <div className="text-white flex flex-col items-center justify-center gap-y-3 w-32 h-32 rounded bg-transparent-white bg-blur-md filter">
      {icon}
      <p className="text-xl">{filter}</p>
    </div>
  );
};
