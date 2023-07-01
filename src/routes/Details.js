import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

function Details(){
    const { id }= useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        const apiKey = "ae91bcb58eeff2e88c1842b7f793163d";
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        const json = await response.json();
        setMovie(json);
      };
    useEffect(() => {
        getMovie();
    }, [getMovie]);
    return (
        <div className="details">
        {movie ? (
          <div className="details-content">
            <div className="details-header">
              <h1 className="details-title">{movie.title}</h1>
              <span className="details-rating">Average Rate : {movie.vote_average}</span>
            </div>
            <div className="details-info">
              <div className="details-image">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="details-description">
                <p className="details-overview">{movie.overview}</p>
                <p className="details-release-date">
                  <span className="details-info-label">Release Date:</span>{" "}
                  {movie.release_date}
                </p>
                <p className="details-vote-count">
                  <span className="details-info-label">Vote Count:</span>{" "}
                  {movie.vote_count}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}
export default Details;