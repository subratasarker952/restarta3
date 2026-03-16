import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Apps from './pages/Apps'
import Installation from './pages/Installation'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import AppDetails from './pages/AppDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'apps',
        element: <Apps />
      },
      {
        path: 'installation',
        element: <Installation />
      },
      {
        path: 'apps/:id',
        element: <AppDetails />
      },
      {
        path: '*',
        element: <Notfound />
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
