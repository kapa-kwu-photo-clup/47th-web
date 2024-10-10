import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout';
import MainPage from '../pages/MainPage/mainPage';
import ComePage from '../pages/ComePage/comePage';
import ExhibitionPage from '../pages/exhibitionPage/ExhibitionPage';
import EventPage from '../pages/EventPage/eventPage';

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
        path: '/come',
        element: <ComePage />,
      },
      {
        path: '/exhibition',
        element: <ExhibitionPage />,
      },
      {
        path: '/event',
        element: <EventPage />,
      },
    ],
  },
]);
