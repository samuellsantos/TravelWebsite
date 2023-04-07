import React from 'react';
import clientPhoto from '../../assets/client/client.jpg';

import { AiFillStar } from 'react-icons/ai';
import { SendEmail } from './email/SendEmail';

export const ClientTestimonial = () => {
  return (
    <section className="flex flex-col items-center justify-center text-white bg-[#0b1d27] py-24">
      <h3 className="text-3xl font-semibold mb-1">Our Clients</h3>
      <h1 className="text-5xl text-cyan font-semibold mb-20 ">
        Client Testimonial
      </h1>

      <div className="rounded-full w-32 h-32 overflow-hidden">
        <img src={clientPhoto} alt="UserPhoto" className="w-full" />
      </div>

      <h2 className="text-3xl text-cyan font-semibold mb-1">Joana Silven</h2>
      <div className="flex mb-8">
        <AiFillStar size={30} color="#ffd900" />
        <AiFillStar size={30} color="#ffd900" />
        <AiFillStar size={30} color="#ffd900" />
        <AiFillStar size={30} color="#ffd900" />
        <AiFillStar size={30} color="#ffd900" />
      </div>
      <p className="w-2/4 text-center">
        If you're looking for a unique and unforgettable travel experience, look
        no further than this travel website. <br />
        Their attention to detail, commitment tocustomer stisfaction, and wide
        range of offerings make them a top choice for any adventurer. Dont't
        just take my word for it - book your trip today and see for yourself
        what this amazing company has to offer!
      </p>
      <SendEmail />
    </section>
  );
};
