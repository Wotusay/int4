import React from "react";
import styles from "./pizzaDone.module.css";
import Back from "../BackBlack/backblack";
import { ROUTES } from "../../consts/index";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { useStores } from "../../hooks";

const PizzaDone = () => {
  const history = useHistory();
  const {uiStore} = useStores();
  return useObserver(() => {
  if (uiStore.currentBox === undefined) {
    history.push(ROUTES.login)
    return (
      <p className="loading"> loading ...</p>
    )
  } else { 
    return(
    <>
      <div className={styles.configurator}>
        <div className={styles.content}>
          <div className={styles.back}>
            <Back />
          </div>
          <h1 className={styles.title}>Maak uw eigen pizza! </h1>

          <div className={styles.needs}>
            <h2 className={styles.needsTitle}>Voor jouw pizza heb je nodig:</h2>
            <li className={styles.needsItem}>Enkele lepels tomatensaus</li>
            <li className={styles.needsItem}>Champignons (naar smaak)</li>
            <li className={styles.needsItem}>¼ groene pepers (in reepjes)</li>
            <li className={styles.needsItem}>Geraspte kaas (naar smaak)</li>
            <li className={styles.needsItem}>
              Italiaanse salami (pepperoni, naar smaak)
            </li>
            <img
              alt="Pizza"
              className={styles.img}
              src="/assets/pizza/pizza_end.png"
            />
          </div>

          <div className={styles.buttonWrapper}>
            <button
              onClick={() => {
                history.goBack();
              }}
              className={styles.buttonLight}
            >
              Vorige stap
            </button>

            <Link to={ROUTES.uploadpicture}>
              <button className={styles.button}>Foto uploaden</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )}});
};

export default PizzaDone;
