'use client';

import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  const navItems = [
    { label: 'home', href: '/' },
    { label: 'program', href: 'program' },
    { label: 'guide', href: 'guide' },
    { label: 'magazine', href: 'magazine' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white bg-opacity-90">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-6 py-4">
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
            <h1 className="text-2xl font-bold text-black leading-tight">AIZU FESTIVAL</h1>
            <p className="text-sm text-mono_black">Fukushima</p>
          </div>
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className="flex space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-white text-lg font-semibold px-6 py-3 bg-gray-800 bg-opacity-60 rounded-md hover:bg-gray-700 transition-shadow shadow-md hover:shadow-lg"
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
