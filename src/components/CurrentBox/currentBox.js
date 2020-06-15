import React from "react";
import styles from "./currentBox.module.css";

const CurrentBox = () => {
  return (
    <>
      <div className={styles.box}>
        <picture>
          <source
            media="(max-width: 320px)"
            srcset="assets/adventure_box-phone.png"
          />
          <source
            media="(max-width: 767px)"
            srcset="assets/adventure_box-tablet.png"
          />
          <source
            media="(max-width: 1440px)"
            srcset="assets/adventure_box.png"
          />

          <source
            media="(max-width: 1920px)"
            srcset="assets/adventure_box.png"
          />

          <img
            src="assets/adventure_box.png"
            alt="Adventure box"
            style={{ width: "auto" }}
          />
        </picture>
        <p className={styles.boxTitle}>Adventure Box</p>
      </div>
    </>
  );
};

export default CurrentBox;
