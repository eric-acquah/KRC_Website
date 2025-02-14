import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container'>
                <a className='navbar-brand' href="#">
                    <img src="/src/assets/krc-logo.png" alt="logo" width="150" className='logo' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">About</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Portfolio</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}