import { useLocation } from 'react-router-dom';
import NavItem from './_components/navItem';

import kapaLogoImg from '../../assets/images/svg/kapa-logo.svg';

export default function Header() {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'HOME', color: 'border-b-4 border-springPink' },
    { to: '/come', label: 'VISIT', color: 'border-b-4 border-summerGreen_01' },
    {
      to: '/exhibition',
      label: 'EXHIBITION',
      color: 'border-b-4 border-fallPurple',
    },
    { to: '/event', label: 'EVENT', color: 'border-b-4 border-winterBlue' },
  ];

  return (
    <header className="w-full border-b-2 border-lightGray bg-white">
      <div className="w-3/4 mx-auto relative flex justify-center items-center">
        <img
          src={kapaLogoImg}
          alt="kapa logo"
          className="h-5 absolute left-0 hidden lg:block py-auto"
        />
        <nav className="flex gap-16 text-xl ">
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
      </div>
    </header>
  );
}
