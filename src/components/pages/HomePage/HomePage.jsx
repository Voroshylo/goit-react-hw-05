import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../../api";
import MovieList from "../../MovieList/MovieList";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then((data) => setMovies(data.result));
  }, []);

  return (
    <div className={css.div}>
      <h1 className={css.h1}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
