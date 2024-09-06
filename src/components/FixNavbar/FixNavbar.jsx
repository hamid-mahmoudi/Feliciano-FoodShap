import React from "react";
import styles from "./FixNavbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { path: "/home", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/menu", name: "Menu" },
    { path: "/stories", name: "Stories" },
    { path: "/contact", name: "Contact" },
  ];
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
                              color: isActive ? "#c9aa7f" : "white",
                            };
                          }}
            to={link.path}>{link.name}</NavLink>
          </li>
        ))}
        <li className={styles.bookTable}>
          <NavLink to="/basket">Order Basket</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
