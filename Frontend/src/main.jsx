

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routing/routeTree';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store/store';

// ✅ Create QueryClient instance
const queryClient = new QueryClient();

// ✅ Create the router using routeTree
const router = createRouter({
  routeTree,
  context: {
    queryClient,
    store,
  },
});

// ✅ Render the app
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

