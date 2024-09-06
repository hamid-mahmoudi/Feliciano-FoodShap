import React, { useState, useEffect } from "react";
import styles from "./ShopItem.module.scss";
import { CiBookmarkRemove } from "react-icons/ci";

const ShopItem = ({ item, onRemove }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const getGroups = (id) => {
    switch (id) {
      case 1:
        return "Breakfast";
      case 2:
        return "Lunch";
      case 3:
        return "Dinner";
      case 4:
        return "Drinks";
      case 5:
        return "Desserts";
      case 6:
        return "Wine";
      default:
        return "";
    }
  };

  const handleRemoveClick = () => {
    setIsRemoving(true);
  };

  useEffect(() => {
    if (isRemoving) {
      const timer = setTimeout(() => {
        onRemove(item);
      }, 500); 

      return () => clearTimeout(timer);
    }
  }, [isRemoving, onRemove, item]);

  return (
    <div className={`${styles.container} ${isRemoving ? styles["fade-out"] : ""}`}>
      <div className={styles.image}>
        <img
          src={item.image}
          alt=""
        />
      </div>
      <div className={styles.body}>
        <div className={styles.description}>
          <div>
            <h3>{item.name}</h3>
            <p>{getGroups(item.group_id)}</p>
          </div>
          <p>golden-brown French toast served with syrup and powdered sugar</p>
        </div>
        <span>{item.price} $</span>
        <span className={styles.icon} onClick={handleRemoveClick}><CiBookmarkRemove/></span>
      </div>

    </div>
  );
};

export default ShopItem;