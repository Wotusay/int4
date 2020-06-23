import React from "react";
import styles from "./detail.module.css";
import Back from "../BackBlack/backblack";
import { useObserver } from "mobx-react-lite";
import { useStores } from "../../hooks";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";

const DetailVos = () => {

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
            <h1 className={styles.introTitle}>Sluwe Vos</h1>
            <p className={styles.introText}>
              Het vosje, ook wel Vulpeca genoemd, kan niet geassocieerd worden
              met mythologische verhalen of legendes omdat het maar
              geïntroduceerd werd in 1690 door Johannes Hevelius en dit om een
              gebied aan de sterrenhemel op te vullen tussen de bekende
              constellaties Pijl en Zwaan. Oorspronkelijk gaf Johannes Hevelius
              dit gebied aan de sterrenhemel sterrenbeeld de naam 'Vulpecila cum
              Anser' wat 'het vosje met de gans' betekent. Op oude schetsen is
              vaak een vos samen met een gans te zien maar de naam werd later
              vereenvoudigd tot Vosje.
            </p>
          </div>
          <div className={styles.starImg}>
            <picture className={styles.right}>
              <source
                media="(min-width: 1200px)"
                srcSet="/assets/stargazing/vos_detail.png"
              />
              <source
                media="(min-width: 320px)"
                srcSet="/assets/stargazing/vos.png"
              />
              <img
                alt="Zoek de vos in de hemel"
                style={{ width: "auto" }}
                src="/assets/stargazing/vos_detail.png"
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

export default DetailVos;
