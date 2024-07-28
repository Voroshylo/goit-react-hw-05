import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [noReviews, setNoReviews] = useState(false);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        if (data.length === 0) {
          setNoReviews(true);
        } else {
          setReviews(data);
          setNoReviews(false);
        }
        setError(null);
      } catch (err) {
        setError("Failed to fetch reviews.");
        setNoReviews(false);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <div>
      {error && <p className={css.error}>{error}</p>}
      {noReviews && !error && (
        <p className={css.error}>No reviews available for this movie.</p>
      )}
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p className={css.p}>
              <span>Author: {review.author}:</span> {review.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
