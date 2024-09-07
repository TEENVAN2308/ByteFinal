import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homepage from './pages/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/rules",
    element: <About/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
