import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import styles from "./ChefCard.module.scss";

const ChefCard = ({ name, position,image }) => {
  return (
    <div className={styles.chefCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt="Chef" />
      </div>
      <div>
        <h4 className={styles.titles}>{name}</h4>
        <span className={styles.positions}>{position}</span>
        <div className={styles.icons}>
          <FaTwitter />
          <FaFacebookF />
          <FaGooglePlusG />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default ChefCard;