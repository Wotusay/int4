import React from "react";
import { useObserver } from "mobx-react-lite";
import styles from "./footer.module.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../consts";

const Footer = () => {
  return useObserver(() => {
    return (
      <>
        <div className={styles.footer}>
          <div className={styles.footerWidth}>
            <NavLink activeClassName={styles.active} to={ROUTES.activities} className={styles.footerItem}>Activiteiten</NavLink>
            <NavLink activeClassName={styles.active} to={ROUTES.dashboard} className={styles.footerItem}>Dashboard</NavLink>
            <NavLink activeClassName={styles.active} to={ROUTES.photobook} className={styles.footerItem}>Fotoboek</NavLink>
          </div>
        </div>
      </>
    );
  });
};

export default Footer;
