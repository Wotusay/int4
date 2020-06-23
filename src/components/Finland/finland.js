import React from "react";
import { useObserver } from "mobx-react-lite";
import styles from "./finland.module.css";
import { useStores } from "../../hooks";

const Finland = () => {
  return useObserver(() => (
    <>
      <div className={styles.activity}>
        <div className={styles.content}></div>
      </div>
    </>
  ));
};

export default Finland;
