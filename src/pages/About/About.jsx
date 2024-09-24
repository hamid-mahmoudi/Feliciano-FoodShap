import React, { useEffect, useState } from "react";
import styles from "./About.module.scss";
import ChefCard from "../../components/ChefCard/ChefCard";
import { getChefCards } from "../../services/service";
import { BsPlusCircleDotted } from "react-icons/bs";
import Footer from "../../components/Footer/Footer";

const About = () => {
  const [chefCard, setChefCard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: chefCard } = await getChefCards();
      setChefCard(chefCard);
    };
    fetchData();
  }, []);
  return (
    <div>
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
      <section className={styles.chefCards}>
        <h3>Our Master Chefs</h3>
        <div className={styles.cardsContainer}>
          {chefCard.map((card) => (
            <ChefCard key={card.id} name={card.name} position={card.position} image={card.image} />
          ))}
          <div className={styles.addCard}>
            <BsPlusCircleDotted/>
          </div>
        </div>
      </section>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
