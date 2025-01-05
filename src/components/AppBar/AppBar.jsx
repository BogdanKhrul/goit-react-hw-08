import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const renderContent = () => {
    return isLoggedIn ? <UserMenu /> : <AuthNav />;
  };

  return (
    <header className={css.h_m}>
      <Navigation />
      {renderContent()}
    </header>
  );
};

export default AppBar;
