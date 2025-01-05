import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.home_btn}>
        Home
      </NavLink>
    </nav>
  );
};

export default Navigation;
