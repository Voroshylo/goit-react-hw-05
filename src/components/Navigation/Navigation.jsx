import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={css.NavLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={css.NavLink}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
