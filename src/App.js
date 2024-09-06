import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import FixNavbar from "./components/FixNavbar/FixNavbar";
import TopPageModule from "./components/TopPageModule/TopPageModule";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 310) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
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
        {showNavbar && <Navbar />}
        <FixNavbar />
        <Outlet context={{ cartItems, handleAddToCart, handleRemoveFromCart }} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
