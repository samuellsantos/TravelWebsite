import React from 'react';
import { Button } from '../Button/Button';

export const Holiday = () => {
  return (
    <section className="h-72  bg-[url('./src/assets/backgroundHolidaySection.jpg')] bg-cover bg-center flex justify-around items-center lg:flex-row text-white flex-col">
      <h1 className="text-5xl font-bold">
        Your <br /> Next <span className="text-[cyan]">Holiday</span>
      </h1>
      <Button>View All Packages</Button>
    </section>
  );
};
