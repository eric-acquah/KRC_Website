import "./ContactUsComponent.css";
import Pagetitle from "../../compenets/Pagetitle/Pagetitle";



export default function ContactUsComponent() {
    return (
        <section className="contactus-sec">
            <Pagetitle title="Contact Us"></Pagetitle>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2>We Love meeting new people <br /> and helping them</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-sm">
                                <p>kingriko@gmail.com</p>
                                <p>kingriko@gmail.com</p>
                                <p>kingriko@gmail.com</p>
                                <div className="contact-social-icons">

                                </div>
                            </div>
                            <div className="col-sm">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </section>
    );
}