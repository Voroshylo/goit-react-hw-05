import { useEffect, useState } from "react";
import MoviesList from "../../MovieList/MovieList";
import { fetchTrendingMovies } from "../../../api";
import css from "./HomePage.module.css";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError("Error fetching trending movies. Please try again later.");
      }
    };

    getData();
  }, []);

  return (
    <div className={css.div}>
      <h2 className={css.title}>The most current movies:</h2>
      {error ? <p>{error}</p> : <MoviesList movies={movies} />}
    </div>
  );
};

export default HomePage;
