import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const apiKey = "ae91bcb58eeff2e88c1842b7f793163d"; 
          const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
          const response = await fetch(url);
          const data = await response.json();
          setMovies(data.results);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };
  
      fetchMovies();
    }, []);
    return (
      <div>
        <h1>Tylor's Popular Movies Contents</h1>
        {loading ? (
          <h1>Now Loading..</h1>
        ) : (
          <div>
            {movies.map(
              (movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  image_path={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  title={movie.title}
                  overview={movie.overview}
                  vote_average={movie.vote_average}
                  vote_count={movie.vote_count}
                />
              )
            )}
          </div>
        )}
      </div>
    );
}

export default Home;