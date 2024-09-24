import React, { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";
import styles from "./Home.module.scss";
import Footer from "../../components/Footer/Footer";
import { HiOutlineCake } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";


const Home = () => {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <h3 className={styles.menuTitle}>
          This is <span>Feliciano</span>
        </h3>
        <section className={styles.presentRestaurant}>
          <div className={styles.frame}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.descriptions}>
            <h2>Feliciano Restaurant</h2>
            <p className={styles.paraf}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <div className={styles.times}>
              <p>Mon - Fri</p>
              <span>8 AM - 11 PM</span>
            </div>
            <p className={styles.number}>+ 1-978-123-4567</p>
          </div>
        </section>
        <section ref={statsRef} className={styles.counterSec}>
          <div>
            <span>
              {startCount ? <CountUp start={1} end={18} duration={2} /> : "0"}
            </span>
            Years of Experienced
          </div>
          <div>
            <span>
              {startCount ? <CountUp start={1} end={100} duration={2} /> : "0"}
            </span>
            Menus/Dish
          </div>
          <div>
            <span>
              {startCount ? <CountUp start={1} end={50} duration={2} /> : "0"}
            </span>
            Staffs
          </div>
          <div>
            <span>
              {startCount ? (
                <CountUp start={1} end={15000} duration={2} />
              ) : (
                "0"
              )}
            </span>
            Happy Customers
          </div>
          <div>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </div>
        </section>
        <section className={styles.services}>
          <h3>Catering Services</h3>
          <div>
            <div>
              <span><HiOutlineCake /></span>
              <h4>Birthday Party</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
            <div>
              <span><RiTeamLine /></span>
              <h4>Business Meetings
              </h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
            <div>
              <span><IoFastFoodOutline /></span>
              <h4>Wedding Party</h4>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
