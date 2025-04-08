import Footer from "../../compenets/ui/Footer/Footer";
import Header from "../../compenets/ui/Header/Header";
import AboutUscomponent from "./AboutUscomponent";
import './AboutUspage.css';
import { Link } from 'react-router-dom';



export default function AboutUspage() {
    return(
       <>
         <Header />
         <AboutUscomponent />
         <Footer />
       </>
    );
}