import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieDetail.module.css';

function MovieDetail({ medium_cover_image, title, genres, year, runtime, rating, descriptipn_full}) {
    return (
        <div className={styles.movie}>
            <img src={medium_cover_image} alt={title} />
            <h1>{title}</h1>

            <div>rating : {rating}</div>
            <div>
                genres : 
                <ul>
                    {genres.map((g, index) =>(
                        <li key={index}>{g}</li>
                    ))}
                </ul>
                <div>year : {year}</div>
                <div>runtime : {runtime}</div>
                <div>{descriptipn_full}</div>
            </div>
        </div>
    )
}

MovieDetail.propTypes = {
    medium_cover_image: PropTypes.string.isRequired,    
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    description_full: PropTypes.string.isRequired,
};

export default MovieDetail;
