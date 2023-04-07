import React from 'react';
import image1 from '../../assets/adventures/adventureImg1.jpg';
import image2 from '../../assets/adventures/adventureImg2.jpg';
import image3 from '../../assets/adventures/adventureImg3.jpg';

import { AiOutlineCalendar } from 'react-icons/ai';
import { AiOutlineComment } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';

const cards = [
  {
    src: image1,
    type: 'Life Style',
    date: 'Mar 2, 2023',
    title: 'A place where start new life with adventure travel',
    about:
      'Are you planning a big trip to The Big Island and you want to know everthing you can possibly know before going? When planning a trip, I love doing as much research as possible...',
  },
  {
    src: image2,
    type: 'Advenure',
    date: 'Jan 2, 2023',
    title: 'Things to know before traveling to the big Island',
    about:
      'Are you planning a big trip to The Big Island and you want to know everthing you can possibly know before going? When planning a trip, I love doing as much research as possible...',
  },
  {
    src: image3,
    type: 'Life Style',
    date: 'Mar 2, 2023',
    title: 'Journeys are best measured with friends',
    about:
      'Are you planning a big trip to The Big Island and you want to know everthing you can possibly know before going? When planning a trip, I love doing as much research as possible...',
  },
];

export const BlogCard = () => {
  return (
    <section className="flex w-full justify-center items-center gap-20 flex-wrap mb-16">
      {cards.map((card) => (
        <div key={card.title}>
          <div className="relative w-96">
            <img
              src={card.src}
              alt={card.type}
              className="rounded-tl rounded-tr cursor-pointer"
            />
            <p className="flex items-center justify-between bg-[#00000097] absolute bottom-0 w-full p-2">
              {card.type}
              <span className="flex items-center gap-x-2">
                <AiOutlineCalendar />
                {card.date}
              </span>
            </p>
          </div>

          {/* Card Details */}
          <div className="bg-[#0d3d57] w-96 p-8 flex flex-col gap-y-4 rounded-br rounded-bl">
            <div className="text-cyan font-bold flex gap-x-4">
              <p className="flex items-center gap-x-2">
                <FaUserCircle color="" />{' '}
                <span className="text-white">Admin</span>
              </p>
              <p className="flex items-center gap-x-2">
                <AiOutlineComment />{' '}
                <span className="text-white">7 Comments</span>
              </p>
            </div>
            <h3 className="text-2xl font-semibold mb-1 text-cyan cursor-pointer">
              {card.title}
            </h3>
            <p>{card.about}</p>
            <p className="flex text-cyan items-center cursor-pointer hover:underline">
              <span>Read more</span> <BsArrowRightShort size={25} />
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
