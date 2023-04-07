import React from 'react';
import { Button } from '../../../components/Button/Button';

export const SendEmail = () => {
  return (
    <section className="flex items-center gap-x-32 gap-y-16 mt-24 flex-wrap justify-center">
      <div>
        <h3 className="text-3xl font-semibold mb-1">Keep In Touch</h3>
        <h1 className="text-5xl text-cyan font-semibold mb-1">
          Travel With Us
        </h1>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Email Address..."
          className="py-4 pl-4 pr-32 border-white w-96 rounded text-black"
        />
        <div className="absolute top-1 right-2">
          <Button>Send</Button>
        </div>
      </div>
    </section>
  );
};
