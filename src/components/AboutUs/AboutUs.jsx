import React from 'react';
import { DiscoverAdventure } from './Discover/DiscoverAdventure';
import { Photos } from './Photos/Photos';

export const AboutUs = () => {
  return (
    <section className="h-full bg-[#0b1d27] px-52 pt-28">
      <DiscoverAdventure />
      <Photos />
    </section>
  );
};