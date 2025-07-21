 // 'use client';

// import React, { useState } from 'react';
// import logo from "@/assets/logo.png"
// import Link from 'next/link';
// import Image from 'next/image';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navItems = [
//     { name: 'FIND TECH JOBS', href: '/Find-tech-jobs' },
//     { name: 'FIND TECH TALENT', href: '/Find-tech-talent' },
//     { name: 'WHAT WE DO', href: '/What-we-do' },
//     { name: 'NEWS & EVENTS', href: '/News-and-events' },
//     { name: 'OUR COMPANY', href: '/Our-company' },
//     { name: 'CONTACT US', href: '/Contact-us' },
//   ];

//   return (
//     <nav className="absolute top-0 left-0 w-full z-50 bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="block">
//               <Image
//                 src={logo} // Replace with your actual logo path
//                 alt="Harvey Nash Logo"
//                  width={320}
//                 height={120}
//                 className="h-16 w-auto md:h-20"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="text-black hover:text-white px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative group rounded-md hover:bg-gradient-to-br hover:from-[#c5f82a] hover:to-[#00d9a6] hover:-translate-y-1 hover:shadow-md"
//                 >
//                   {item.name}
//                   <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] group-hover:w-full transition-all duration-300"></div>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gradient-to-br hover:from-[#c5f82a] hover:to-[#00d9a6] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Hamburger icon */}
//               <svg
//                 className={${isMenuOpen ? 'hidden' : 'block'} h-6 w-6}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//               {/* Close icon */}
//               <svg
//                 className={${isMenuOpen ? 'block' : 'hidden'} h-6 w-6}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={lg:hidden ${isMenuOpen ? 'block' : 'hidden'}}>
//         <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200">
//           {navItems.map((item) => (
//             <Link
//               key={item.name}
//               href={item.href}
//               className="text-black hover:text-blue-600 block px-3 py-2 text-base font-medium tracking-wide transition-all duration-300 relative group rounded-md hover:bg-gradient-to-br hover:from-[#c5f82a] hover:to-[#00d9a6] hover:-translate-y-1 hover:shadow-md border-2 border-transparent "
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item.name}
//               <div className="absolute bottom-0 left-0 w-0 h-0.5  bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] group-hover:w-full transition-all duration-300"></div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
'use client';

import React, { useState } from 'react';
import logo from "@/assets/logo.png"
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'FIND TECH JOBS', href: '/Find-tech-jobs' },
    { name: 'FIND TECH TALENT', href: '/Find-tech-talent' },
    { name: 'WHAT WE DO', href: '/What-we-do' },
    { name: 'NEWS & EVENTS', href: '/News-and-events' },
    { name: 'OUR COMPANY', href: '/Our-company' },
    { name: 'CONTACT US', href: '/Contact-us' },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src={logo}
                alt="Harvey Nash Logo"
                width={320}
                height={120}
                className="h-16 w-auto md:h-20 hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-[#00d9a6] px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative group rounded-md hover:scale-110 hover:-translate-y-2 hover:shadow-lg transform-gpu"
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] group-hover:w-full transition-all duration-500 ease-out"></div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#c5f82a]/10 to-[#00d9a6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-[#00d9a6] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-md transform-gpu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6 transition-transform duration-300`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6 transition-transform duration-300 rotate-180`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-4'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black hover:text-[#00d9a6] block px-3 py-2 text-base font-medium tracking-wide transition-all duration-300 relative group rounded-md hover:scale-105 hover:-translate-y-1 hover:shadow-md border-2 border-transparent transform-gpu"
              onClick={() => setIsMenuOpen(false)}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              <span className="relative z-10">{item.name}</span>
              {/* Animated underline for mobile */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#c5f82a] to-[#00d9a6] group-hover:w-full transition-all duration-500 ease-out"></div>
              {/* Subtle side border effect */}
              <div className="absolute left-0 top-0 w-0 h-full bg-gradient-to-b from-[#c5f82a] to-[#00d9a6] group-hover:w-1 transition-all duration-300 rounded-r"></div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;