import React from 'react';
import bhutan from '../../../assets/city/bhutan.jpg';
import europe from '../../../assets/city/europe.jpg';
import turkey from '../../../assets/city/turkey.jpg';
import riodejaneiro from '../../../assets/city/riodejaneiro.jpg';
import newyork from '../../../assets/city/newyork.jpg';
import norway from '../../../assets/city/norway.jpg';
import { Button } from '../../../components/Button/Button';

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
  const [showDetails, setShowDetails] = React.useState(null);

  function toggleShowDetails(cityName) {
    if (showDetails === cityName) {
      setShowDetails(null);
    } else {
      setShowDetails(cityName);
    }
  }

  return (
    <section className="xl:grid-cols-3 grid pb-40 gap-12 pt-12 lg:grid-cols-2 sm:grid-cols-1">
      {cities.map((city) => (
        <div
          key={city.name}
          className="xl:w-96 xl:h-64 lg:w-96 lg:h-64 md:w-96 md:h-64 relative sm:w-80 w-80 overflow-hidden"
          onMouseEnter={() => toggleShowDetails(city.name)}
          onMouseLeave={() => setShowDetails(null)}
        >
          <img src={city.src} alt={city.name} className="w-full z-20 rounded" />
          {showDetails !== city.name && (
            <div className="bg-[#00000052] rounded-bl rounded-br p-2 absolute z-30 bottom-0 w-full pointer-events-none">
              <h4 className="font-bold">{city.name}</h4>
              <p>{city.packages}</p>
            </div>
          )}
          {showDetails === city.name && (
            <div className="bg-[#00000052] absolute md:w-96 h-64 mb-8 rounded flex justify-center items-center flex-col gap-y-4 top-0 left-0 sm:w-80 w-80">
              <h2 className="font-bold">{city.packages}</h2>
              <h3 className="font-bold">{city.name}</h3>
              <Button>View Destination</Button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};
