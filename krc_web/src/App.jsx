import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'normalize.css';
import './App.css'
import './index.css';
import AboutUspage from './pages/AboutUspage/AboutUspage';
import Homepage from './pages/Homepage/Homepage';
import Portfoliopage from './pages/Portfoliopage/Portfoliopage';
import ContactUspage from './pages/ContactUspage/ContactUspage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: 'about-us',
    element: <AboutUspage />,
  },
  {
    path: 'portfolio',
    element: <Portfoliopage />,
  },
  {
    path: 'contact-us',
    element: <ContactUspage />,
  }
]);


function App() {

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
