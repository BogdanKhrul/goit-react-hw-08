import css from "./LoginForm.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const initialValues = {
    password: "",
    email: "",
  };

  const handleSubmit = (v, opt) => {
    dispatch(login(v));
    opt.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div className={css.box}>
      <h2 className={css.txt}>Login</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field name="email" placeholder="Enter email" />
          <Field name="password" type="password" placeholder="Enter password" />
          <button className={css.form_btn} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
