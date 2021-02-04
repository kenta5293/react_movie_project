import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movies-list">
        <img src={poster} alt={title} title={title} className="movie-poster" />
        <div className="movie-data">
          <h3 className="movie-title">{title}</h3>
          <h5 className="movie-year">{year}</h5>
          <ul className="movie-genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres-text">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie-summary">{summary}</p>
          {/* <p className="movie-summary">{summary.slice(0, 180)}</p> : slice the Array*/}
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
