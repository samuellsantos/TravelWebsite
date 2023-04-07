import React from 'react';
import norway from '../../assets/Promotions/norwayPromotion.jpg';
import venice from '../../assets/Promotions/venicePromotion.jpg';
import vietnam from '../../assets/Promotions/vietnamPromotion.jpg';

import { Filter } from '../../components/Main/Filters/Filter';
import { Button } from '../../components/Button/Button';

import { BsCamera } from 'react-icons/bs';
import { BiWine } from 'react-icons/bi';
import { RiShipLine } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';

const cardsPromotion = [
  {
    src: norway,
    icon: <Filter icon={<BsCamera size={40} />} />,
    name: 'Norway',
    local: 'Europe',
    historical: {
      type: 'Spot',
      price: '400$',
    },
    text: 'From the stunning beaches of Bali tothe bustling streets of Tokyo, our website offers a veriety of travel options to suit your interests and budget. Our customer service team is avaliable 24/7 to assist you with any questions.',
    button: <Button />,
  },
  {
    src: venice,
    icon: <Filter icon={<RiShipLine size={40} />} />,
    name: 'Venice',
    local: 'Europe',
    historical: {
      type: 'Cultural',
      price: '450$',
    },
    text: 'From the stunning beaches of Bali tothe bustling streets of Tokyo, our website offers a veriety of travel options to suit your interests and budget. Our customer service team is avaliable 24/7 to assist you with any questions or concerns you may have, so you can focues on enjoying your trip. We look forward to helping you plan your next adventure',
  },
  {
    src: vietnam,
    icon: <Filter icon={<BiWine size={40} />} />,
    name: 'Vietnam',
    local: 'Asia',
    historical: {
      type: 'Cultural',
      price: '400$',
    },
    text: 'From the stunning beaches of Bali tothe bustling streets of Tokyo, our website offers a veriety of travel options to suit your interests and budget. Our customer service team is avaliable 24/7 to assist you with any questions.',
  },
];

export const PromotionsCard = () => {
  return (
    <div className="flex gap-x-10">
      {cardsPromotion.map((card) => (
        <div key={card.name}>
          <div className="relative overflow-hidden ">
            <img
              src={card.src}
              alt={card.name}
              className="w-96 rounded-tr rounded-tl"
            />
            <div className="absolute top-40 left-64">{card.icon}</div>
          </div>
          <div className="bg-[#0d3d57]">
            <p className="flex items-center justify-between p-4 font-bold text-2xl  border-b-2 border-[#0b1d27]">
              {card.name}{' '}
              <span className="flex items-center text-xl">
                <GoLocation />
                {card.local}
              </span>
            </p>
            <p>
              Historical <br /> {card.historical.type}{' '}
              <span>{card.historical.price}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
