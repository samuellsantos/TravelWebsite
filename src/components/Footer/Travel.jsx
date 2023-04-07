import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export const Travel = () => {
  return (
    <section className="">
      <h1 className="text-xl font-bold mb-4">TRAVEL</h1>
      <p className="w-80 mb-4">
        From the stuning beaches of Bali to the bustling streets of Tokyo, our
        website ofers a veriety of travel options to suit your interests and
        budget. Thank you for choosing our website for your travel needs. We
        look forward to helping you plan your next adventure!
      </p>
      <div className="flex items-center">
        <p className="pr-8 font-bold">Follow Us</p>
        <div className="flex items-center gap-x-4">
          <FaFacebook size={25} className="cursor-pointer" />
          <FaTwitter size={25} className="cursor-pointer " />
          <FaWhatsapp size={25} className="cursor-pointer" />
          <FaLinkedin size={25} className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
};
