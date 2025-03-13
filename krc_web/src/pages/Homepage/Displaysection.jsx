import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import './Displaysection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function DisplayCards({ setOffset = false, cardImg }) {
    return (
        <div className="display-card row">
            <div className="col-md-12 d-flex justify-content-center">
                <div className={`card-img ${setOffset == true ? "shadow_offset" : " " }`}>
                    <img src={cardImg ? cardImg : ""} alt="Project Sample Image" />
                </div>
            </div>
            <div className="col-md-12 card-details-container d-flex justify-content-center">
                <div className="card-details d-flex">
                    <div>
                        <h3>Project Name</h3>
                        <p>Some details / Info</p>
                    </div>
                    <div>
                        <button>
                        <FontAwesomeIcon icon={faGreaterThan} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

DisplayCards.propTypes = {
    setOffset: PropTypes.bool,
    cardImg: PropTypes.string,
};

function ReviewCard({ reviewerName, reviewerLocation, reviewerPic, review }) {
    const msg = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus quis sem ut suscipit Maecenas tempus quis sem ut suscipit";

    return (
      <div className="review-card row d-flex flex-column">
        <div className="review-card-head col-sm">
            <div className="reviewer-pic">
                <img src={reviewerPic
                    ? reviewerPic
                    : "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"}
                    alt="Reviewer" />
            </div>
            <div className="reviewer-info pt-3">
                <h4>{reviewerName ? reviewerName : "Abena Korkor"}</h4>
                <p>{reviewerLocation ? reviewerLocation : "Ghana, Accra"}</p>
            </div>
        </div>
        <div className="review-card-body col-sm flex-grow-1">
            <p>{review ? review : msg}</p>
        </div>
      </div>  
    );
}

ReviewCard.propTypes = {
    reviewerName: PropTypes.string,
    reviewerLocation: PropTypes.string,
    review: PropTypes.string,
    reviewerPic: PropTypes.string,
}


function RaceNumbers({ limit }) {
    const [numVal, setnumVal] = useState(0);
    const [inVew, setInView] = useState(false);


    useEffect(() => {

         // Check if .project-count is in view
         const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting){
                setInView(true);
            }
        }, { threshold: 0.5 });

        const target = document.querySelector('.project-count');

        if (target) observer.observe(target);

        return () => observer.disconnect(); // Clean up

    }, []);


    useEffect(() => {
        if(!inVew) return; // If not in view, do nothing
       
        // Create a number increment effect
        const interval = setInterval(() => {
            setnumVal(preVal => {
                if(preVal >= limit){
                    clearInterval(interval);
                    setInView(false);
                    return limit;
                }
                return preVal + 1;
            });
        }, 55)

        return () => {
            clearInterval(interval);
        }
    }, [inVew, limit]);


    return (
        <h3 className=''>{numVal}</h3>
    )

}

RaceNumbers.propTypes = {
    limit: PropTypes.number,
}


export default function Displaysection() {

    return (
        <section className="display-area mt-5">
            <div className="container">
                <div className="row mt-4 p-3 text-center">
                     <div className="col-md-4 mt-4">
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus quis sem ut suscipit</p>
                        <a href="#">
                            Read More
                            <span><FontAwesomeIcon icon={faArrowRight} /></span>
                        </a>
                    </div>
                    <div className="col-md-4 mt-4">
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus quis sem ut suscipit</p>
                        <a href="#">
                            Read More
                            <span><FontAwesomeIcon icon={faArrowRight} /></span>
                        </a>
                    </div>
                    <div className="col-md-4 mt-4">
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus quis sem ut suscipit</p>
                        <a href="#">
                            Read More
                            <span><FontAwesomeIcon icon={faArrowRight} /></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container pt-5 mt-4">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 text-center mt-5">
                        <h3 className='fs-3'>Follow Our Projects</h3>
                        <p className='p-1'>Proin suscipit mi et quam placerat, vestibulum vulputate diam cursus. Cras finibus quam sed turpis dictum porta. Donec pharetra dolor magna, vel molestie sapien luctus sit amet. </p>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
            <div className="container py-5 mt-2">
                <div className="row p-3">
                    <div className="col-md-6 p-3 ">
                        <DisplayCards cardImg={"./src/pages/Homepage/images/card_img_1.jpg"} />
                    </div>
                    <div className="col-md-6 p-3 ">
                        <DisplayCards setOffset={true} cardImg={"./src/pages/Homepage/images/card_img_3.jpg"}/>
                    </div>
                    <div className="col-md-6 p-3 ">
                        <DisplayCards setOffset={true} cardImg={"./src/pages/Homepage/images/card_img_5.jpg"}/>
                    </div>
                    <div className="col-md-6 p-3 ">
                        <DisplayCards cardImg={"./src/pages/Homepage/images/card_img_7.jpg"}/>
                    </div>
                </div>
            </div>

            <div className="container pt-5 mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="project-count row d-flex justify-content-center text-center">
                            <div className="col-sm-2 p-3 mx-4">
                                <RaceNumbers limit={5} />
                                <p>Years Of Experiance</p>                                
                            </div>
                            <div className="custom-vr"></div>
                            <div className="col-sm-2 p-3 mx-4">
                            <RaceNumbers limit={25} />
                                <p>Succses Projects</p> 
                            </div>
                            <div className="custom-vr"></div>
                            <div className="col-sm-2 p-3 mx-4">
                            <RaceNumbers limit={5} />
                                <p>Active Projects</p> 
                            </div>
                            <div className="custom-vr"></div>
                            <div className="col-sm-2 p-3 mx-4">
                                <RaceNumbers limit={20} />
                                <p>Satisfied Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review-section container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 review-card-container">
                        <h3 className='text-center'>What Other People Think <br/> About Us</h3>
                        <Swiper className="swiper-container container d-flex justify-content-around  pt-3"
                           modules={[Navigation, Pagination, Autoplay]}
                           spaceBetween={10}
                           slidesPerView={3}
                           navigation
                           pagination={{ clickable: true }}
                           autoplay={{ delay: 2500, disableOnInteraction: false }}
                           breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: -20,
                                centeredSlides: true,
                              },
                            375: {
                              slidesPerView: 1,
                              spaceBetween: -50,
                              centeredSlides: true,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 30,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 10,
                            },
                          }}
                        > 
                            <SwiperSlide><ReviewCard /></SwiperSlide>
                            <SwiperSlide><ReviewCard /></SwiperSlide>
                            <SwiperSlide><ReviewCard /></SwiperSlide>
                            <SwiperSlide><ReviewCard /></SwiperSlide>
                            <SwiperSlide><ReviewCard /></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </section>
    );
}