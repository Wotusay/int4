import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

const Header = () => {
    return(
        <> 
        <div className={styles.header}>
            <Link  to={ROUTES.home} style={{textDecoration: 'none'}} >
            <h1 className={styles.logo}>HoneyHome</h1>
            </Link>
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