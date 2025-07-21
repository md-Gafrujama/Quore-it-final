'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const card9 = () => {
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
    National Coming Out Day
  </h1>

  <div className="mb-6">
    <Image
      src="/images/card9.webp"
      alt="National Coming Out Day Banner"
      width={800}
      height={600}
      className="rounded-lg shadow-lg w-full"
    />
  </div>

  <p className="italic mb-4 text-lg">
    <strong>What is National Coming Out Day?</strong><br />
    Oct. 11, 2021 will mark the 33rd National Coming Out Day, which is where we collectively celebrate and mark LGBTQIA+ awareness for their continued fight for equal rights and acceptance. It is an opportunity to come out for the first time, to share a coming out story, to support others who might be struggling to accept or disclose their identity, or simply to promote being out and being part of the LGBTQIA+ community. We’re delighted to share Director of Higher Education at{' '}
    <a
      href="https://www.alumniglobal.com"
      className="text-blue-600 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Alumni Global
    </a>,{' '}
    <a
      href="https://www.alumniglobal.com/owen-francis"
      className="text-blue-600 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Owen Francis
    </a>' story.
  </p>

  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
    A conversation with Owen Francis
  </h2>

  <div className="mb-6">
    <Image
      src="/images/person.jpg"
      alt="Owen Francis"
      width={400}
      height={400}
      className="rounded-lg shadow-md"
    />
  </div>

  <h3 className="text-lg font-semibold italic mb-4 text-gray-800">
    How do you celebrate PRIDE and what does it mean to you?
  </h3>

  <p className="mb-4 text-lg leading-relaxed">
    Pride is an interesting one for me; I am an ‘out’ transgender man and so a visible member of the LGBTQ+ community, although in recent years I’ve certainly not been as active in participating in Pride celebrations. Before I came out as transgender ten years ago and subsequently began the process of transitioning, I felt a lot of shame in being trans and felt there was something inherently wrong with me, and so in fact pride was the least thing I felt about my identity...
  </p>

  <p className="mb-4 text-lg leading-relaxed">
    I met others like me at events like Pride, and I also met those like me who were scared of coming out but who knew, through the visibility of things like Pride, that there was a life of acceptance, happiness and freedom available to them...
  </p>

  <p className="mb-4 text-lg leading-relaxed">
    This was critical when I was finding my feet in my own identity as a man, and navigating things like depression and anxiety that can often come with the process of transitioning, as well as elation!...
  </p>

  <p className="mb-4 text-lg leading-relaxed">
    <strong>
      <a
        href="https://www.stonewall.org.uk"
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Stonewall
      </a>
    </strong>, for example, the UK’s leading charity for LGBTQ+ people, was built on the back of what you might think of as ‘ruptures’ in the political system...
  </p>

  <p className="mb-4 text-lg leading-relaxed">
    Don’t get me wrong, I love all of that. I don’t know anyone that doesn’t love that, but I think it’s important to remember that a lot of where Pride came from was struggle...
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

export default card9;
