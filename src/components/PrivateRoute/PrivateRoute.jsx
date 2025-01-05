import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const isUserAuthenticated = useSelector(selectIsLoggedIn);

  if (isUserAuthenticated) {
    return children;
  }

  return <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
