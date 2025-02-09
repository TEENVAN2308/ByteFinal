import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Results from './pages/admin/viewResults/Results.jsx'
import Homepage from './pages/HomePage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx'
import Round1 from './pages/round-one/Round1New.jsx'
import Round1result from './pages/Round1result.jsx'
import First from './pages/round-two/ques1/firstques.jsx'
import About2 from './pages/About_round_two.jsx'
import About3 from './pages/About_round_three.jsx'
import Second from './pages/round-two/ques2/secondques.jsx';
import Admin from './pages/Admin.jsx';
import Round3 from './pages/Round3.jsx'
import Result from './pages/admin/newViewrResult/viewResult.jsx'
import Round2result from './pages/Round2result copy.jsx'

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
    element:<Round1/>
  },
  {
    path:"/round1result",
    element:<Round1result/>
  },
  {
    path:"/round3",
    element:<Round3/>
  },
  {
    path: "/ques-one",
    element: <First/>,
  },
  {
    path: "/ques-two",
    element: <Second/>,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/about2",
    element: <About2 />,
  },
  {
    path: "/about3",
    element: <About3 />,
  },
  {
    path: "/viewRes",
    element: <Result />,
  },
  {
    path:'/round2Result',
    element:<Round2result/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
