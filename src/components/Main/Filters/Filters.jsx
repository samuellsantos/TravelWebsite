import React from 'react';
import { Filter } from './Filter';
import { BiWine } from 'react-icons/bi';
import { BsCamera } from 'react-icons/bs';
import { RiShipLine } from 'react-icons/ri';
import { BiMask } from 'react-icons/bi';
import { MdOutlineSportsBaseball } from 'react-icons/md';

export const Filters = () => {
  return (
    <section className="mt-24 pb-64 flex justify-center items-center gap-14 lg:mx-2 md:mx-2 flex-wrap">
      <Filter filter="Relax" icon={<BiWine size={40} />} />
      <Filter filter="Cruise" icon={<RiShipLine size={40} />} />
      <Filter filter="Sport" icon={<MdOutlineSportsBaseball size={40} />} />
      <Filter filter="History" icon={<BsCamera size={40} />} />
      <Filter filter="Culture" icon={<BiMask size={40} />} />
    </section>
  );
};
