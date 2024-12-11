'use client';

import React from 'react';
import { motion } from 'framer-motion';


type CustomCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
};

const CustomCard = ({ title, description, imageSrc, link }: CustomCardProps) => {
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
        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-500 font-semibold hover:underline"
          >
            기사 보러가기
          </a>
        )}
      </div>
    </motion.div>
  );
};

const MagazinePage = () => {
  const articles = [
    {
      imageSrc: 'https://www.aizukanko.com/kk/festival/wp-content/uploads/2016/01/IMG_5704.jpg',
      title: '후쿠시마 아이즈 축제의 매력',
      description: '아이즈 축제는 동일본대지진 복구를 기원하며 후쿠시마 지역의 전통과 문화를 조명하는 대표적인 행사입니다. 초겨울의 밤하늘을 수놓는 약 만발의 불꽃이 압권입니다. 또한, 다양한 노점과 전통 공연을 통해 방문객들에게 독특한 경험을 선사합니다.',
      link: 'https://ko.japantravel.com/%ED%9B%84%EC%BF%A0%EC%8B%9C%EB%A7%88/%ED%9B%84%EC%BF%A0%EC%8B%9C%EB%A7%88%EC%9D%98-%EC%95%84%EC%9D%B4%EC%A6%88-%EC%B6%95%EC%A0%9C/64831',
    },
    {
      imageSrc: 'https://a2.cdn.japantravel.com/photo/23485-129215/800!/fukushima-aizu-festival-in-fukushima-129215.jpg',
      title: '아이즈 축제 가이드',
      description: '아이즈와카마쓰 시는 풍부한 사무라이 유산으로 잘 알려져 있습니다. 쓰루가조 성 주변과 주요 거리에서는 매년 전통적인 퍼레이드와 다양한 문화 행사가 열리며, 사무라이 문화와 역사를 직접 체험할 수 있습니다.',
      link: 'https://www.aizukanko.com/kk/festival/aizu-matsuri',
    },
    {
      imageSrc: 'https://img.cooljapan-videos.com/files/articles/8lqi7ias/thumbnail/0d9f5e3a84d2032fb750b93ef111991f.jpg',
      title: '아이즈 불꽃축제 리뷰',
      description: 'Cool Japan에서 소개한 아이즈 불꽃축제는 동일본대지진 복구를 기원하며 약 만발의 불꽃이 후쿠시마 밤하늘을 수놓는 장관을 연출합니다. 일본 불꽃 장인들이 참여해 예술적인 불꽃 연출을 선보입니다.',
      link: 'https://cooljapan-videos.com/ko/articles/8lqi7ias',
    },
  ];

  return (
    <div>
      <header className="bg-blue-500 py-6 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Magazine: 아이즈 축제</h1>
          <p className="text-lg mt-2">아이즈 축제에 대한 흥미로운 기사와 블로그를 만나보세요.</p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <CustomCard
              key={index}
              title={article.title}
              description={article.description}
              imageSrc={article.imageSrc}
              link={article.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MagazinePage;
