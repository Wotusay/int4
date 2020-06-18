import React from "react";
import styles from "./activities.module.css";
import { useObserver } from "mobx-react-lite";
import Footer from "../Footer/footer";

const Activities = () => {
  return useObserver(() => (
    <>
      <div className={styles.activities}>
        <div className={styles.content}>
          <div className={styles.introWrapper}>
            <h1 className={styles.title}>Hier zien jullie de Activiteiten!</h1>
            <p className={styles.intro}>
              We hebben jullie geplande honeymoon-activiteiten onderverdeeld in
              ochtend-, middag- en avondactiviteiten.
            </p>
          </div>
          <div className={styles.dates}>
            <div className={styles.boxMorning}></div>
            <div className={styles.boxNoon}></div>
            <div className={styles.boxNight}></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  ));
};

export default Activities;
