import React from 'react';
import { YoutubeVideo } from './YoutubeVideo';
import { GiPaperPlane } from 'react-icons/gi';
import { Button } from '../../Button/Button';
import '../AboutUs.css';

export const DiscoverAdventure = () => {
  return (
    <div>
      <section className=" text-white flex justify-center gap-x-9 w-full ">
        <YoutubeVideo />
        <div className="w-1/4 z-50">
          <h2 className="text-3xl font-semibold mb-7">About Us</h2>
          <h1 className="text-5xl text-cyan font-semibold mb-7">
            Discover Your Next Adventure
          </h1>
          <p className="text-justify m-0 w-4/4 mb-7">
            Our website offers a wide range of travel options, including
            flights, hotels, car rentals, and vacation packages. With our
            easy-to-use interface, you can quickly search and book your travel
            arrangements, all in one convenient place. Wheter you're looking for
            a relaxing beach vacation, a thirlling adventure, or a cultural
            immersion, e have the perfect destination for you.
          </p>
          <Button>View All</Button>
        </div>
        <GiPaperPlane size={500} color="#ffffff1a" className="paperPlane" />
      </section>
    </div>
  );
};
