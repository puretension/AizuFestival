'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export const IntroduceCard = ({
  title,
  subtitle,
  content,
  imageSrc,
  onLearnMore,
}: {
  title: string;
  subtitle: string;
  content: string;
  imageSrc: string;
  onLearnMore: () => void;
}) => {
  return (
    <motion.div
      className="flex flex-row bg-white rounded-xl shadow-lg overflow-hidden mb-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Image */}
      <div className="w-1/2 relative">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
          className="w-full h-auto object-cover rounded-l-xl"
        />
      </div>

      {/* Right Content */}
      <div className="w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">{subtitle}</p>
        <p className="text-gray-700 leading-relaxed">{content}</p>

        <motion.button
          onClick={onLearnMore}
          className="mt-6 text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-2 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};


export default IntroduceCard;