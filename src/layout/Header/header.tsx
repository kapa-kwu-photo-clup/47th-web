import { useLocation } from 'react-router-dom';
import NavItem from './_components/navItem';

import kapaLogoImg from '../../assets/images/svg/kapa-logo.svg';
import { useState } from 'react';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      to: '/',
      label: 'HOME',
      color:
        'lg:border-b-4 lg:border-springPink lg:text-black_22 text-springPink',
    },
    {
      to: '/come',
      label: 'VISIT',
      color:
        'lg:border-b-4 lg:border-summerGreen_01 lg:text-black_22 text-summerGreen_01',
    },
    {
      to: '/exhibition',
      label: 'EXHIBITION',
      color:
        'lg:border-b-4 lg:border-fallPurple lg:text-black_22 text-fallPurple',
    },
    {
      to: '/event',
      label: 'EVENT',
      color:
        'lg:border-b-4 lg:border-winterBlue lg:text-black_22 text-winterBlue',
    },
  ];

  return (
    <header className="w-full border-b-2 border-lightGray bg-white">
      <div className="lg:w-3/4 lg:px-0 px-5 mx-auto relative flex justify-between items-center">
        <img src={kapaLogoImg} alt="kapa logo" className="h-5 py-auto" />
        <nav className="gap-16 text-xl lg:flex hidden">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              isActive={location.pathname === item.to}
              activeColor={item.color}
            />
          ))}
        </nav>
        <button
          className="lg:hidden block py-5"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* 모바일 메뉴 */}
      {showMenu && (
        <div className="lg:hidden shadow-lg animate-fadeInDown">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              isActive={location.pathname === item.to}
              activeColor={item.color}
            />
          ))}
        </div>
      )}
    </header>
  );
}
