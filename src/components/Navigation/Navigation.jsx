import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={css.div}>
      <p>FilmQuest</p>
      <nav>
        <ul className={css.ul}>
          <li>
            {" "}
            <NavLink className={css.navlink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navlink} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
