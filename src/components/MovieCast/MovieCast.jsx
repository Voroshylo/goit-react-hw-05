import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../api";
import css from "./MovieCast.module.css";
const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [noCast, setNoCast] = useState(false);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        if (data.length === 0) {
          setNoCast(true);
        } else {
          setCast(data);
          setNoCast(false);
        }
        setError(null);
      } catch (error) {
        setError("Failed to fetch movie credits.");
        setNoCast(false);
      }
    };

    fetchCredits();
  }, [movieId]);

  return (
    <div>
      {error && <p className={css.error}>{error}</p>}
      {noCast && !error && <p className={css.error}>Sorry, cast is missing.</p>}
      <div className={css.divUl}>
        <ul>
          {cast.map((actor) => (
            <li key={actor.cast_id}>
              <p className={css.p}>{actor.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieCast;
