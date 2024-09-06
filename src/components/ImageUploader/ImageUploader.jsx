import React, { useState, useEffect } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import styles from "./ImageUploader.module.scss";

const ImageUploader = ({ onUpload, initialImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl || "");

  useEffect(() => {
    if (initialImageUrl) {
      setImageUrl(initialImageUrl);
    }
  }, [initialImageUrl]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedImageUrl = URL.createObjectURL(file);
      setImageUrl(uploadedImageUrl);
      onUpload(uploadedImageUrl);
    }
  };

  return (
    <div className={styles.photoModal} onClick={() => document.getElementById('file-upload').click()}>
      <input
        id="file-upload"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      {imageUrl && <img src={imageUrl} alt="Uploaded" className={styles.preview} />}
      <div className={styles.overlay}>
        <TbPhotoPlus className={styles.icon} />
      </div>
    </div>
  );
};

export default ImageUploader;