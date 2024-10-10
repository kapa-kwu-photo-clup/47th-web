import { Outlet } from 'react-router-dom';

import Header from './Header/header';
import Footer from './Footer/footer';

export default function Layout() {
  return (
    <div className=" text-black_22 text-base">
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div className="mx-auto min-h-screen">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
