import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import Pagetitle from "../../compenets/Pagetitle/Pagetitle";
import PropTypes from "prop-types";
import "./PortfolioComponent.css";
import { Link } from "react-router-dom";
import filterCategories from "../../utils/categoryFilter";
import PaginationComponent from "./PaginationComponent";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// Function to generate dynamic portfolio mock data
const generatePortfolioData = (count) => {
    const categories = ["kitchen cabinet", "wardrobe", "bathroom cabinet", "shelves", "office furniture", "living room set"];
    const baseTitles = ["Modern", "Classic", "Minimalist", "Rustic", "Custom", "Luxury"];
    const materials = ["Walnut", "Oak", "Maple", "Cherry", "Pine", "White Laminate", "Black Gloss", "Gray Matte"];
    const features = ["Handleless", "Integrated Lighting", "Soft Close", "Floating", "Built-in", "Freestanding"];
    const imageBase = "./src/pages/Portfoliopage/images/portfolio-img-";
    const imageCount = 5; // Assuming you have images named portfolio-img-1.jpg, portfolio-img-2.jpg, etc.

    const data = [];
    for (let i = 1; i <= count; i++) {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const title = `${baseTitles[Math.floor(Math.random() * baseTitles.length)]} ${category.charAt(0).toUpperCase() + category.slice(1).replace(/ cabinet| set| furniture/,'')}`; // Make title slightly more specific
        const description = `${features[Math.floor(Math.random() * features.length)]} / ${materials[Math.floor(Math.random() * materials.length)]}`;

        // Generate 1 to 3 random image paths for each item
        const numImages = Math.floor(Math.random() * 3) + 1;
        const images = [];
        const usedImageIndices = new Set();
        while (images.length < numImages) {
            const imgIndex = Math.floor(Math.random() * imageCount) + 1;
            if (!usedImageIndices.has(imgIndex)) {
                images.push(`${imageBase}${imgIndex}.jpg`);
                usedImageIndices.add(imgIndex);
            }
            // Safety break if we can't find enough unique images (e.g., imageCount is small)
            if (usedImageIndices.size >= imageCount && images.length < numImages) break;
        }
         // Ensure at least one image if the loop failed somehow
         if (images.length === 0) {
            images.push(`${imageBase}1.jpg`);
        }


        data.push({
            id: i, // Ensure unique ID
            category: category,
            title: title,
            image: images,
            description: description,
        });
    }
    return data;
};

// Generate 40 dynamic portfolio samples
const portfolioSamples = generatePortfolioData(20);


function PortfolioCards( {cardData} ) {
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

   // We use useEffect so that refs are set before we pass them to Swiper
   useEffect(() => {
    setSwiperReady(true);
  }, []);
  
    return (
        <div className="row portfolio-card">
            <div className="col-sm p-0 d-flex justify-content-center">
                <div className='portfolio-slider'>
                {swiperReady && (<Swiper className='portfolio-swiper'
                    modules={[Navigation, Pagination]}
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation={{
                        nextEl: prevRef.current,
                        prevEl: nextRef.current,
                      }}
                    pagination={{ clickable: true }}
                >
                    {/* <SwiperSlide><img src={cardData.image ? cardData.image : './src/pages/Portfoliopage/images/portfolio-img-1.jpg'} className='portfolio-img' /></SwiperSlide> */}
                    {
                        cardData.image && cardData.image.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} className='portfolio-img' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>)}
                </div>
            </div>
            <div className="card-body col-sm d-flex justify-content-center">
                <div className='d-flex justify-content-between'>
                <div className="card-description">
                    <h5 className="card-title">{cardData.title}</h5>
                    <p className="card-text">{cardData.description}</p>
                </div>
                <div className="card-btns">
                    <button ref={prevRef} className='button-prev'><FontAwesomeIcon icon={faLessThan} /></button>
                    <button ref={nextRef} className='button-next' id='swiper-btn-nxt'><FontAwesomeIcon icon={faGreaterThan} /></button>
                </div>
                </div>
            </div>
        </div>
    );
}

PortfolioCards.propTypes = {
    cardData: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string,
    }),
}



export default function PortfoliopageComponent() {
    const [category, setCategory] = useState("");
    const [portfolioData, setPortfolioData] = useState(portfolioSamples);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);


    // Calculate the first and last index of the item for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFistItem = indexOfLastItem - itemsPerPage;

    // Get a subset of data for the currentpage
    const currentPageData = portfolioData.slice(indexOfFistItem, indexOfLastItem)


    // Function to handle Pagination
    const handlePagination = (pageNumber) => setCurrentPage(pageNumber);


    useEffect(() => {
           const data = filterCategories(portfolioSamples, category);
              setPortfolioData(data);
    }, [category]);


    return(
        <section className="portfolio-sec">
            <Pagetitle title="Our Portfolio" BackgroundImg={"./src/pages/Portfoliopage/images/page-background-3.jpg"} />
            <div className="container portfolio-tabs-container">
                <div className="row portfolio-tabs">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <nav className="portfolio-tabs-nav nav nav-pills nav-fill">
                            <Link to="/portfolio" className={`nav-link ${category == "" ? "active" : ""}`} onClick={() => setCategory("")}>All</Link>
                            <Link to="/portfolio" className={`nav-link ${category == "bathroom cabinet" ? "active" : ""}`} onClick={() => setCategory("bathroom cabinet")}>Bathroom Cabinets</Link>
                            <Link to="/portfolio" className={`nav-link ${category == "kitchen cabinet" ? "active" : ""}`} onClick={() => setCategory("kitchen cabinet")}>Kitchen Cabinet</Link>
                            <Link to="/portfolio" className={`nav-link ${category == "wardrobe" ? "active" : ""}`} onClick={() => setCategory("wardrobe")}>Wardrobe/Closets</Link>
                            <Link to="/portfolio" className={`nav-link ${category == "shelves" ? "active" : ""}`} onClick={() => setCategory("shelves")}>Shelves</Link>
                        </nav>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            <div className="container portfolio-display mt-5">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="row">
                            {
                                currentPageData.map((cardData, index) => (
                                    <div className="cards-container col-md-6 mb-4" key={index}>
                                        <PortfolioCards cardData={cardData} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            <div className="container Pagination-nav mt-5">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="pagination-wrapper col-md-4">
                        <PaginationComponent itemsPerPage={itemsPerPage} totalItems={portfolioData.length} handlePagination={handlePagination} />
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    );
}