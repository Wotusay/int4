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
            <h1 className={styles.title}>
              Hier zien jullie de <span>Activiteiten!</span>
            </h1>
            <p className={styles.intro}>
              We hebben jullie geplande honeymoon-activiteiten onderverdeeld in
              <span> ochtend-, middag- en avondactiviteiten.</span>
            </p>
          </div>
          <div className={styles.dates}>
            <div className={styles.boxMorning}>
              <img
                alt="Photobook"
                src="/assets/activities/morning_mobile.png"
                className={styles.img}
              ></img>
              <button className={styles.button}>
                Bekijk avondactiviteiten
              </button>
            </div>
            <div className={styles.boxNoon}>
              <img
                alt="Photobook"
                src="/assets/activities/noon_mobile.png"
                className={styles.img}
              ></img>
              <button className={styles.button}>
                Bekijk avondactiviteiten
              </button>
            </div>
            <div className={styles.boxNight}>
              <img
                alt="Photobook"
                src="/assets/activities/night_mobile.png"
                className={styles.img}
              ></img>
              <button className={styles.button}>
                Bekijk avondactiviteiten
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  ));
};

export default Activities;
