import css from "./Contact.module.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { HiUser, HiPhone } from "react-icons/hi";
import { deleteContact } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";

const Contact = ({ id, name, number }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = async () => {
    try {
      await dispatch(deleteContact(id)).unwrap();
      toast.success(`Contact "${name}" was deleted!`);
    } catch {
      toast.error("Failed to delete the contact.");
    } finally {
      setModalVisible(false);
    }
  };

  return (
    <>
      <li className={css.box}>
        <div className={css.contactBox}>
          <span className={css.contactIcon}>
            <HiUser /> {name}:
          </span>
          <span className={css.contactIcon}>
            <HiPhone /> {number}
          </span>
        </div>
        <button className={css.del_btn} onClick={() => setModalVisible(true)}>
          Delete
        </button>
      </li>
      {modalVisible && (
        <Modal
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          onConfirm={deleteHandler}
        />
      )}
    </>
  );
};

export default Contact;
