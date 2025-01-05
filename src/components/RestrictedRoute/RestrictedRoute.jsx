import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isUserAuthenticated = useSelector(selectIsLoggedIn);
  return isUserAuthenticated ? <Navigate to={redirectTo} replace /> : Component;
};

export default RestrictedRoute;
