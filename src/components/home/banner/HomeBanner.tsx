'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const images = [
  'https://www.aizukanko.com/kk/festival/wp-content/themes/AizuMatsuri2/assets/images/mv-image-01.jpg?20230602',
  'https://www.aizukanko.com/kk/festival/wp-content/themes/AizuMatsuri2/assets/images/mv-image-02.jpg?20230602',
  'https://www.aizukanko.com/kk/festival/wp-content/themes/AizuMatsuri2/assets/images/mv-image-03.jpg?20230602',
];

const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="flex items-center justify-center h-[calc(80vh-4rem)] relative overflow-hidden">
      <motion.div
        key={currentIndex}
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        transition={{ duration: 0 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <img
          src={images[currentIndex]}
          alt={`Aizu Festival ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute bottom-4 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        ▶
      </button>
    </section>
  );
};

export default HomeBanner;
