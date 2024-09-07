import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import FixNavbar from "./components/FixNavbar/FixNavbar";
import TopPageModule from "./components/TopPageModule/TopPageModule";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  const handleAddToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 310) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      if (window.scrollY < 250 && lastScrollY >= 250) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <TopPageModule />
      <div>
        {showNavbar && <Navbar cartItems={cartItems} />}
        <FixNavbar cartItems={cartItems} />
        <Outlet context={{ cartItems, handleAddToCart, handleRemoveFromCart }} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
