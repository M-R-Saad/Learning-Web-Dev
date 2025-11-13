import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import MainLayouts from './layouts/MainLayouts.jsx';
import UserDetails from './components/UserDetails.jsx';
import UpdateUser from './components/UpdateUser.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "users/:id",
        element: <UserDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
      },
      {
        path: "update/:id",
        element: <UpdateUser />,
        loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
