import React, { useState } from 'react';
import { IntroduceCard } from './Card';

const Modal = ({
  isOpen,
  onClose,
  title,
  content,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{content}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};


export const CardComponents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<{
    title: string;
    content: string;
  } | null>(null);

  const cards = [
    {
      title: 'AIZU',
      subtitle: '아이즈 지역 소개',
      content: `아이즈(会津)는 후쿠시마의 세 지역 중 가장 서쪽에 위치한 지역입니다...`,
      englishContent: `Aizu is the westernmost of the three regions of Fukushima Prefecture...`,
      imageSrc: '/images/aizu_castle_default.jpg',
    },
    {
      title: 'AIZU FESTIVAL',
      subtitle: '역사적 배경',
      content: `아이즈와카마츠는 사무라이 유산으로 일본에서도 널리 알려져 있습니다...`,
      englishContent: `Aizuwakamatsu is widely known for its samurai heritage...`,
      imageSrc: '/images/aizu_castle_day.png',
    },
    {
      title: 'NOW',
      subtitle: '회복된 현재상태',
      content: `후쿠시마 원전 사고 이후, 아이즈 지역은 회복과 미래로의 발전...`,
      englishContent: `After the Fukushima nuclear accident, the Aizu region embarked on...`,
      imageSrc: '/images/aizu_castle_night.png',
    },
  ];

  const openModal = (card: { title: string; englishContent: string }) => {
    setSelectedCard({ title: card.title, content: card.englishContent });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <IntroduceCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            content={card.content}
            imageSrc={card.imageSrc}
            onLearnMore={() => openModal(card)}
          />
        ))}
      </div>
      {selectedCard && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedCard.title}
          content={selectedCard.content}
        />
      )}
    </section>
  );
};

export default CardComponents;
