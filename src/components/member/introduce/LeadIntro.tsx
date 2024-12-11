'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'home', href: '/' },
    { label: 'program', href: '/program' },
    { label: 'guide', href: '/guide' },
    { label: 'magazine', href: '/magazine' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white bg-opacity-90 shadow-md">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* 좌측 로고 */}
        <div className="flex items-center">
          <Image
            src="/images/left_header_logo.png"
            alt="Aizu Festival Logo"
            width={50}
            height={50}
            className="mr-4"
          />
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold text-black leading-tight">
              AIZU FESTIVAL
            </h1>
            <p className="text-xs sm:text-sm text-mono_black">Fukushima</p>
          </div>
        </div>

        {/* 햄버거 아이콘 */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 text-2xl focus:outline-none"
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-white shadow-md sm:shadow-none sm:static sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:w-auto`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block sm:inline-block text-center text-black text-sm sm:text-lg font-semibold px-4 sm:px-6 py-3 sm:py-2 hover:bg-gray-100 sm:hover:bg-transparent transition-colors"
              onClick={() => setIsMenuOpen(false)} // 메뉴 클릭 시 닫기
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
