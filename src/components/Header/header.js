import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <> 
        <div className={styles.header}>
            <h1 className={styles.logo}>LOGO</h1>
            <div className={styles.buttons}>
            <Link style={{textDecoration: 'none'}}>
                <p className={styles.about}>Over ons</p>
            </Link>
            <Link style={{textDecoration: 'none'}}>
                <p className={styles.login}>Login</p>
            </Link></div>
        </div>
        </>
    )
}

export default Header; 