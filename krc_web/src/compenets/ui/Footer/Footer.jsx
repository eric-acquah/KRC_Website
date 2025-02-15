
import './Footer.css';

import Facebook  from "/src/assets/icons/icons8-facebook-1.svg";
import Whatsapp from "/src/assets/icons/icons8-whatsapp.svg";
import Twitter  from "/src/assets/icons/icons8-twitterx.svg";
import instagram from "/src/assets/icons/icons8-instagram.svg";

export default function Footer() {
    return (
        <footer className="footer position-relative bottom-0 mt-5">
        <div className="container-fluid pt-4  bg-body-tertiary fs-6">
           <div className='container mt-4'>
                <div className='row text-center'>
                    <div className='col-sm text-start mb-5'>
                        <img src="/src/assets/krc-logo.png" alt="logo" width="150" className='logo d-block' />
                        <div className='mt-2'>
                        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget lacus augue.</small>
                        </div>
                        <div className='d-flex mt-3'>
                            <a href="#"><img src={Facebook} alt="" className='social-icon'/></a>
                            <a href="#"><img src={Whatsapp} alt="" className='social-icon'/></a>
                            <a href="#"><img src={Twitter} alt="" className='social-icon'/></a>
                            <a href="#"><img src={instagram} alt="" className='social-icon'/></a>
                        </div>
                    </div>
                    <div className='col'>
                        <h5>Pages</h5>
                        <ul className='list-unstyled footer-list'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h5>Services</h5>
                        <ul className='list-unstyled footer-list'>
                            <li><a href="#"></a></li>
                            <li><a href="#">Mobile Development</a></li>
                            <li><a href="#">SEO</a></li>
                            <li><a href="#">Digital Marketing</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h5>Contact</h5>
                        <ul className='list-unstyled footer-list'>
                            <li><a href="#">+91 1234567890</a></li>
                            <li><a href="#">
                                <address>
                                    123, Lorem Ipsum, Dolor Sit, Amet
                                </address>
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col text-center'>
                        <small>copyright @ KRC</small>
                    </div>
                </div>
           </div>
        </div>
        </footer>
    );
}