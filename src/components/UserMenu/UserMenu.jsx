import css from "./UserMenu.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div className={css.box}>
      <p className={css.user}>Welcome, {user.name}</p>
      {isLoggedIn && (
        <button
          className={css.logout_btn}
          type="button"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default UserMenu;
