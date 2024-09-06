import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.present}>
        <h4>Feliciano</h4>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className={styles.opens}>
        <h4>Open Hours</h4>
        <div>
          <div>
            <span>Monday</span>
            <span>9:00 - 24:00</span>
          </div>{" "}
          <div>
            <span>Tuesday</span>
            <span>9:00 - 24:00</span>
          </div>{" "}
          <div>
            <span>Wednesday</span>
            <span>9:00 - 24:00</span>
          </div>{" "}
          <div>
            <span>Thursday</span>
            <span>9:00 - 24:00</span>
          </div>{" "}
          <div>
            <span>Saturday</span>
            <span>9:00 - 24:00</span>
          </div>{" "}
          <div>
            <span>Friday</span>
            <span>9:00 - 24:00</span>
          </div>{" "}
          <div>
            <span>Sunday</span>
            <span>9:00 - 24:00</span>
          </div>
        </div>
      </div>
      <div className={styles.instagram}>
        <h4>Instagram</h4>
      </div>
      <div className={styles.news}>
        <h4>Newsletter</h4>
        <p>Far far away, behind the word mountains, far from the countries.</p>
      </div>
    </div>
  );
};

export default Footer;
