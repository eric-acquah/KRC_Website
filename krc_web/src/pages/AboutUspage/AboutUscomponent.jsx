import './AboutUscomponent.css';
// import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Pagetitle from '../../compenets/Pagetitle/Pagetitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';



function TeamCard({name, position, img, socials = []}) {


  useEffect(() => {
    const images = document.querySelectorAll('.team-card img');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    images.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      images.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

  return(
    <div className="team-card text-center">
      <div className="team-img">
        <img src={img ? img : "./src/pages/AboutUspage/images/team_img-1.jpg"} />
      </div>
      <h4>{name}</h4>
      <p>{position}</p>
      <div className="team-socials d-flex justify-content-center">
      <a href={socials.length > 0 ? socials[0] : "https://www.instagram.com/he_is_selorm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className='team-socials-icon' />
        </a>
        <a href={socials.length > 1 ? socials[1] : "https://www.instagram.com/he_is_selorm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className='team-socials-icon'/>
        </a>
        <a href={socials.length > 2 ? "mailto:" + socials[2] : "mailto:someone@example.com" } target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className='team-socials-icon'/>
        </a>
      </div>
    </div>
  );

}

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  img: PropTypes.string,
  socials: PropTypes.array
}

export default function AboutUscomponent() {

  useEffect(() => {
    const images = document.querySelectorAll('.about-us-img');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    images.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      images.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

    return(
        <section className='about-us-sec'>
            <Pagetitle title='About Us' BackgroundImg='./src/pages/AboutUspage/images/about_us_img.jpg' />
            <div className="about-us-quote-sec container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center text-center">
                        <div className="custom-vr"></div>
                        <p className='about-us-cite'>
                            <cite>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus doloremque iure eos corrupti doloribus deleniti hic alias quis nobis labore fugiat sed, deserunt in cupiditate cum quae. <span>consequatur</span></cite>
                        </p>
                        <div className="custom-vr"></div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
            <div className="about-us-container-1 container pt-5 mt-5">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="about-us-row row">
                            <div className="about-us-txt about-us-txt-1 col-sm-5 d-flex flex-column">
                                <h3>What We Do</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quo quae aut alias assumenda iure vel temporibus. Neque ratione, dolorem necessitatibus, quibusdam omnis recusandae illo quia quos in accusantium nihil!</p>
                                <button className='btn btn-primary global-btn'>Our portfolio <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                            <div className="col-sm-7">
                                <div className="about-us-img about-us-img-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>

            <div className="about-us-container-2 container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="about-us-row row">
                            <div className="col-sm-7">
                                <div className="about-us-img about-us-img-2"></div>
                            </div>

                            <div className="about-us-txt about-us-txt-2 col-sm-5 d-flex flex-column">
                                <h3>Our Mission</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quo quae aut alias assumenda iure vel temporibus. Neque ratione, dolorem necessitatibus, quibusdam omnis recusandae illo quia quos in accusantium nihil!</p>
                                <button className='btn btn-primary global-btn'>Discover Us <FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>

            <div className="team-container container">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="team-display-container row d-flex flex-column">
                      <div className="col-sm text-center">
                        <h3>Meet Our Excellent <br /> Team</h3>
                      </div>
                      <div className="col-sm">
                        <div className="row">
                          <div className="col-sm-4">
                            <TeamCard 
                            name='Michael Kojo' 
                            position='Co-founder, HR' 
                            img={"./src/pages/AboutUspage/images/team_img-1.jpg"}
                            socials={["https://www.instagram.com/he_is_selorm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="]}
                            />
                          </div>
                          <div className="col-sm-4">
                          <TeamCard 
                          name='Eric Ashilatan' 
                          position='Founder, CEO' 
                          img={"./src/pages/AboutUspage/images/team_img-4.jpg"} 
                          socials={["https://www.instagram.com/kitchen_cabinet_pro_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "https://www.linkedin.com/in/eric-ashilatan-341524324", "rikoashilatan19@gmail.com"]} 
                          />
                          </div>
                          <div className="col-sm-4">
                          <TeamCard 
                          name='Eric Acquah' 
                          position='Co-founder, MD' 
                          img={"./src/pages/AboutUspage/images/team_img-5.jpg"}
                          socials={["https://www.instagram.com/kindjoe1720?igsh=MTI3eng3aWszOWdjNA==", "https://www.linkedin.com/in/eric-acquah-information-technology", "ericacquah1720@gmail.com"]}
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>

            <div className="contact-container container pt-5 mt-5">
              <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <div className="row d-flex flex-column">
                  <div className="col-sm text-center">
                    <h2>Need a project done? Let&apos;s have <br /> a productive talk</h2>
                  </div>
                  <div className="col-sm pt-5">
                    <form action="">
                      <div className="row">
                        <div className="col-sm-6">
                          <input type="text" name="name" id="name" placeholder='Name' className='form-control border border-0 border-bottom' />
                        </div>
                        <div className="col-sm-6">
                          <input type="email" name="email" id="email" placeholder='Email' className='form-control border border-0 border-bottom' />
                        </div>
                      </div>
                      <textarea name="message" id="message" cols="30" rows="1" placeholder='Message' className='form-control border border-0 border-bottom'></textarea>
                      <div className="col-sm pt-5">
                        <div className="row">
                          <div className="col-sm-4"></div>
                          <div className="btn-col col-sm-4">
                            <button className='btn btn-primary global-btn'>Send Now</button>
                          </div>
                          <div className="col-sm-4"></div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-sm"></div>
                </div>
              </div>
              <div className="col-md-1"></div>
              </div>
            </div>
        </section>
    );
}