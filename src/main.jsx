import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Homepage from './pages/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx'
import Round1final from './pages/Round1final.jsx'
import Round1result from './pages/Round1result.jsx'
import Round3 from './pages/Round3.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/rules",
    element: <About/>,
  },
  {
    path:"/round1",
    element:<Round1final/>
  },
  {
    path:"/round1result",
    element:<Round1result/>
  },
  {
    path:"/round3",
    element:<Round3/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
