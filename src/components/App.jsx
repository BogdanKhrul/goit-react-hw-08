import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../redux/auth/operations";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Layout from "./Layout/Layout";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegistrationPage />}
              redirectTo="/contacts"
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
