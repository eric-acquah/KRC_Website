import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'normalize.css';
import './App.css'
import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: 'about-us',
    element: <Homepage />,
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
