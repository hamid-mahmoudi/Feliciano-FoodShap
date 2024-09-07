import React from "react";
import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  const links = [
    { path: "/home", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/menu", name: "Menu" },
    { path: "/stories", name: "Stories" },
    { path: "/contact", name: "Contact" },
  ];

  const cartItemCount = cartItems.length;

  return (
    <div className={styles.navbar}>
      <div>
        <h2>Feliciano</h2>
      </div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "#c9aa7f" : "black",
                };
              }}
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
    </div>
  );
};

export default Navbar;