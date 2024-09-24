import React, { useState, useEffect } from "react";
import styles from "./FixNavbar.module.scss";
import { NavLink } from "react-router-dom";
import { TbBurger, TbX } from "react-icons/tb";

const Navbar = ({ cartItems }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const links = [
    { path: "/home", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/menu", name: "Menu" },
    { path: "/stories", name: "Stories" },
    { path: "/contact", name: "Contact" },
  ];
  const cartItemCount = cartItems.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); 
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClose = () => {
    setClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, 800);
  };

  return (
    <div className={styles.navbar}>
      <div>
        <h2>Feliciano</h2>
      </div>
      {isMobile ? (
        <div className={styles.hamburgerMenu}>
          {menuOpen ? (
            <TbX onClick={handleMenuClose} />
          ) : (
            <TbBurger onClick={() => setMenuOpen(true)} />
          )}
          {menuOpen && (
            <div className={`${styles.mobileMenu} ${closing ? styles.closing : ""}`}>
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#c9aa7f" : "white",
                      })}
                      to={link.path}
                      onClick={handleMenuClose}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                <li className={styles.bookTable}>
                  <NavLink to="/basket" onClick={handleMenuClose}>
                    Order Basket
                    {cartItemCount > 0 && (
                      <span className={styles.badge}>{cartItemCount}</span>
                    )}
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#c9aa7f" : "white",
                })}
                to={link.path}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className={styles.bookTable}>
            <NavLink to="/basket">
              Order Basket
              {cartItemCount > 0 && (
                <span className={styles.badge}>{cartItemCount}</span>
              )}
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;