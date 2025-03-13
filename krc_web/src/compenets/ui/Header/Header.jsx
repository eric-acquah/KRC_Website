import Navbar from "../Navbar/Navbar";

import "./Header.css";


export default function Header() {
    return (
        <header className="header-component position-fixed top-0 w-100 mb-5">
            <Navbar />
        </header>
    )    
}