'use client';

import HomeBanner from '@/components/home/banner/HomeBanner';
import React from 'react';
import { motion } from 'framer-motion';

type CustomCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const CustomCard = ({ title, description, imageSrc }: CustomCardProps) => {
  return (
    <motion.div
      className="flex flex-row bg-white rounded-xl shadow-lg overflow-hidden mb-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Image */}
      <div className="w-1/2 relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover rounded-l-xl"
        />
      </div>

      {/* Right Content */}
      <div className="w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const ProgramPage = () => {
  const cardData = [
    {
      image: 'https://www.andtrip.jp/images/d6ea140b535068a2f3fab7f6d3287dcd2c2d6ba5.JPG',
      title: '아이즈 축제의 역사',
      description: '아이즈 축제는 아이즈 사람들의 열정과 전통을 계승한 대표적인 행사입니다. 과거와 현재를 연결하는 이 축제는 방문객들에게 독특한 경험을 제공합니다.',
    },
    {
      image: 'https://www.andtrip.jp/images/20.jpg',
      title: '아이즈 번 공개 행렬',
      description: '약 600명의 참가자가 무사 복장을 하고 행렬을 이루는 아이즈 번 공개 행렬은 축제의 하이라이트입니다. 역사적 배경과 전통을 느껴보세요.',
    },
    {
      image: 'https://www.andtrip.jp/images/634-1874.jpg',
      title: '공주의 역할',
      description: '축제의 중심에서 역사적 인물인 공주의 역할을 재현하며 아이즈의 자부심을 보여줍니다.',
    },
    {
      image: 'https://www.andtrip.jp/images/DSC09737.JPG',
      title: '등불 행렬',
      description: '아이들이 등불을 들고 행진하며 축제의 시작을 알리는 등불 행렬은 따뜻하고 감동적인 분위기를 연출합니다.',
    },
    {
      image: 'https://www.andtrip.jp/images/004600158.jpg',
      title: '아이즈 반다이 마운틴 댄스',
      description: '민요와 함께하는 아이즈 반다이 마운틴 댄스는 전통과 현대가 조화를 이루는 축제의 또 다른 매력입니다.',
    },
    {
      image: 'https://www.andtrip.jp/images/634-1569.jpg',
      title: '축제의 마무리',
      description: '축제의 마지막은 아이즈의 문화와 역사를 기리는 퍼포먼스로 장식됩니다.',
    },
  ];

  return (
    <main >

      {/* 소개 카드 섹션 */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          {cardData.map((card, index) => (
            <CustomCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProgramPage;