import React from 'react';
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';
import img3 from '../../../assets/img3.jpg';
import img4 from '../../../assets/img4.jpg';
import img5 from '../../../assets/img5.jpg';
import img6 from '../../../assets/img6.jpg';
import img7 from '../../../assets/img7.jpg';
import img8 from '../../../assets/img8.jpg';

const images = [
  {
    id: 1,
    src: img4,
  },
  {
    id: 2,
    src: img8,
  },
  {
    id: 3,
    src: img6,
  },
  {
    id: 4,
    src: img1,
  },
  {
    id: 5,
    src: img5,
  },
  {
    id: 6,
    src: img3,
  },
  {
    id: 7,
    src: img7,
  },
  {
    id: 8,
    src: img2,
  },
];

export const Photos = () => {
  return (
    <section className=" grid gap-8 grid-cols-4  grid-rows-4 mt-20 flex-wrap">
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt="Imagens" className={`rounded`} />
        </div>
      ))}
    </section>
  );
};
