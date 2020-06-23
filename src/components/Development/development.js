import React from "react";
import styles from "./development.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ROUTES } from "../../consts";

const Development = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Deze pagina is onder development en zal binnenkort beschikbaar zijn.
        </h1>
        <Link to={ROUTES.dashboard}>
          <button className={styles.button}>Terug naar de dashboard</button>
        </Link>
      </div>
    </>
  );
};

export default Development;
