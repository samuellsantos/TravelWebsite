import React from 'react';
import { YoutubeVideo } from './YoutubeVideo';
import { GiPaperPlane } from 'react-icons/gi';
import { Button } from '../../Button/Button';
import '../AboutUs.css';

export const DiscoverAdventure = () => {
  return (
    <section className=" text-white flex  flex-col justify-center items-center gap-x-8 lg:w-full lg:flex-row ">
      <div className="m-0 lg:w-2/4 lg:justify-end w-full flex justify-center">
        <YoutubeVideo />
      </div>

      <div className="w-full px-4 z-50 mt-8 lg:w-2/4 lg:justify-center flex justify-start flex-col">
        <h2 className="text-3xl font-semibold mb-7">About Us</h2>
        <h1 className="text-5xl text-cyan font-semibold mb-7">
          Discover Your Next Adventure
        </h1>
        <div className="lg:w-3/4 w-full flex justify-center items-center">
          <p className="text-justify mx-0 mb-7 w-full">
            Our website offers a wide range of travel options, including
            flights, hotels, car rentals, and vacation packages. With our
            easy-to-use interface, you can quickly search and book your travel
            arrangements, all in one convenient place. Wheter you're looking for
            a relaxing beach vacation, a thirlling adventure, or a cultural
            immersion, e have the perfect destination for you.
          </p>
        </div>
        <div className="w-3/4">
          <Button>View All</Button>
        </div>
      </div>
      <GiPaperPlane size={500} color="#ffffff1a" className="paperPlane" />
    </section>
  );
};
