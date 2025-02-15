
import './Herosection.css';


export default function Herosection() {
    return (
        <div className="herosec">
            <div className="container bg-body-secondary hero-container">
               <div className="row">
                    <div className="col-md d-flex flex-column justfy-content-start">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1 className='fs-1 text-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec tincidunt luctus, orci eros luctus nunc</p>
                                <button className="btn btn-primary hero-btn">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}