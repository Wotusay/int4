import React from "react";
import { useObserver } from "mobx-react-lite";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return useObserver(() => {
    return (
      <>
        <div className={styles.dashboard}>
          <div className={styles.content}>
            <div className={styles.contentIntro}>
              <h1 className={styles.contentTitle}>
                Welkom op jullie <span className={styles.span}>Dashboard!</span>
              </h1>
              <p className={styles.contentText}>
                Hier kunnen jullie doorklikken om zowel al jullie
                <span> geplande honeymoon-activiteiten</span> te zien of om een
                kijkje te nemen in jullie
                <span> eigen gepersonaliseerd fotoboek.</span>
              </p>
            </div>

            <div className={styles.imgWrapper}>
              <div className={styles.imgBox}>
                <img
                  className={styles.img}
                  src="/assets/dashboard/activities.png"
                  alt="Activities"
                ></img>
                <div className={styles.imgButtonWrapper}>
                  <button className={styles.imgButton}>
                    Jullie Activiteiten
                  </button>
                </div>
              </div>
              <div className={styles.imgBox}>
                <img
                  alt="Photobook"
                  src="/assets/dashboard/photobook.png"
                  className={styles.img}
                ></img>

               
                <div className={styles.imgButtonWrapper}>
                  <button className={styles.imgButton}>Jullie Fotoboek</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <p className={styles.footerItem}>Activiteiten</p>
            <p className={styles.active}>Dashboard</p>
            <p className={styles.footerItem}>Fotoboek</p>
          </div>
        </div>
      </>
    );
  });
};

export default Dashboard;
