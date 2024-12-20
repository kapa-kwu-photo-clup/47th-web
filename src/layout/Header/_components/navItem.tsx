import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
  isActive: boolean;
  activeColor: string;
  onClick?: () => void;
}

export default function NavItem({
  to,
  label,
  isActive,
  activeColor,
  onClick,
}: NavItemProps) {
  return (
    <Link to={to} className={` ${isActive ? 'font-bold' : ''}`}>
      <div
        className={`lg:py-4 lg:px-0 py-8 px-5 ${isActive ? activeColor : ''}`}
        onClick={onClick}
      >
        {label}
      </div>
    </Link>
  );
}
