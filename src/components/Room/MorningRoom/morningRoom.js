import React from "react";
import styles from "./morningRoom.module.css";

const MorningRoom = () => {
  return (
    <>
      <div className={styles.room}>
        <div className={styles.contentIntro}>
          <h1 className={styles.contentTitle}>Goedemorgen Eva & Mathias!</h1>
          <p className={styles.contentText}>
            Hier bevindt zich een overzicht van jullie honeymoon-activiteiten
            die we aanraden om ‘s morgens te doen.
          </p>
        </div>

        <div className={styles.imgWrapper}>
          <div className={styles.imgBox}>
            <img
              className={styles.imgRight}
              src="/assets/room/morning_room/yoga.png"
              alt="Activities"
            ></img>
          </div>
          <div className={styles.imgBox}>
            <img
              className={styles.imgLeft}
              src="/assets/room/morning_room/guitar.png"
              alt="Activities"
            ></img>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.footerItem}>Activiteiten</p>
        <p className={styles.active}>Dashboard</p>
        <p className={styles.footerItem}>Fotoboek</p>
      </div>
    </>
  );
};

export default MorningRoom;
