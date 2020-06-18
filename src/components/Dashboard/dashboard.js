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
                Welkom op jullie Dashboard!
              </h1>
              <p className={styles.contentText}>
                Hier kunnen jullie doorklikken om zowel al jullie geplande
                honeymoon-activiteiten te zien of om een kijkje te nemen in
                jullie eigen gepersonaliseerd fotoboek.
              </p>
            </div>

            <div className={styles.imgWrapper}>
              <div className={styles.imgBox}>
                <img className={styles.img} src=""></img>
                <button className={styles.imgButton}>
                  Jullie Activiteiten
                </button>
              </div>
              <div className={styles.imgBox}>
                <img className={styles.img}></img>
                <button className={styles.imgButton}>Jullie Fotoboek</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
};

export default Dashboard;
