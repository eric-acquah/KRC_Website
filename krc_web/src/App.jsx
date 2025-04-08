import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'normalize.css';
import './App.css'
import './index.css';
import AboutUspage from './pages/AboutUspage/AboutUspage';
import Homepage from './pages/Homepage/Homepage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: 'about-us',
    element: <AboutUspage />,
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
