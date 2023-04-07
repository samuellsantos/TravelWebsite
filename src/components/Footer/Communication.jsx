import React from 'react';
import {
  FaCcMastercard,
  FaCcVisa,
  FaEnvelope,
  FaPaypal,
  FaPhone,
} from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

export const Communication = () => {
  return (
    <section>
      <h3 className="font-bold text-xl mb-4">Communication</h3>
      <div className="flex items-center gap-4 mb-2">
        <div className="bg-[#ffffff26] p-2 rounded-full">
          <FaPhone />
        </div>
        <p className="flex flex-col text-[12px] text-slate-400">
          Drop a Line
          <span className="text-[16px] text-white">+123 4567 8912</span>
        </p>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <div className="bg-[#ffffff26] p-2 rounded-full">
          <FaEnvelope />
        </div>
        <p className="flex flex-col text-[12px] text-slate-400">
          Email Address
          <span className="text-[16px] text-white">
            samuka0102128@gmail.com
          </span>
        </p>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="bg-[#ffffff26] p-2 rounded-full">
          <GoLocation />
        </div>
        <p className="flex flex-col text-[12px] text-slate-400">
          Visit Office
          <span className="text-[16px] text-white">369 Main Street</span>
        </p>
      </div>
      <div className="flex items-center gap-x-4 mb-20">
        <p className="pr-8 font-bold">Pay With</p>
        <FaPaypal size={25} className="cursor-pointer" />
        <FaCcMastercard size={25} className="cursor-pointer " />
        <FaCcVisa size={25} className="cursor-pointer" />
      </div>
    </section>
  );
};
