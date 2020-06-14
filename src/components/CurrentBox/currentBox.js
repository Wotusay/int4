import React from "react";
import styles from "./currentBox.module.css";

const CurrentBox = () => {
  return (
    <>
      <div className={styles.box}>
        <p className={styles.boxTitle}>Adventure Box</p>
        <img alt="Adventure box" src="/assets/adventure_box.png"></img>
      </div>
     </>
  );
};

export default CurrentBox;
