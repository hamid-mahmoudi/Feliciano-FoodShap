import React from "react";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.menuTitle}>About</h3>
      <section className={styles.presentRestaurant}>
        <div className={styles.frame}>
          <div></div>
          <div></div>
        </div>
        <div className={styles.descriptions}>
          <h2>Feliciano Restaurant</h2>
          <p className={styles.paraf}>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <div className={styles.times}>
            <p>Mon - Fri</p>
            <span>8 AM - 11 PM</span>
          </div>
          <p className={styles.number}>+ 1-978-123-4567</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
