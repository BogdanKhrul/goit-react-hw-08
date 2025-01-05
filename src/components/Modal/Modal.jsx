import css from "./Modal.module.css";

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={css.box}>
      <div className={css.container}>
        <h5>Do you want to delete this contact?</h5>
        <div className={css.btn_box}>
          <button onClick={onConfirm} className={css.btn_yes}>
            Yes
          </button>
          <button onClick={onClose} className={css.btn_no}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
