'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const card5 = () => {
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
    Harvey Nash Group pledge to use renewable energy in European offices by 2023 on the way to achieve Net Zero
  </h1>

  <div className="mb-6">
    <Image
      src="/images/card5.webp"
      alt="Renewable Energy Pledge"
      width={800}
      height={600}
      className="rounded-lg shadow-lg w-full"
    />
  </div>

  <p className="mb-4 text-lg leading-relaxed">
    <strong>London, February 9th</strong> – Harvey Nash Group, the leading global provider of talent and technology solutions, publish their{' '}
    <a href="https://www.harveynashgroup.com/sustainability" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      Sustainability Report
    </a>{' '}
    today, which includes details of how they will achieve Net Zero by 2050.
  </p>

  <p className="mb-4 text-lg leading-relaxed">
    The first steps on the journey to Net Zero will be to make sure European offices are powered by renewable energy by 2023, a 50 per cent reduction in air travel globally by 2025, as well as working with suppliers to reduce carbon footprint in the wider supply chain.
  </p>

  <p className="mb-4 text-lg leading-relaxed">
    As part of the Sustainability Report, the Group have also shared their plans for having a positive social impact, which includes supporting mental health initiatives and focusing on diversity and inclusion. The Group has already made progress in this area with the launch of the{' '}
    <a href="https://www.harveynashgroup.com/wellbeing" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      Wellbeing Hub
    </a>
    , an open to all portal for health and wellbeing and the{' '}
    <a href="https://www.harveynashgroup.com/inclusion" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      Inclusion Passport
    </a>
    , to support employees who may need workplace adjustments due to a health condition, disability or another personal situation without having to have a difficult conversation multiple times if they change line manager or department.
  </p>

  <p className="mb-4 text-lg leading-relaxed">
    Harvey Nash Group Chief Executive Bev White commented: <em>“There’s no doubt we have an impact on people’s lives and careers, and the organisations and communities we work with. And it’s a responsibility we take very seriously. Our vision is to build limitless futures. We believe our goals for environment, sustainability and governance are key to achieving this.”</em>
  </p>

  <p className="mb-4 text-lg leading-relaxed">
    The use of renewable energy in the tech sector is of utmost importance. For more on the Group’s viewpoint on this, please read Chief Financial Officer, Chris Tilley’s{' '}
    <a href="https://www.harveynashgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      most recent article
    </a>{' '}
    on this very thing.
  </p>

  <p className="mb-4 text-lg leading-relaxed">
    To download the full report, please visit{' '}
    <a href="https://www.harveynashgroup.com/sustainability" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      www.harveynashgroup.com/sustainability
    </a>.
  </p>

  <h2 className="text-xl font-bold mt-8 mb-2 text-gray-900">About Harvey Nash Group</h2>
  <p className="mb-4 text-lg leading-relaxed">
    Harvey Nash Group are the leading global provider of talent and technology solutions.
  </p>
  <p className="mb-4 text-lg leading-relaxed">
    We’re equipped with a unique network, that realises the potential where people and technology meet. For over three decades we’ve been helping clients solve broad and complex problems, building and scaling their technology and digital capability.
  </p>
  <p className="mb-4 text-lg leading-relaxed">
    <a href="https://www.harveynashgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      www.harveynashgroup.com
    </a>
  </p>
  <p className="mb-4 text-lg leading-relaxed">
    Follow us on LinkedIn at{' '}
    <a href="https://www.linkedin.com/company/harvey-nash-group/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      https://www.linkedin.com/company/harvey-nash-group/
    </a>
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

export default card5;
