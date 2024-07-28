import { Link } from "react-router-dom";
import css from "./NotFoundPAge.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.div}>
      <h1 className={css.h1}>PAge not found</h1>
      <Link to="/" className={css.Link}>
        Go to Home
      </Link>
    </div>
  );
};
export default NotFoundPage;
