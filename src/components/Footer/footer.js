import React from "react";
import { useObserver } from "mobx-react-lite";
import styles from "./footer.module.css";

const Footer = () => {
  return useObserver(() => {
    return (
      <>
        <div className={styles.footer}>
          <p className={styles.footerItem}>Activiteiten</p>
          <p className={styles.active}>Dashboard</p>
          <p className={styles.footerItem}>Fotoboek</p>
        </div>
      </>
    );
  });
};

export default Footer;
