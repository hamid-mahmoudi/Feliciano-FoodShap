import React from "react";
import styles from "./Contact.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
const Contact = () => {
  return (
    <div>
    <div className={styles.container}>
      <h3 className={styles.menuTitle}>Contact</h3>
      <div className={styles.form}>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627917975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6f1b1a1e1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1614311234567!5m2!1sen!2sau"
          width="50%"
          height="450"
          style={{ border: "0", borderRadius: "10px", outline: "none" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div className={styles.session}>
          <h3>Contact Us</h3>
          <div className={styles.inputs}>
            <Input placeholder="Your Name" fullWidth={true} />
            <Input placeholder="Your Email" fullWidth={true} />
            <Input placeholder="Subject" fullWidth={true} />
            <textarea placeholder="Message" />
            <Button text="Send Message" />
          </div>
        </div>
      </div>

      <div className={styles.contactInfos}>
        <h3>Contact Information
        </h3>
        <div className={styles.row}>
          <div>
            <p>Address:198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
          <div>
            <span>Phone:</span>
            <span className={styles.pointer}>+ 1235 2355 98</span>
          </div>
          <div>
            <span>Email:</span>
            <span className={styles.pointer}>info@yoursite.com</span>
          </div>
          <div>
            <span>Website:</span>
            <span className={styles.pointer}>yoursite.com</span>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
