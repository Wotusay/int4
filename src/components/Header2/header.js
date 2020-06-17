import React from "react";
import styles from "./header.module.css";
import { Link, useHistory, NavLink } from "react-router-dom";
import { ROUTES, mediaQueries } from "../../consts";
import { useStores } from "../../hooks/index";
import { useObserver } from "mobx-react-lite";
import MediaQuery from "react-responsive";


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
            <MediaQuery maxDeviceWidth={mediaQueries.desktop} minDeviceWidth={mediaQueries.tablet}>
            <h1 className={styles.logo}>HoneyHome</h1>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={mediaQueries.tablet-1}>
            <h1 className={styles.logo}>H</h1>
            </MediaQuery>
        </Link>
        <div className={styles.nav}>
          <NavLink  style={{textDecoration: "none"}} activeStyle={{borderBottom: "solid 1px white" }} to={ROUTES.boxes.path} className={styles.navItem}>Boxes</NavLink>
          <p className={styles.navItem}>Quiz</p>
          <Link 
            onClick={(e) => handleLogin(e)}
            className={styles.login}
            to={ROUTES.login}
            style={{ textDecoration: "none"}}
          >
            {uiStore.loginState === true ? "Logout" : "Login"}
          </Link>
        </div>
      </div>
    </>
  ));
};

export default Header;
