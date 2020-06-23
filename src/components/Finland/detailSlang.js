import React from "react";
import styles from "./detail.module.css";
import Back from "../BackBlack/backblack";

const DetailSlang = () => {
  return (
    <>
      <div className={styles.activity}>
        <div className={styles.back}>
          <Back />
        </div>
        <div className={styles.content}>
          <div className={styles.intro}>
            <h1 className={styles.introTitle}>Grote Slang</h1>
            <p className={styles.introText}>
              Het sterrenbeeld Slang, ook wel Serpens genoemd, is één van de 88
              moderne sterrenbeelden en is zichtbaar vanop het noordelijk
              halfrond. Het is een groot sterrenbeeld dat in tweeën wordt
              gedeeld door het sterrenbeeld Slangendrager. Serpens is de slang
              die vastgegrepen wordt door Ophiuchus, de slangendrager, en is er
              dus erg aan verbonden in de mythologie.
            </p>
          </div>
          <div className={styles.starImg}>
            <picture className={styles.right}>
              <source
                media="(min-width: 1200px)"
                srcSet="/assets/stargazing/slang_detail.png"
              />
              <source
                media="(min-width: 320px)"
                srcSet="/assets/stargazing/slang.png"
              />
              <img
                alt="Zoek de slang in de hemel"
                style={{ width: "auto" }}
                src="/assets/stargazing/slang_detail.png"
              />
            </picture>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>Scan de sterren</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSlang;
