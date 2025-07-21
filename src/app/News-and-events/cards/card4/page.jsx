'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card4 = () => {
  const cards = [
        {
      id: 'card1',
      image: '/images/card1.webp',
      title: 'Egyptian HVN.TV – Beware of entity unlawfully trying associate with us',
      link: '/News-and-events/cards/card1',
    },
    {
      id: 'card2',
      image: '/images/card2.webp',
      title: "Nash Squared CEO, Bev White shortlisted for Computer Weekly’s 50 Most Influential Women in UK Tech",
      link: '/News-and-events/cards/card2',
    },
    {
      id: 'card3',
      image: '/images/card3.webp',
      title: 'Where are all the technologists? Talent shortages and what to do about them?',
      link: '/News-and-events/cards/card3',
    },
    {
      id: 'card4',
      image: '/images/card4.webp',
      title: 'Rachel Watts joins Harvey Nash Group as Global Marketing Director',
      link: '/News-and-events/cards/card4',
    },
    {
      id: 'card5',
      image: '/images/card5.webp',
      title: 'Harvey Nash Group pledge to use renewable energy by 2023',
      link: '/News-and-events/cards/card5',
    },
    {
      id: 'card6',
      image: '/images/card6.webp',
      title: 'Harvey Nash appoints cyber expert as Global CISO',
      link: '/News-and-events/cards/card6',
    },
  ];

  const isExternal = (url) => url.startsWith('http');

  return (
    <>
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/news.webp"
            alt="Candidates Hero Background"
            fill
            quality={100}
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide">
            News and Event
          </h1>
        </div>
      </section>

      <main className="px-6 py-12 max-w-3xl mx-auto text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-red-800">
          Rachel Watts joins Harvey Nash Group as Global Marketing Director for the Harvey Nash business
        </h1>

        <div className="mb-6">
          <Image
            src="/images/card4.webp"
            alt="Rachel Watts Welcome"
            width={800}
            height={600}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <p className="mb-4 text-lg leading-relaxed">
          We are delighted to announce that Rachel Watts has joined the Harvey Nash Group as Global Marketing Director for our Harvey Nash business.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Rachel will be key to taking the Harvey Nash brand to new heights, creating a platform for growth and building on Harvey Nash's strong reputation in the market.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Rachel will report to Jason Pyle, Managing Director Harvey Nash USA, with a dotted line to the regional and country Managing Directors within the Harvey Nash business. In addition to her role within Harvey Nash Rachel will also share marketing activities of Spinks, the Group’s brand focused on the start-up and scale-up market.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Rachel will work closely with the Group Marketing function, led by Rob Grimsey, which focuses on working with all the brands in the Group’s network, and also continues to build the Group’s global brand as a leading provider of technology and talent solutions.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Rachel joins us from GI Group where she was the Marketing and Communications Director. She brings with her deep expertise in developing and implementing multi-brand, cross-channel marketing and communication plans that support overall business growth objectives through customer and candidate acquisition, conversion and retention.
        </p>

        <p className="mb-4 text-lg leading-relaxed">
          Bev White, CEO of Harvey Nash Group commented: “As we grow as a Group, I am excited to welcome Rachel into this newly created role which will help us elevate our brand and marketing activities across the world.”
        </p>
      </main>

      <section className="py-10 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2">
          {cards.map((card) => {
            const external = isExternal(card.link);
            return (
              <div
                key={card.id}
                className="bg-white w-full max-w-xs mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={320}
                  height={200}
                  className="w-full h-36 object-cover rounded-t-lg"
                  quality={100}
                />
                <div className="p-3 flex flex-col justify-between h-40">
                  <h3 className="text-sm font-semibold text-blue-700 mb-2 hover:underline leading-snug">
                    {external ? (
                      <a href={card.link} target="_blank" rel="noopener noreferrer">
                        {card.title}
                      </a>
                    ) : (
                      <Link href={card.link}>{card.title}</Link>
                    )}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Card4;
