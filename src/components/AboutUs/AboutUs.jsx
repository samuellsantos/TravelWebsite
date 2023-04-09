import React from 'react';
import { DiscoverAdventure } from './Discover/DiscoverAdventure';
import { Photos } from './Photos/Photos';

export const AboutUs = () => {
  return (
    <section className="h-full bg-[#0b1d27] flex justify-center items-center flex-col pb-5 pt-40">
      <DiscoverAdventure />
      <Photos />
    </section>
  );
};
