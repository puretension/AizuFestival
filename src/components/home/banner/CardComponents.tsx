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
      content: `아이즈(会津)는 후쿠시마의 세 지역 중 가장 서쪽에 위치한 지역입니다. 아이즈의 주요 도시는 츠루가 성으로 유명한 아이즈와카마츠입니다.
이곳에서는 에도 시대 말기의 역사적 배경과 관련된 깊이 뿌리내린 전통과 사무라이 문화를 볼 수 있습니다. 또한, 일본에서도 유명한 풍부한 자연환경을 자랑합니다.
아이즈 지역은 사방이 산으로 둘러싸여 있으며, 오우산맥 서쪽에 위치하여 동해 지역 특유의 기후를 나타냅니다. 또한 이 지역은 폭설 지대로도 잘 알려져 있습니다.
이렇듯, 아이즈 지역은 매우 매력적인 지역입니다.
`,
      englishContent: `Aizu (会津) is the westernmost region of Fukushima's three regions. Aizu's main city is Aizuwakamatsu, famous for Tsuruga Castle.
Here you can see deep-rooted traditions and samurai culture related to the historical background of the late Edo period. It also boasts a rich natural environment that is famous in Japan.
The Aizu region is surrounded by mountains on all sides, and is located to the west of the Ou Mountains, resulting in a climate unique to the Japan Sea region. This area is also known for its heavy snowfall.
In this way, the Aizu area is a very attractive area.`,
      imageSrc: '/images/aizu_castle_default.jpg',
    },
    {
      title: 'AIZU FESTIVAL',
      subtitle: '역사적 배경',
      content: `아이즈와카마츠는 사무라이 유산으로 일본에서도 널리 알려져 있습니다. 쓰루가조 성은 보신 전쟁 때 막부에 충성을 마지막까지 다하며 메이지 신 정부에게 ‘아침의 적’으로 여겨졌습니다. 이들은 마지막까지 막부에 충성하였으며, 유명한 백호대의 비극극도 아이즈에서 일어난 일입니다.
그리고 약 60년 후, 일본 황실과 아이즈의 영주의 손녀가 결혼하면서 황실에서 아이즈는 아침의 적이 아님을 공표 해줌으로써 아이즈는 일본 정부와 화해했습니다. 아이즈 주민들은 이 결혼을 기념하며 아이즈의 회복을 가능하게 한 ‘축하와 기쁨’의 정신을 후대에 전하기 위해 아이즈 축제를 시작하게 되었습니다.`,
      englishContent: `As a samurai heritage, Aizuwakamatsu is widely known in Japan. Tsurugazo Castle was considered the "enemy of the morning" by the new Meiji government, staying loyal to the shogunate to the end during the Boshin War. They remained loyal to the shogunate until the end, and the famous tragedy of the white tiger also happened in Aizu.
And about 60 years later, Aizu reconciled with the Japanese government by announcing in the Imperial Household that Aizu was not the enemy of the morning when the Japanese imperial family and the granddaughter of Aizu's lord married. In honor of the marriage, Aizu residents began the Aizu festival to deliver the "celebration and joy" spirit that enabled Aizu to recover.`,
      imageSrc: '/images/aizu_castle_day.png',
    },
    {
      title: 'NOW',
      subtitle: '회복된 현재상태',
      content: `후쿠시마 원전 사고 이후, 아이즈 지역은 회복과 미래로의 발전, 그리고 융화를 향한 여정을 시작했습니다. 역사적 갈등 이후 아이즈의 화합과 재건을 기념하며 시작된 아이즈 축제는 세대를 이어온 축하와 기쁨의 정신을 담고 있습니다.
      현대사회에서 이 축제는 새로운 의의를 가지게 되었습니다. 아이즈 주민들의 회복력과 끈질긴 정신을 기리는 것은 물론, 역경을 극복하고 더 밝은 미래를 향해 나아가려는 지역의 의지를 상징합니다. 아이즈 축제는 이제 단순히 지역의 전통과 문화를 기리는 것을 넘어, 지역사회의 연대와 희망, 그리고 공동체 정신을 기념하는 자리로 자리매김했습니다.
      아이즈 축제는 역사적 뿌리를 현재의 비전과 연결하며, 극복과 재생의 정신을 지속적으로 보여줍니다. 이는 지역 주민뿐만 아니라 방문객들에게도 강렬한 희망과 연대의 메시지를 전달하는 상징적 행사로 자리하고 있습니다.`,
      englishContent: `After the Fukushima nuclear accident, the Aizu region began its journey toward recovery, development into the future, and harmony. Started as a celebration of Aizu's harmony and reconstruction after the historical conflict, the Aizu festival is full of the spirit of celebration and joy that has continued for generations.
In modern society, the festival has taken on a new significance. In addition to honoring the resilience and tenacious spirit of the IZ residents, it also symbolizes the local community's willingness to overcome adversity and move toward a brighter future. The IZ festival has now become a place to celebrate community solidarity, hope, and community spirit beyond simply honoring local traditions and cultures.
The Aizu festival connects historical roots with the present vision, and continues to show the spirit of overcoming and regeneration. It is positioned as a symbolic event that conveys a strong message of hope and solidarity not only to local residents but also to visitors.
`,
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
