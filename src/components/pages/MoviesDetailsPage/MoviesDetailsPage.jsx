import { useEffect, useState, Suspense } from "react";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../../api";
import css from "./MoviesDetailPage.module.css";

const MoviesDetailPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const backLink = location.state?.from ?? "/movies";

  return (
    <div className={css.div}>
      <Link to={backLink} className={css.Link}>
        Back
      </Link>
      <h1 className={css.h1}>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p className={css.p}>{movie.overview}</p>
      <ul className={css.ul}>
        <li className={css.li}>
          <Link to="cast" state={{ from: backLink }}>
            Cast
          </Link>
        </li>
        <li className={css.li}>
          <Link to="reviews" state={{ from: backLink }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesDetailPage;
