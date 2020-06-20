import React from "react";
import { useObserver } from "mobx-react-lite";
import styles from "./footer.module.css";

const Footer = () => {
  return useObserver(() => {
    return (
      <>
        <div className={styles.footer}>
          <div className={styles.footerWidth}>
            <p className={styles.footerItem}>Activiteiten</p>
            <p className={styles.active}>Dashboard</p>
            <p className={styles.footerItem}>Fotoboek</p>
          </div>
        </div>
      </>
    );
  });
};

export default Footer;
