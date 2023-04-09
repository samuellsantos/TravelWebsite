import React from 'react';
import './MainText.css';

export const MainText = () => {
  return (
    <section className="text-center text-white">
      <h1 className="xl:flex justify-center items-center flex-col mt-32 mb-6 font-marko  text-8xl lg:mx-2 md:mx-2">
        Adventure awaits, go find it
      </h1>
      <p className="text-xl">
        Welcome to our travel website! We are excited to help you plan your next
        adventure <br /> add create unforgettable memories
      </p>
    </section>
  );
};
