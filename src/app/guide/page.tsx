'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CustomCard = ({ title, description, imageSrc }) => {
  return (
    <motion.div
      className="flex flex-row bg-white rounded-xl shadow-lg overflow-hidden mb-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-1/2 relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover rounded-l-xl"
        />
      </div>

      <div className="w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const GuidePage = () => {
  const cardData = [
    {
      imageSrc: 'https://www.andtrip.jp/images/b942709887a0a9b7873741840bb55cf48b2239a2.jpg',
      title: '아이즈 축제의 매력과 역사',
      description:
        '아이즈 축제는 후쿠시마현 아이즈와카마츠시에서 매년 열리는 전통 행사입니다. 이 축제는 아이즈 번의 유서 깊은 역사를 기념하며, 전통과 현대가 조화를 이루는 이벤트로 유명합니다.',
    },
    {
      imageSrc: 'https://www.andtrip.jp/images/e72de2024e35265a64abd5f2287569839328f9bf.jpg',
      title: '전야제를 밝히는 등불 행렬',
      description:
        '축제의 시작을 알리는 등불 행렬은 도시의 어린이와 지역 주민들이 함께 참여하는 행사로, 쓰루가조를 배경으로 한 환상적인 풍경이 특징입니다.',
    },
    {
      imageSrc: 'https://www.andtrip.jp/images/59bd964c66622f02fc063ba372e173d2cfb704ec.JPG',
      title: '웅장한 아이즈 번 공개 행렬',
      description:
        '아이즈 번 공개 행렬은 600여 명의 참가자들이 전통 무사 복장을 입고 행진하는 축제의 하이라이트입니다. 전통과 역사를 생생히 체험할 수 있는 특별한 기회입니다.',
    },
    {
      imageSrc: 'https://www.andtrip.jp/images/699dceb92db4ff07a04217a61f4c607bc0d8ea23.jpeg',
      title: '아이즈의 명소를 둘러보는 렌탈 사이클',
      description:
        '아이즈와카마츠 시내는 자전거를 대여하여 효율적으로 관광할 수 있는 명소들로 가득합니다. 자연과 역사를 동시에 체험할 수 있는 렌탈 사이클은 관광객들에게 인기 있는 선택입니다.',
    },
  ];

  return (
    <div>
      <main className="container mx-auto py-10 px-4">
        <section className="mb-12">
        <h2 className="text-gray-700 text-3xl font-bold mb-4">아이즈 축제 안내</h2>
          <p className="text-gray-900 leading-relaxed text-center max-w-2xl mx-auto">
            아이즈 축제는 전통적인 가치와 현대적인 즐거움을 함께 제공하는 후쿠시마의 대표적인 축제입니다. 다양한 프로그램과 이벤트로 가득한 이 축제는 방문객들에게 잊지 못할 경험을 선사합니다.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-gray-700 text-3xl font-bold mb-4">오시는 길</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            JR 아이즈와카마츠 역에서 주유 버스 '하이카라 산' 또는 '아카베'를 이용하여 쓰루가조 입구에 하차 후 도보로 5분 거리에 있습니다. 축제 기간 동안 교통 통제가 있을 수 있으니 사전에 경로를 확인하시기 바랍니다.
          </p>
          <img
            src="https://www.andtrip.jp/images/cf367ed8c53851dc48bf7b6ecf16787b779626f1.jpeg"
            alt="아이즈와카마츠 역"
            className="rounded-lg shadow-lg w-2/3 mx-auto object-cover"
          />
        </section>

        {cardData.map((card, index) => (
          <CustomCard
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </main>

      <footer className="bg-gray-200 py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500">© JR 동일본 뷰 관광 판매 주식회사 ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
};

export default GuidePage;
