import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={css.div}>
      <h1 className={css.title}>
        React<span className={css.span}>Cinema</span>
      </h1>
      <nav>
        <ul className={css.ul}>
          <li>
            {" "}
            <NavLink className={css.btn} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.btn} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
