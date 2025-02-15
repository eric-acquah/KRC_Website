import Header from './compenets/ui/Header/Header';
import Footer from './compenets/ui/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'normalize.css';
import './App.css'
import './index.css';

function App() {

  return (
    <>
      <div className="App">
        <Header />
        <Homepage />
        <Footer />
      </div>
    </>
  )
}

export default App
