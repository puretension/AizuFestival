'use client';

import { IntroduceCard } from "./Card";


export const CardComponents = () => {
  const cards = [
    {
      title: 'AIZU',
      subtitle: '아이즈 지역 소개',
      content: `아이즈(会津)는 후쿠시마의 세 지역 중 가장 서쪽에 위치한 지역입니다. 아이즈의 주요 도시는 츠루가 성으로 유명한 아이즈와카마츠입니다.
이곳에서는 에도 시대 말기의 역사적 배경과 관련된 깊이 뿌리내린 전통과 사무라이 문화를 볼 수 있습니다. 또한, 일본에서도 유명한 풍부한 자연환경을 자랑합니다.
아이즈 지역은 사방이 산으로 둘러싸여 있으며, 오우산맥 서쪽에 위치하여 동해 지역 특유의 기후를 나타냅니다. 또한 이 지역은 폭설 지대로도 잘 알려져 있습니다.
이렇듯, 아이즈 지역은 매우 매력적인 지역입니다.
`,
      imageSrc:'/images/aizu_castle_default.jpg',
    },
    {
      title: 'AIZU FESTIVAL',
      subtitle: '역사적 배경',
      content: `아이즈와카마츠는 사무라이 유산으로 일본에서도 널리 알려져 있습니다. 쓰루가조 성은 보신 전쟁 때 막부에 충성을 마지막까지 다하며 메이지 신 정부에게 ‘아침의 적’으로 여겨졌습니다. 이들은 마지막까지 막부에 충성하였으며, 유명한 백호대의 비극극도 아이즈에서 일어난 일입니다.
그리고 약 60년 후, 일본 황실과 아이즈의 영주의 손녀가 결혼하면서 황실에서 아이즈는 아침의 적이 아님을 공표 해줌으로써 아이즈는 일본 정부와 화해했습니다. 아이즈 주민들은 이 결혼을 기념하며 아이즈의 회복을 가능하게 한 ‘축하와 기쁨’의 정신을 후대에 전하기 위해 아이즈 축제를 시작하게 되었습니다.
`,
      imageSrc: '/images/aizu_castle_day.png',
    },
    {
      title: 'NOW',
      subtitle: '회복된 현재상태',
      content: `후쿠시마 원전 사고 이후, 아이즈 지역은 회복과 미래로의 발전, 그리고 융화를 향한 여정을 시작했습니다. 역사적 갈등 이후 아이즈의 화합과 재건을 기념하며 시작된 아이즈 축제는 세대를 이어온 축하와 기쁨의 정신을 담고 있습니다.
      현대사회에서 이 축제는 새로운 의의를 가지게 되었습니다. 아이즈 주민들의 회복력과 끈질긴 정신을 기리는 것은 물론, 역경을 극복하고 더 밝은 미래를 향해 나아가려는 지역의 의지를 상징합니다. 아이즈 축제는 이제 단순히 지역의 전통과 문화를 기리는 것을 넘어, 지역사회의 연대와 희망, 그리고 공동체 정신을 기념하는 자리로 자리매김했습니다.
      아이즈 축제는 역사적 뿌리를 현재의 비전과 연결하며, 극복과 재생의 정신을 지속적으로 보여줍니다. 이는 지역 주민뿐만 아니라 방문객들에게도 강렬한 희망과 연대의 메시지를 전달하는 상징적 행사로 자리하고 있습니다.`,
      imageSrc: '/images/aizu_castle_night.png',
    },
  ];

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
          />
        ))}
      </div>
    </section>
  );
};

export default CardComponents;
