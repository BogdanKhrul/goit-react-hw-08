import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register" className={css.header_nav_one}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.header_nav_two}>
        Login
      </NavLink>
    </>
  );
};

export default AuthNav;
