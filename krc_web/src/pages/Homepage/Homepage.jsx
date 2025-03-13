import Herosection from './Herosection';
import Displaysection from './Displaysection';

import './Homepage.css';
import Articlesection from './Articlesection';
import Header from '../../compenets/ui/Header/Header';
import Footer from '../../compenets/ui/Footer/Footer';


export default function Homepage() {
    return (
        <section className='container-fluid'>
            <Header />
            <Herosection />
            <Displaysection />
            <Articlesection />
            <Footer />
        </section>
    );
}