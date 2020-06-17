import React from "react";
import styles from "./header.module.css";
import { useObserver } from "mobx-react-lite";

const Header = () => {
  return useObserver(() => (
    <>
      <div className={styles.header}>
        <h1 className={styles.logo}>HoneyHome</h1>

        <div className={styles.nav}>
          <p className={styles.navItem}>Boxes</p>
          <p className={styles.navItem}>Quiz</p>
          <p className={styles.navItem}>Login</p>
        </div>
      </div>
    </>
  ));
};

export default Header;
