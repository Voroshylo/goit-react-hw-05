import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.ul}>
      {movies.map((movie) => (
        <li className={css.li} key={movie.id}>
          <Link
            className={css.link}
            to={`/movies/${movie.id}`}
            state={location}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p className={css.p}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
