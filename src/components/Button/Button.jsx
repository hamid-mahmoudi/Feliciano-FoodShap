import React from "react";
import styles from "./Button.module.scss"

const Button = ({onClick, text}) => {
  return (
    <div className={styles.button}>
      <button onClick={onClick}> {text} </button>
    </div>
  );
};

export default Button;
