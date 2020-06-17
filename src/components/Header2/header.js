import React from "react";
import styles from "./header.module.css";
import { Link, useHistory } from "react-router-dom";
import { ROUTES, mediaQueries } from "../../consts";
import { useStores } from "../../hooks/index";
import { useObserver } from "mobx-react-lite";

const Header = () => {
  const { uiStore } = useStores();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    uiStore.logout();
    return history.push(ROUTES.login);
  };
  return useObserver(() => (
    <>
      <div className={styles.header}>
        <Link
          className={styles.logo}
          to={ROUTES.home}
          style={{ textDecoration: "none" }}
        >
          <h1>HoneyHome</h1>
        </Link>
        <div className={styles.nav}>
          <p className={styles.navItem}>Boxes</p>
          <p className={styles.navItem}>Quiz</p>
          <Link
            onClick={(e) => handleLogin(e)}
            className={styles.login}
            to={ROUTES.home}
            style={{ textDecoration: "none" }}
          >
            {uiStore.loginState === true ? "Logout" : "Login"}
          </Link>
        </div>
      </div>
    </>
  ));
};

export default Header;
