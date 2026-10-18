import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen.ts';

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={getRouter()}></RouterProvider>
  </StrictMode>,
);
