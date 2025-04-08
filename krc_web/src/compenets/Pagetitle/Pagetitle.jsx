import './Pagetitle.css';
import PropTypes from 'prop-types';



export default function Pagetitle({ title, BackgroundImg }) {
    return (
        <div className='page-title container-fluid text-center' style={{ backgroundImage: `url(${BackgroundImg})` }}>
            <h1>{title}</h1>
        </div>
    );
}



Pagetitle.propTypes = {
    title: PropTypes.string.isRequired,
    BackgroundImg: PropTypes.string
}