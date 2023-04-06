import React from 'react';
import bhutan from '../../../assets/city/bhutan.jpg';
import europe from '../../../assets/city/europe.jpg';
import turkey from '../../../assets/city/turkey.jpg';
import riodejaneiro from '../../../assets/city/riodejaneiro.jpg';
import newyork from '../../../assets/city/newyork.jpg';
import norway from '../../../assets/city/norway.jpg';
import './CityPhoto.css';

const cities = [
  {
    name: 'Bhutan',
    packages: '3 packages',
    src: bhutan,
  },
  {
    name: 'Europe',
    packages: '5 packages',
    src: europe,
  },
  {
    name: 'Turkey',
    packages: '3 packages',
    src: turkey,
  },
  {
    name: 'Rio de Janeiro',
    packages: '4 packages',
    src: riodejaneiro,
  },
  {
    name: 'New York',
    packages: '4 packages',
    src: newyork,
  },
  {
    name: 'Norway',
    packages: '2 packages',
    src: norway,
  },
];

export const CityPhoto = () => {
  return (
    <section className="grid grid-cols-3 gap-7 pb-9">
      {cities.map((city) => (
        <div key={city.name} className="w-96 h-64 ">
          <div className="relative">
            <img
              src={city.src}
              alt={city.name}
              className="w-full z-20 rounded"
            />
            <div className="bg-[#00000052] rounded-bl rounded-br p-2 absolute z-30 bottom-0 w-full">
              <h4 className="font-bold">{city.name}</h4>
              <p>{city.packages}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
