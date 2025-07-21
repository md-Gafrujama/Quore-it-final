'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const card7 = () => {
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
    Harvey Nash wins prestigious Best Company to Work for Award
  </h1>

  <div className="mb-6">
    <Image
      src="/images/card7.webp"
      alt="Harvey Nash award ceremony"
      width={800}
      height={600}
      className="rounded-lg shadow-lg w-full"
    />
  </div>

  <p className="mb-4 text-lg leading-relaxed">
    London, 26th November – Harvey Nash, the technology recruitment division of Harvey Nash Group, has won a prestigious award from the UK’s leading recruitment sector body, the Recruitment and Employment Confederation.
  </p>

  <p className="mb-4 text-lg leading-relaxed">
    Winning the Best Company to Work for Award in the 50+ staff employer category, Harvey Nash beat stiff competition to be recognised as the UK’s leading large employer in the recruitment sector.
  </p>

  <h2 className="text-xl font-semibold mt-6 mb-2">Harvey Nash’s award nomination highlighted:</h2>
  <ul className="list-disc list-inside space-y-2 mb-6 text-lg leading-relaxed">
    <li>A dedication to putting its people first</li>
    <li>
      A major commitment to personal development, including structured career paths and innovative training such as bite sized ‘HIIT’ skills development sessions
    </li>
    <li>
      A fun, open and rewarding environment where colleagues have a strong voice in how the organisation is run, from feedback sessions with the CEO through to membership of decision making groups like our diversity and inclusion board
    </li>
    <li>
      Generous and flexible employee benefits, including flexible working and ‘summer hours’
    </li>
    <li>A commitment to inclusion and wellbeing both inside and outside our organisation</li>
  </ul>

  <h2 className="text-xl font-semibold mt-8 mb-2">Bev White, CEO of Harvey Nash Group, commented:</h2>
  <p className="italic text-lg leading-relaxed">
    “A recruitment company is nothing without its people, and creating a rewarding, inclusive and fun environment to work in has been our number one priority. We set out to be the most attractive employer in our sector and I am so delighted that we have received this recognition.”
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

export default card7;
