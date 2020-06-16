import React from "react";
import styles from "./home.module.css";
import { Link, useHistory } from "react-router-dom";
import { ROUTES, mediaQueries } from "../../consts";
import { useStores } from "../../hooks/index";
import { useObserver } from "mobx-react-lite";
import MediaQuery from "react-responsive";

const Home = () => {

    
  return ( 
    <>
        <div className={styles.grid}>
            <div>
            <h2 className={styles.title}>
            Beleef jouw honeymoon thuis
            </h2>
            <p className={styles.desc}>
            Zit je vast thuis? Is je honeymoon geannuleerd en wil je toch nog iets doen? Met onze pakketten beleef je je honeymoon thuis!
            </p></div>
            <Link className={styles.pic}>
             </Link>
        </div>
        <img className={styles.indicator} src='assets/indication-letsgo.png'/> 
    </>
  );
};

export default Home;