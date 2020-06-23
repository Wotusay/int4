import React from "react";
import styles from "./detail.module.css";
import Back from "../BackBlack/backblack";
import { useObserver } from "mobx-react-lite";
import { ROUTES } from "../../consts";
import { useHistory } from "react-router-dom";
import { useStores } from "../../hooks";

const DetailVeulen = () => {
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
            <h1 className={styles.introTitle}>Vlot Veulen</h1>
            <p className={styles.introText}>
              Het is het op één na kleinste sterrenbeeld en maakt deel uit van
              de noordelijke sterrenhemel. De wetenschappelijke benaming is
              Equuleus. Dit kleine sterrenbeeld bevat geen heldere sterren.
              Equuleus wordt in de Griekse mythologie vaak gelinkt aan Hippolyte
              die de dochter was van de centaur Chiron. Equuleus, wordt
              daarnaast ook geassocieerd met Celeris, dit was een veulen dat
              door Mercurius als geschenk werd gegeven aan Castor.
            </p>
          </div>
          <div className={styles.starImg}>
            <picture className={styles.right}>
              <source
                media="(min-width: 1200px)"
                srcSet="/assets/stargazing/veulen_detail.png"
              />
              <source
                media="(min-width: 320px)"
                srcSet="/assets/stargazing/veulen.png"
              />
              <img
                alt="Zoek het veulen in de hemel"
                style={{ width: "auto" }}
                src="/assets/stargazing/veulen_detail.png"
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

export default DetailVeulen;
