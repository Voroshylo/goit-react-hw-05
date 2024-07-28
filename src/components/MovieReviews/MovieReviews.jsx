import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then((data) => setReviews(data.result));
  }, [movieId]);

  return (
    <div className={css.div}>
      <ul className={css.ul}>
        {reviews.map((review) => (
          <li className={css.li} key={reviews.id}>
            <p className={css.p}>Author: {review.author}</p>
            <p className={css.p}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
