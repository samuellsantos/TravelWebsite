import React from 'react';

export const Company = () => {
  return (
    <section>
      <h3 className="font-bold text-xl mb-4">Company</h3>
      <ul className="flex flex-col gap-2">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Flight</li>
        <li className="cursor-pointer">Visa</li>
        <li className="cursor-pointer">Package</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </section>
  );
};
