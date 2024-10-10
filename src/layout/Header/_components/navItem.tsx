import { Link } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
  isActive: boolean;
  activeColor: string;
}

export default function NavItem({
  to,
  label,
  isActive,
  activeColor,
}: NavItemProps) {
  return (
    <div className={`py-4 ${isActive ? activeColor : ''}`}>
      <Link to={to} className={isActive ? 'font-bold' : ''}>
        {label}
      </Link>
    </div>
  );
}
