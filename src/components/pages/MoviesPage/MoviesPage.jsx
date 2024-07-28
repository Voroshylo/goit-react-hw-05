import { useState } from "react";
import { getMoviesByQuery } from "../../../api";
import MovieList from "../../MovieList/MovieList";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getMoviesByQuery(query).then((data) => setMovies(data.result));
  };

  return (
    <div className={css.div}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
          className={css.input}
        />
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
