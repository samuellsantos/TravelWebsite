import React from 'react';
import { BsSearch } from 'react-icons/bs';

export const SearchInput = () => {
  return (
    <div className="text-white mt-8 flex justify-center items-center">
      <section className="relative w-72">
        <input
          type="text"
          placeholder="Choose Your Destination..."
          className="border-2 border-white rounded bg-transparent-black outline-none text-white w-72 py-2.5 px-4 relative placeholder:italic placeholder:text-white"
        />
        <BsSearch
          className="bg-[cyan] p-2 rounded absolute right-1 top-1 cursor-pointer"
          size={40}
        />
      </section>
    </div>
  );
};
