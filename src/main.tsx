import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css'
import Buypage from './pages/Buypage';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path : "/produto/:slug",
    element : <Buypage />
  },
  {
    path : "/",
    element : <App />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>
);
