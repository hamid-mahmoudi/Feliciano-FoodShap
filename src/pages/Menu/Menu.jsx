import React, { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import ItemCard from "../../components/ItemCard/ItemCard";
import {
  getItems,
  getGroups,
  setItemInMenu,
  updateItem,
  deleteItem,
} from "../../services/service";
import { RiLoaderFill } from "react-icons/ri";
import { MdLibraryAdd } from "react-icons/md";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import { useOutletContext } from "react-router-dom";


const Menu = () => {
  const [selectedGroup, setSelectedGroup] = useState(1);
  const [menuItems, setMenuItems] = useState([]);
  const [menuTitles, setMenuTitles] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [show, setShow] = useState(false);
  const [isLockScreen, setIsLockScreen] = useState(false);
  const [addTitle, setAddTitle] = useState("");
  const [addDesc, setAddDesc] = useState("");
  const [addPrice, setAddPrice] = useState("");
  const [forceRender, setForceRender] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [imageUrl, setImageUrl] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const { cartItems, handleAddToCart, handleRemoveFromCart } = useOutletContext();


  const showModal = () => {
    setShow(true);
    setIsLockScreen(true);
    document.body.classList.add(styles.noScroll);
  };

  const hideModal = () => {
    setShow(false);
    setIsLockScreen(false);
    document.body.classList.remove(styles.noScroll);
    setAddDesc("");
    setAddPrice("");
    setAddTitle("");
  };

  const showEditModalHandler = (item) => {
    setEditItem(item);
    setImageUrl(item.image);
    setShowEditModal(true);
    setIsLockScreen(true);
    document.body.classList.add(styles.noScroll);
  };

  const hideEditModalHandler = () => {
    setEditItem(null);
    setImageUrl("");
    setShowEditModal(false);
    setIsLockScreen(false);
    document.body.classList.remove(styles.noScroll);
  };

  const showDeleteModalHandler = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
    setIsLockScreen(true);
    document.body.classList.add(styles.noScroll);
  };

  const hideDeleteModalHandler = () => {
    // setItemToDelete(null);
    setShowDeleteModal(false);
    setIsLockScreen(false);
    document.body.classList.remove(styles.noScroll);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoad(true);
      try {
        const { data: menuItems } = await getItems();
        const { data: menuTitles } = await getGroups();
        setMenuItems(menuItems);
        setMenuTitles(menuTitles);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoad(false);
      }
    };
    fetchData();
  }, [forceRender]);

  const handleClick = (index) => {
    setSelectedGroup(index + 1);
  };

  const handleAddItem = async () => {
    const newItem = {
      name: addTitle,
      details: addDesc,
      price: addPrice,
      group_id: selectedCategory,
      image: imageUrl,
    };
    try {
      const { status } = await setItemInMenu(newItem);
      if (status === 201) {
        setMenuItems([...menuItems, newItem]);
        hideModal();
        setForceRender(!forceRender);
      }
    } catch (err) {
      console.log("Error creating item:", err);
    }
  };

  const handleEditItem = async () => {
    const updatedItem = {
      ...editItem,
      image: imageUrl,
      group_id: Number(editItem.group_id),
    };
    try {
      const { status } = await updateItem(updatedItem, editItem.id);
      if (status === 200) {
        setMenuItems(
          menuItems.map((item) =>
            item.id === editItem.id ? updatedItem : item
          )
        );
        hideEditModalHandler();
        setForceRender(!forceRender);
      }
    } catch (err) {
      console.log("Error updating item:", err.response);
    }
  };

  const handleDeleteItem = async () => {
    try {
      if (!itemToDelete || !itemToDelete.id) {
        console.error("Invalid item or item ID");
        return;
      }
      const { status } = await deleteItem(itemToDelete.id);
      if (status === 200) {
        console.log("حذف موفقیت‌آمیز");
        setMenuItems(
          menuItems.filter((menuItem) => menuItem.id !== itemToDelete.id)
        );
        hideDeleteModalHandler();
        setForceRender(!forceRender);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(cartItems);
  return (
    <div>
      <div
        className={styles.container}
        style={isLockScreen ? { overflowY: "hidden" } : {}}
      >
        <div className={styles.addFood}>
          <MdLibraryAdd onClick={showModal} />
        </div>
        <h3 className={styles.menuTitle}>Specialties</h3>
        {isLoad ? (
          <RiLoaderFill className="m-auto animate-spin text-5xl text-center w-full" />
        ) : (
          <>
            <ul className={styles.menuList}>
              {menuTitles.map((item, index) => (
                <li
                  key={item.id}
                  className={`${styles.menuItem} ${
                    selectedGroup === index + 1 ? styles.selected : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            {menuItems.length > 0 && (
              <div className={styles.content}>
                <ul>
                  {menuItems
                    .filter(
                      (contentItem) => contentItem.group_id === selectedGroup
                    )
                    .map((contentItem, index) => (
                      <ItemCard
                        index={index}
                        key={contentItem.id}
                        contentItem={contentItem}
                        onDelete={() => showDeleteModalHandler(contentItem)}
                        onEdit={() => showEditModalHandler(contentItem)}
                        onAddToCart={() => handleAddToCart(contentItem)}
                        onRemoveFromCart={() =>
                          handleRemoveFromCart(contentItem)
                        }
                        cartItems={cartItems}
                      />
                    ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
      <Modal show={show} handleClose={hideModal}>
        <div className={styles.modal}>
          <ImageUploader onUpload={setImageUrl} />
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="Title"
              value={addTitle}
              onChange={(e) => setAddTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={addDesc}
              onChange={(e) => setAddDesc(e.target.value)}
            />
            <input
              type="number"
              placeholder="Price"
              value={addPrice}
              onChange={(e) => setAddPrice(e.target.value)}
            />
            <div>
              <label htmlFor="category">Category:</label>
              <select
                name="category"
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(Number(e.target.value))}
              >
                {menuTitles &&
                  menuTitles.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <Button text="Submit" onClick={handleAddItem} />
          </div>
        </div>
      </Modal>
      <Modal show={showEditModal} handleClose={hideEditModalHandler}>
        <div className={styles.modal}>
          <ImageUploader
            onUpload={setImageUrl}
            initialImageUrl={editItem ? editItem.image : ""}
          />
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="Title"
              value={editItem ? editItem.name : ""}
              onChange={(e) =>
                setEditItem({ ...editItem, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              value={editItem ? editItem.details : ""}
              onChange={(e) =>
                setEditItem({ ...editItem, details: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Price"
              value={editItem ? editItem.price : ""}
              onChange={(e) =>
                setEditItem({ ...editItem, price: e.target.value })
              }
            />
            <div>
              <label htmlFor="category">Category:</label>
              <select
                name="category"
                id="category"
                value={editItem ? editItem.group_id : ""}
                onChange={(e) =>
                  setEditItem({
                    ...editItem,
                    group_id: Number(e.target.value),
                  })
                }
              >
                {menuTitles &&
                  menuTitles.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <Button text="Submit" onClick={handleEditItem} />
          </div>
        </div>
      </Modal>
      <Modal show={showDeleteModal} handleClose={hideDeleteModalHandler}>
        <div className={styles.modalDelete}>
          <div className={styles.desc}>
            <p>Are you sure to delete </p>
            <h3>{itemToDelete ? itemToDelete.name : `Item`}</h3>
          </div>
          <div className={styles.buttons}>
            <Button text="Sure" onClick={handleDeleteItem} />
            <Button text="No" onClick={hideDeleteModalHandler} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Menu;
