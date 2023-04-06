import React from 'react';
import img1 from '../../../assets/img1.jpg';
import img2 from '../../../assets/img2.jpg';
import img3 from '../../../assets/img3.jpg';
import img4 from '../../../assets/img4.jpg';
import img5 from '../../../assets/img5.jpg';
import img6 from '../../../assets/img6.jpg';
import img7 from '../../../assets/img7.jpg';
import img8 from '../../../assets/img8.jpg';
import './Photos.css';

const images = [
  {
    id: 1,
    src: img1,
  },
  {
    id: 2,
    src: img4,
  },
  {
    id: 3,
    src: img3,
  },
  {
    id: 4,
    src: img6,
  },
  {
    id: 5,
    src: img5,
  },
  {
    id: 6,
    src: img2,
  },
  {
    id: 7,
    src: img7,
  },
  {
    id: 8,
    src: img6,
  },
];

export const Photos = () => {
  return (
    <section className="containerPhoto mt-20">
      {images.map((image) => (
        <div key={image.id} className="photo">
          <img src={image.src} alt="Imagens" className={`rounded`} />
        </div>
      ))}
    </section>
  );
};
