import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";
import { fetchMovieDetails } from "../../../api";
import css from "./MoviesDetailPage.module.css";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();

  const goBackRef = useRef(location?.state || "/movies");
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);
  if (!movie) {
    return (
      <div className={css.loader}>
        <ThreeCircles
          visible={true}
          height="50"
          width="50"
          color="rgb(9, 217, 186)"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <>
      <Link className={css.btn} to={goBackRef.current}>
        Go back!
      </Link>
      <div className={css.div}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={css.details}>
          <h3>{movie.title}</h3>
          <p>
            Overview:
            <span>{movie.overview}</span>
          </p>
          <p>
            Runtime:
            <span>{movie.runtime}</span>
          </p>
          <p>
            Popularity:
            <span>{movie.popularity}</span>
          </p>
        </div>
      </div>
      <div className={css.nav}>
        <NavLink className={css.navlink} to="cast">
          Cast
        </NavLink>
        <NavLink className={css.navlink} to="reviews">
          Reviews
        </NavLink>
      </div>
      <Suspense
        fallback={
          <div className={css.loader}>
            <ThreeCircles
              visible={true}
              height="50"
              width="50"
              color="rgb(9, 217, 186)"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
