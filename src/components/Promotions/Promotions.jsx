import React from 'react';
import { PromotionsCard } from './PromotionsCard';

export const Promotions = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#0b1d27] text-white pt-20">
      <h3 className="text-3xl font-semibold mb-1">Promotions</h3>
      <h1 className="text-5xl text-cyan font-semibold mb-1 text-center">
        Our Packages
      </h1>
      <PromotionsCard />
    </section>
  );
};
