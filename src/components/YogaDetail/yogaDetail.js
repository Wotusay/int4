import React from "react";
import { useObserver } from "mobx-react-lite";
import styles from "./yogaDetail.module.css";
import Back from "../BackBlack/backblack";

const YogaDetail = () => {
  return useObserver(() => (
    <>
      <div className={styles.activity}>
        <div className={styles.back}>
          <Back />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Doe de yoga poses na!</h1>
          <img
            className={styles.img}
            alt="Yoga Pose"
            src="/assets/yoga/pose1.png"
          />
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>Vorige pose</button>
            <button className={styles.button}>Volgende pose</button>
          </div>
        </div>
      </div>
    </>
  ));
};

export default YogaDetail;
