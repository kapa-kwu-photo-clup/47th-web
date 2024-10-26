import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import MainPage from '../pages/MainPage/mainPage';
import VisitPage from '../pages/VisitPage/visitPage';
import ExhibitionPage from '../pages/exhibitionPage/ExhibitionPage';
import SpringPage from '../pages/exhibitionPage/springPage/SpringPage';
import SummerPage from '../pages/exhibitionPage/summerPage/SummerPage';
import FallPage from '../pages/exhibitionPage/fallPage/FallPage';
import WinterPage from '../pages/exhibitionPage/winterPage/WinterPage';
import GoodsPage from '../pages/GoodsPage/goodsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/visit',
        element: <VisitPage />,
      },
      {
        path: '/exhibition',
        element: <ExhibitionPage />,
      },
      {
        path: '/exhibition/spring',
        element: <SpringPage />,
      },
      {
        path: '/exhibition/summer',
        element: <SummerPage />,
      },
      {
        path: '/exhibition/fall',
        element: <FallPage />,
      },

      {
        path: '/exhibition/winter',
        element: <WinterPage />,
      },
      {
        path: '/goods',
        element: <GoodsPage />,
      },
    ],
  },
]);
