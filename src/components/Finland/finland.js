import React from "react";
import { useObserver } from "mobx-react-lite";
import styles from "./finland.module.css";
import Back from "../BackBlack/backblack";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

const Finland = () => {
  return useObserver(() => (
    <>
      <div className={styles.activity}>
        <div className={styles.back}>
          <Back />
        </div>
        <div className={styles.content}>
          <div className={styles.intro}>
            <h1 className={styles.introTitle}>
              De verschillende sterrenbeelden
            </h1>
            <p className={styles.introText}>
              Met een scanner kan je volgende sterrenbeelden zoeken in de lucht.
              (tip: een gsm is hier aangeraden)
            </p>
          </div>

          <div className={styles.starVos}>
            <h1 className={styles.title}>Sluwe vos</h1>
            <div className={styles.starImg}>
              <img
                alt="Zoek de vos in de hemel"
                src="/assets/stargazing/vos.png"
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Link to={ROUTES.detailvos}>
                <button className={styles.button}>Sterrenbeeld zoeken</button>
              </Link>
            </div>
          </div>

          <div className={styles.starVeulen}>
            <h1 className={styles.title}>Vlot Veulen</h1>
            <div className={styles.starImg}>
              <img
                alt="Zoek het veulen in de hemel"
                src="/assets/stargazing/veulen.png"
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Link to={ROUTES.detailveulen}>
                <button className={styles.button}>Sterrenbeeld zoeken</button>
              </Link>
            </div>
          </div>

          <div className={styles.starSlang}>
            <h1 className={styles.title}>Grote Slang</h1>
            <div className={styles.starImg}>
              <img
                alt="Zoek de slang in de hemel"
                src="/assets/stargazing/slang.png"
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Link to={ROUTES.detailslang}>
                <button className={styles.button}>Sterrenbeeld zoeken</button>
              </Link>
            </div>
          </div>

          <div className={styles.starBeer}>
            <h1 className={styles.title}>Bruine beer</h1>
            <div className={styles.starImg}>
              <img
                alt="Zoek de beer in de hemel"
                src="/assets/stargazing/beer.png"
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Link to={ROUTES.detailbeer}>
                <button className={styles.button}>Sterrenbeeld zoeken</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  ));
};

export default Finland;
