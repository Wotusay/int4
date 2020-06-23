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
        <div className={styles.content}></div>
      </div>
    </>
  ));
};

export default YogaDetail;
