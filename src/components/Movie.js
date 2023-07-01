import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, image_path, title, overview, vote_average, vote_count }) {
  const coverImg = `https://image.tmdb.org/t/p/w500/${image_path}`;

    return (
      <div>
        <div className={styles.movie}>
          <img src={coverImg} alt={title}  className={styles.movie__img}/>
          <h2>
            <Link to={`/movie/${id}`} className={styles.movie__title}>{title} </Link>
          </h2>
          <p>{overview.length > 235 ? `${overview.slice(0, 235)}...` : overview}</p>
          <ul>
            <li>Rates : {vote_average }</li>
            <li>Vote Counts : {vote_count}</li>
          </ul>
        </div>
      </div>
    );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  image_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
};

export default Movie;
