import css from "./RegistrationForm.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then((response) => {
        toast.success(`Welcome, ${response.user.name}!`);
        navigate("/contacts");
      })
      .catch(() => {
        toast.error("Oops... Something went wrong. Please try again.");
      });
    resetForm();
  };

  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  return (
    <div className={css.box}>
      <h2 className={css.txt}>Registration</h2>

      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <Field name="name" placeholder="Enter your name" />
          <Field name="email" placeholder="Enter your email" />
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button className={css.form_btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
