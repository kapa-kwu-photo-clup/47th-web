import { Link, useLocation } from 'react-router-dom';
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
      to: '/visit',
      label: 'VISIT',
      color:
        'lg:border-b-4 lg:border-summerGreen_01 lg:text-black_22 text-summerGreen_01',
    },
    {
      to: '/exhibition/spring',
      label: 'EXHIBITION',
      color:
        'lg:border-b-4 lg:border-fallPurple lg:text-black_22 text-fallPurple',
    },
    {
      to: '/goods',
      label: 'GOODS',
      color:
        'lg:border-b-4 lg:border-winterBlue lg:text-black_22 text-winterBlue',
    },
  ];

  const handleNavItemClick = () => {
    setShowMenu(false);
  };

  return (
    <header className="w-full border-b-2 border-lightGray bg-white">
      <div className="lg:w-3/4 lg:px-0 px-5 mx-auto relative flex justify-between items-center">
        <Link to="/">
          <img
            src={kapaLogoImg}
            alt="kapa logo"
            className="lg:h-9 h-7 py-auto"
          />
        </Link>

        <nav className="gap-16 text-xl lg:flex hidden">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              isActive={
                location.pathname === item.to ||
                (location.pathname === '/exhibition/summer' &&
                  item.to === '/exhibition/spring') ||
                (location.pathname === '/exhibition/fall' &&
                  item.to === '/exhibition/spring') ||
                (location.pathname === '/exhibition/winter' &&
                  item.to === '/exhibition/spring')
              }
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
              isActive={
                location.pathname === item.to ||
                (location.pathname === '/exhibition/summer' &&
                  item.to === '/exhibition/spring') ||
                (location.pathname === '/exhibition/fall' &&
                  item.to === '/exhibition/spring') ||
                (location.pathname === '/exhibition/winter' &&
                  item.to === '/exhibition/spring')
              }
              activeColor={item.color}
              onClick={handleNavItemClick}
            />
          ))}
        </div>
      )}
    </header>
  );
}
