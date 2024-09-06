import React from "react";
import styles from "./Modal.module.scss";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ show, handleClose, children }) => {
  const showHideClassName = show ? styles.displayBlock : styles.displayNone;

  return (
    <div className={`${styles.modal} ${showHideClassName}`}>
      <section className={styles.modalMain}>
        {children}
        <div className={styles.close}>
          <RxCross2 onClick={handleClose} />
        </div>
      </section>
    </div>
  );
};

export default Modal;
