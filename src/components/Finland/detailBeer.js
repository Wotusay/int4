import React from "react";
import styles from "./detail.module.css";
import Back from "../BackBlack/backblack";
import { useStores } from "../../hooks";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";
import { useObserver } from "mobx-react-lite";

const DetailBeer = () => {
  const {uiStore} = useStores();
  const history = useHistory();
  return useObserver(() => {
  if (uiStore.currentBox === undefined) {
    history.push(ROUTES.login)
    return (
      <p className="loading"> loading ...</p>
    )
  } else {

  return (
    <>
      <div className={styles.activity}>
        <div className={styles.back}>
          <Back />
        </div>
        <div className={styles.content}>
          <div className={styles.intro}>
            <h1 className={styles.introTitle}>Bruine beer</h1>
            <p className={styles.introText}>
              Staat bekend onder de bijnaam "de Steelpan" en is het op twee na
              grootste sterrenbeeld aan de hemel. Het is op het noordelijk
              halfrond het hele jaar door te zien. Achter de Grote Beer schuilt
              de mythe over de mooie Callisto, de vrouw die door Zeus werd
              verleid en als wraak in een beer werd veranderd door Hera, de
              vrouw van Zeus. Wanneer Zeus later Callisto en hun gezamenlijke
              zoon vindt, stuurt hij ze beiden naar de hemel – Callisto als de
              Grote Beer en haar zoon als de Kleine Beer.
            </p>
          </div>
          <div className={styles.starImg}>
            <picture className={styles.right}>
              <source
                media="(min-width: 1200px)"
                srcSet="/assets/stargazing/beer_detail.png"
              />
              <source
                media="(min-width: 320px)"
                srcSet="/assets/stargazing/beer.png"
              />
              <img
                alt="Zoek de beer in de hemel"
                style={{ width: "auto" }}
                src="/assets/stargazing/beer_detail.png"
              />
            </picture>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>Scan de sterren</button>
          </div>
        </div>
      </div>
    </>
  )}});

};

export default DetailBeer;
