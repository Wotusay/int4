import React from "react";
import styles from "./activities.module.css";
import { useObserver } from "mobx-react-lite";

const Activities = () => {
  return useObserver(() => (
    <>
      <div className={styles.dashboard}>
        <div className={styles.content}>
        </div>
      </div>
    </>
  ));
};

export default Activities;
