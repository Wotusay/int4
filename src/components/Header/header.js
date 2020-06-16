import React from "react";
import styles from "./header.module.css";
import { Link, useHistory } from "react-router-dom";
import { ROUTES, mediaQueries } from "../../consts";
import { useStores } from "../../hooks/index";
import { useObserver } from "mobx-react-lite";
import MediaQuery from "react-responsive";

const Header = () => {
  const { uiStore } = useStores();
  const history = useHistory(); 

  const handleLogin  = (e) => {
    e.preventDefault();
      uiStore.logout();
      return history.push(ROUTES.home);

      
  };

  return useObserver(() => (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <Link to={ROUTES.home} style={{ textDecoration: "none" }}>
          <MediaQuery maxDeviceWidth={mediaQueries.desktop} minDeviceWidth={mediaQueries.tablet}>
            <h1 className={styles.logo}>HoneyHome</h1>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={mediaQueries.tablet-1}>
            <h1 className={styles.logo}>H</h1>
            </MediaQuery>
          </Link>
          <div className={styles.buttons}>
            <Link style={{ textDecoration: "none" }}>
              <p className={styles.about}>Over ons</p>
            </Link>
            <Link onClick={(e) => handleLogin(e)} className={styles.login} style={{ textDecoration: "none" }}>
                {uiStore.loginState === true ? 'Logout' : 'Login' }
            </Link>
          </div>
        </div>
      </div>
    </>
  ));
};

export default Header;
