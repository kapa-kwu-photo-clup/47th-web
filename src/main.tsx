import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/Router';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Analytics />
    <SpeedInsights />
  </StrictMode>,
);
