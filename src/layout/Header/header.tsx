import { useLocation, Link } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const getHeaderColor = (path: string) => {
    switch (path) {
      case '/':
        return 'bg-springPink';
      case '/come':
        return 'bg-summerGreen_01';
      case '/exhibition':
        return 'bg-fallPurple';
      case '/event':
        return 'bg-winterBlue';
      default:
        return 'bg-lightGray';
    }
  };

  return (
    <header className={`w-full ${getHeaderColor(location.pathname)}`}>
      <div className="gap-4 flex flex-row">
        <Link to="/" className={location.pathname === '/' ? 'font-bold' : ''}>
          메인
        </Link>
        <Link
          to="/come"
          className={location.pathname === '/come' ? 'font-bold' : ''}
        >
          VISIT
        </Link>
        <Link
          to="/exhibition"
          className={location.pathname === '/exhibition' ? 'font-bold' : ''}
        >
          EXHIBITION
        </Link>
        <Link
          to="/event"
          className={location.pathname === '/event' ? 'font-bold' : ''}
        >
          EVENT
        </Link>
      </div>
    </header>
  );
}
