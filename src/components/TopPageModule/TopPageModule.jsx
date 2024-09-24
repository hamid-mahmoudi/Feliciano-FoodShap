import React, { useEffect, useState } from "react";
import styles from "./TopPageModule.module.scss";
import { Link, useLocation } from "react-router-dom";

const TopPageModule = () => {
  const location = useLocation();
  let pathName = location.pathname.slice(1, 10).toLocaleUpperCase();
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className={`${styles.section} ${styles.section1}`}
              style={{ transform: scrolled ? "scale(1.02) " : "scale(1)",  filter: scrolled ? " grayscale(.5) " : " grayscale(0)" ,transition:"all 2s ease-in-out"}}
      ></div>
      {pathName === "HOME" ? (
        " "
      ) : (
        <div className={styles.pagination}>
          <Link to={"/home"}>
            HOME<span>⟩</span>
          </Link>
          {location.pathname === "/" ? (
            ""
          ) : (
            <p className={styles.path}>
              {pathName}
              <span>⟩</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default TopPageModule;