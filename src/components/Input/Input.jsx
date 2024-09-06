import React from "react";
import styles from "./input.module.scss";

const Input = ({
  type = "text",
  placeholder,
  onClick,
  onChange,
  fullWidth = false,
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        style={fullWidth ? { width: "90%" } : {}}
        type={type}
        placeholder={placeholder}
        onClick={onClick}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
