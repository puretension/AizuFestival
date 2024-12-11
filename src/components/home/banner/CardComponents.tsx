'use client';

import { IntroduceCard } from "./Card";


export const CardComponents = () => {
  const cards = [
    {
      title: 'AIZU',
      subtitle: 'about state',
      content:
        'Body text for your whole article or post. We\'ll put in some lorem ipsum to show how a filled-out page might look: Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content.',
      imageSrc: '/images/aizu_castle_default.jpg',
    },
    {
      title: 'AIZU FESTIVAL',
      subtitle: 'historical background',
      content:
        'Explore the rich history of Aizu Festival through a carefully curated experience that brings together cultural elements. Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content.',
      imageSrc: '/images/aizu_castle_day.png',
    },
    {
      title: 'NOW',
      subtitle: 'recover',
      content:
        'Dive into the revival and preservation of Aizu\'s traditions, as we showcase how the community is recovering and embracing its future. Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content.',
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
