import { useParams } from "react-router-dom";

import { getMovieCast } from "../../api";
import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then((data) => setCast(data.cast));
  }, [movieId]);

  return (
    <div className={css.div}>
      <ul className={css.ul}>
        {cast.map((actor) => (
          <li key={actor.id} className={css.li}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
