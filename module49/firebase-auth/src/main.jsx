import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Root from './assets/layouts/Root.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router'
import Home from './assets/components/Home/Home.jsx'
import Login from './assets/components/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/login',
        Component: Login,
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
