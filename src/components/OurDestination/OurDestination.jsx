import React from 'react';
import { CityPhoto } from './CityPhoto/CityPhoto';

export const OurDestination = () => {
  return (
    <section className="h-full bg-[#0b1d27]  pt-36 flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-semibold mb-4">Our Proposals</h2>
      <h1 className="text-5xl text-cyan font-semibold mb-7">
        Our Destinations
      </h1>
      <CityPhoto />
    </section>
  );
};
