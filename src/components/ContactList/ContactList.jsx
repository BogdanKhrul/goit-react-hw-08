import css from "./ContactList.module.css";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectFilteredContactsMemo } from "../../redux/contacts/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContactsMemo);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const renderContacts = () => {
    return filteredContacts.map(({ id, name, number }) => (
      <Contact key={id} id={id} name={name} number={number} />
    ));
  };
  return <ul className={css.сollection}>{renderContacts()}</ul>;
};

export default ContactList;
