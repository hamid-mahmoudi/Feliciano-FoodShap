import React, { useState, useEffect } from "react";
import styles from "./ItemCard.module.scss";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { BiCartDownload } from "react-icons/bi";
import { AiTwotoneEdit, AiOutlineDelete } from "react-icons/ai";
import { MdOutlineBookmarkAdded } from "react-icons/md";

const ItemCard = ({ index, contentItem, onEdit, onDelete, onAddToCart, onRemoveFromCart, cartItems }) => {
  const [isLike, setIsLike] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const isReverseContent = index % 4 === 2 || index % 4 === 3;

  useEffect(() => {
    // Check if the item is already in the cart
    const isInCart = cartItems.some(cartItem => cartItem.id === contentItem.id);
    setIsAddedToCart(isInCart);
  }, [cartItems, contentItem.id]);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  const handleCartClick = () => {
    if (isAddedToCart) {
      onRemoveFromCart();
    } else {
      onAddToCart();
    }
    setIsAddedToCart(!isAddedToCart);
  };

  const notFoundImagePath =
    process.env.PUBLIC_URL + "/assets/images/notFoundImage.png";

  return (
    <li
      className={`${styles.contentItem} ${
        isReverseContent ? styles.reverseContent : ""
      }`}
    >
      <div className={styles.itemImage}>
        <img
          src={contentItem.image ? contentItem.image : notFoundImagePath}
          alt={contentItem.name}
        />
      </div>
      <div className={styles.description}>
        <h4>{contentItem.name}</h4>
        <p>{contentItem.details}</p>
        <span className={styles.price}>${contentItem.price}</span>
        <div className={styles.panel}>
          <span>
            <AiOutlineDelete onClick={onDelete} />
          </span>{" "}
          <span onClick={onEdit}>
            <AiTwotoneEdit />
          </span>
          <span onClick={handleCartClick}>
            {isAddedToCart ? <MdOutlineBookmarkAdded /> : <BiCartDownload />}
          </span>
          <span onClick={handleLike} className={isLike ? styles.likeIcon : ""}>
            {isLike ? <IoHeartSharp /> : <IoHeartOutline />}
          </span>
        </div>
      </div>
    </li>
  );
};

export default ItemCard;