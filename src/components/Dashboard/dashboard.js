import React from "react";
import { useObserver } from "mobx-react-lite";
import styles from "./dashboard.module.css";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

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
                <picture className={styles.img}>
                <source media="(min-width: 1440px)" srcset="/assets/dashboard/activities.png"/>
                <source media="(min-width: 320px)" srcset="/assets/dashboard/activities-mobile.png"/>
                <img
                  style={{width: "auto"}}
                  src="/assets/dashboard/activities.png"
                  alt="Activities"
                /></picture>
                <div className={styles.imgButtonWrapper}>
                  <Link to={ROUTES.activities} className={styles.imgButton}>
                    Jullie Activiteiten
                  </Link>
                </div>
              </div>
              <div className={styles.imgBox}>
                <picture>
                <img
                  alt="Photobook"
                  src="/assets/dashboard/photobook.png"
                  className={styles.img}
                />
                </picture>
                <div className={styles.imgButtonWrapper}>
                  <Link to={ROUTES.photobook} className={styles.imgButton}>Jullie Fotoboek</Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  });
};

export default Dashboard;
