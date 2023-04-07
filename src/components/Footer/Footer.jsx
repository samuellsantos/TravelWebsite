import React from 'react';
import { Travel } from './Travel';
import { Company } from './Company';
import { Suport } from './Suport';
import { Communication } from './Communication';
import { FaCopyright } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-[#0b1d27] flex justify-center items-start flex-wrap gap-32 text-white pt-32 pb-16 relative">
      <Travel />
      <Company />
      <Suport />
      <Communication />

      <p className="flex items-center justify-center gap-2 absolute bottom-2">
        <FaCopyright /> Powered by Samuell
      </p>
    </footer>
  );
};
