import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Мінімум 3 символи").required("Обовязково"),
    number: Yup.string().min(9, "Мінімум 9 символів").required("Обовязково"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      ...values,
      completed: false,
    };

    try {
      await dispatch(addContact(newContact)).unwrap();
      toast.success(`Contact "${values.name}" was added!`);
      resetForm();
    } catch {
      toast.error("Error");
    }
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.form}>
          <>
            <label htmlFor="name" className={css.l} />
            <Field
              name="name"
              id="name"
              placeholder="Name"
              className={css.input}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </>
          <>
            <label htmlFor="number" className={css.l} />
            <Field
              name="number"
              id="number"
              placeholder="Number"
              className={css.input}
            />
            <ErrorMessage name="number" component="div" className={css.error} />
          </>
          <button type="submit" className={css.add_btn}>
            Add
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
