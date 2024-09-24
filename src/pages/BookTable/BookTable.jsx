import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./BookTable.module.scss";
import ShopItem from "../../components/ShopItem/ShopItem";
import Footer from "../../components/Footer/Footer";

const BookTable = () => {
  const { cartItems, handleRemoveFromCart } = useOutletContext();

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <div>
    <div className={styles.container}>
      <h3 className={styles.menuTitle}>Order Basket</h3>
      {cartItems.map((item) => (
        <ShopItem key={item.id} item={item} onRemove={handleRemoveFromCart} />
      ))}
      <div className={styles.total}>
        <span>
          Total Price:<span>${totalPrice.toFixed(2)}</span>
        </span>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BookTable;