import { useState, useEffect } from "react";
import "./PaginationComponent.css";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan } from '@fortawesome/free-solid-svg-icons';


// Creates Pagination navigation controlls
export default function PaginationComponent({ itemsPerPage, totalItems, handlePagination }) {
    const [isActive, setIsActive] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const [NxtIsDeadEnd, SetNxtIsDeadEnd] = useState(false);
    const [PrevIsDeadEnd, SetPrevIsDeadEnd] = useState(false);


    useEffect(() => {
        if (activePage === 1) {
            SetPrevIsDeadEnd(true);
        }
    }, [activePage]);


    const pageNumbers = [];

    for(let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    // Handle page click

    const handlePageClick = (pageNum) => {
        handlePagination(pageNum);
        setActivePage(pageNum);
        setIsActive(!isActive);

        if (pageNum === 1) {
            SetPrevIsDeadEnd(true);
        }
        else if (pageNum === pageNumbers.length) {
            SetNxtIsDeadEnd(true);
        } 
        
        else {
            SetPrevIsDeadEnd(false);
            SetNxtIsDeadEnd(false);
        }
    }

    // Handle next and previous page click
    const handleNextPage = () => {
        if(activePage < pageNumbers.length) {
            handlePageClick(activePage + 1);
        } 
        
        else if(activePage === pageNumbers.length) {
            SetNxtIsDeadEnd(true);
        } 
    }

    console.log(NxtIsDeadEnd);

    const handlePrevPage = () => {
        if(activePage > 1) {
            handlePageClick(activePage - 1);
        } 
        
        else if(activePage === 1) {
            SetPrevIsDeadEnd(true);
        }
    }

    return (
        <ul className="pagination-navs text-center">
            <li className={`pagination-prev ${PrevIsDeadEnd == true ? "disable" : ""}`} onClick={() => handlePrevPage()}><FontAwesomeIcon icon={faLessThan}/></li>
           {
            pageNumbers.map((pageNum, index) => {
                return (
                    <li key={index} className={`${activePage === pageNum ? "active" : ""}`}>
                    <Link to="/portfolio" onClick={() => handlePageClick(pageNum)}>{pageNum}</Link>    
                </li>
                )
            })
           }
           <li className={`pagination-nxt ${NxtIsDeadEnd == true ? "disable" : ""}`} onClick={() => handleNextPage()} ><FontAwesomeIcon icon={faGreaterThan}/></li>
        </ul>
    );
}


PaginationComponent.propTypes = {
    itemsPerPage: PropTypes.number,
    totalItems: PropTypes.number,
    handlePagination: PropTypes.func
}