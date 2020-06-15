import React from "react";
import styles from "./currentBox.module.css";

const CurrentBox = () => {
  return (
    <>
      <div className={styles.boxWrapper}>
        <div className={styles.box}>
          <picture className={styles.img}>
            <source
              media="(max-width: 320px)"
              srcSet="/assets/adventure_box-phone.png"
            />
            <source
              media="(max-width: 768px)"
              srcSet="/assets/adventure_box-tablet.png"
            />
            <source
              media="(max-width: 1440px)"
              srcset="/assets/adventure_box.png"
            />

            <source
              media="(max-width: 1920px)"
              src="/assets/adventure_box.png"
            />

            <img
              src="/assets/adventure_box.png"
              alt="Adventure box"
              style={{ width: "auto" }}
            />
          </picture>
          <p className={styles.boxTitle}>Adventure Box</p>
          <button className={styles.explore}>Open Box</button>
        </div>
      </div>
    </>
  );
};

export default CurrentBox;
