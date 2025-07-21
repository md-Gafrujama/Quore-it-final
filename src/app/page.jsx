 "use client";

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
// import NewsEvent from '/News-and-events';
// import { Link } from 'react-router-dom';
 import Image from 'next/image';
import { Home } from 'lucide-react';
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
      link: 'https://www.harveynash.com/news/bev-white-shortlisted-computer-weekly-influential-women',
    },
    {
      id: 'card3',
      image: '/images/card3.webp',
      title: 'Where are all the technologists? Talent shortages and what to do about them?',
      link: 'https://www.harveynash.com/news/where-are-the-technologists',
    },
    {
      id: 'card4',
      image: '/images/card4.webp',
      title: 'Rachel Watts joins Harvey Nash Group as Global Marketing Director',
      link: 'https://www.harveynash.com/news/rachel-watts-marketing-director',
    },
    {
      id: 'card5',
      image: '/images/card5.webp',
      title: 'Harvey Nash Group pledge to use renewable energy by 2023',
      link: 'https://www.harveynash.com/news/renewable-energy-net-zero',
    },
    {
      id: 'card6',
      image: '/images/card6.webp',
      title: 'Harvey Nash appoints cyber expert as Global CISO',
      link: 'https://www.harveynash.com/news/global-ciso-cyber-expert',
    },
    {
      id: 'card7',
      image: '/images/card7.webp',
      title: 'Harvey Nash wins prestigious Best Company to Work for Award',
      link: 'https://www.harveynash.com/news/harvey-nash-best-company-award',
    },
    {
      id: 'card8',
      image: '/images/card8.webp',
      title: 'Global tech threatened as skills crisis reaches high',
      link: 'https://www.harveynash.com/news/global-tech-skills-crisis',
    },
    {
      id: 'card9',
      image: '/images/card9.webp',
      title: 'National Coming Out Day',
      link: 'https://www.harveynash.com/news/national-coming-out-day',
    },
  ];
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
 const isExternal = (url) => url.startsWith('http');
const Firstpage = () => {
  return (

     <> 
          <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/jobs1_hero.jpg" // Replace with your actual hero background image
          alt="Candidates Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl sm:text-xl md:text-4xl lg:text-4xl font-bold text-white tracking-wide">
          Technology Recruitment, <br/>IT Outsourcing and Leadership Services
        </h1>
      </div>
    </section>

 <section className="flex flex-col items-center justify-center text-center px-4 py-12">
  <h1 className="text-4xl md:text-5xl font-extrabold mb-6 mt-4">About us</h1>
  <p className="text-lg md:text-xl max-w-2xl mb-12 text-gray-700">
   A pioneer in professional recruitment and IT outsourcing
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
    <div className="flex flex-col items-center">
      <span className="text-3xl mb-2 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-transparent bg-clip-text">▼</span>
      <p className="font-extrabold text-lg">Jobs & Careers </p>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-3xl mb-2 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-transparent bg-clip-text">▼</span>
      <p className="font-extrabold text-lg">What we do</p>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-3xl mb-2 bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] text-transparent bg-clip-text">▼</span>
      <p className="font-extrabold text-lg">Our Locations</p>
    </div>
  </div>
</section>
<section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Text Content */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Our Company
          </h2>
          <p className="text-gray-700 text-justify mb-4">
            Established in 1988, Harvey Nash has supported many of the world&apos;s leading
            organisations to recruit, source and manage the highly skilled talent they need to
            succeed in an increasingly competitive and technology driven world.
          </p>
          <p className="text-gray-700  text-justify mb-4">
            We work with clients, both large and small, to deliver a portfolio of services:
            technology recruitment, IT outsourcing and leadership services.
          </p>
          <a href="#" className="text-blue-600 underline hover:text-blue-800 transition">
            Learn more about What we do
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/images/laptop_globe.webp"
            alt="Laptop with globe overlay"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src="/images/business-contract.webp"
            alt="Business handshake over contract"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Our Global Reach
          </h2>
          <p className="text-gray-700 mb-4">
            Harvey Nash is part of{' '}
            <a href="#" className="text-blue-600 text-justify underline hover:text-blue-800 transition">
              Nash Squared
            </a>
            , the leading global provider of talent and technology solutions.
          </p>
          <p className="text-gray-700  text-justify mb-4">
            With over 3,000 employees in 36 locations across the USA, Europe and Asia-Pacific the
            Company has the reach and resources of a global organisation, whilst fostering a culture
            of innovation and agility that empowers its people to respond to constantly changing
            client needs.
          </p>
          <a href="#" className="text-blue-600 underline hover:text-blue-800 transition">
            Find out more about Our Company
          </a>
        </motion.div>
      </div>
    </section>
      <div className="w-full bg-gradient-to-br from-[#c5f82a] to-[#00d9a6]  text-white px-6 py-12 mt-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left min-h-[40vh]">
    
    {/* Column 1 */}
    <div>
      <h3 className="text-2xl font-extrabold mb-4 text-black/80">Choose your location</h3>
      <div className="grid grid-cols-2 gap-2 text-black/90 text-base">
        <span>Belgium</span>
        <span>Canada</span>
        <span>Germany</span>
        <span>Ireland</span>
        <span>Netherlands</span>
        <span>Poland</span>
        <span>USA</span>
        <span>United Kingdom</span>
      </div>
    </div>

    {/* Spacer */}
    <div className="hidden md:block" />

    {/* Column 2 */}
    <div>
      <h3 className="text-2xl font-extrabold mb-4 text-black/80">Site</h3>
      <ul className="space-y-1  text-black/90">
        <li>Nash Squared</li>
        <li>Workforce Solutions</li>
      </ul>
    </div>
  </div>
</div>
   <h1 className="text-5xl font-extrabold mb-4 mt-24 px-10 text-black/80">Latest Harvey Nash News</h1>
  <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          {cards.map((card) => {
            const external = isExternal(card.link);
            return (
              <div
                key={card.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover rounded-t-lg"
                  quality={100}
                />
                <div className="p-6 flex flex-col justify-between h-60">
                  <h3 className="text-lg font-semibold text-blue-700 mb-4 hover:underline">
                    {external ? (
                      <a href={card.link} target="_blank" rel="noopener noreferrer">
                        {card.title}
                      </a>
                    ) : (
                      <Link href={card.link}>{card.title}</Link>
                    )}
                  </h3>

                  {external ? (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md text-center"
                    >
                      FIND OUT MORE
                    </a>
                  ) : (
                    <Link href={card.link}>
                      <button className="cursor-pointer bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md">
                        FIND OUT MORE
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
  <div
      className="bg-cover bg-center w-full min-h-[60vh] flex flex-col justify-center items-center text-white text-center"
      style={{ backgroundImage: "url('/images/keyboard.jpg')" }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
        How can we help?
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-4xl drop-shadow-md px-4">
        If you would like us to contact you with more information on what we do and what we can offer, please let us know.
      </p>
 <Link href="/Contact-us">
  <button className="cursor-pointer bg-green-300 hover:bg-gradient-to-br from-[#c5f82a] to-[#00d9a6] font-semibold py-3 px-6 rounded transition-all duration-300 shadow-md">
    CONTACT US
  </button>
</Link>

    </div>
  
    </>
  );
};

export default Firstpage;