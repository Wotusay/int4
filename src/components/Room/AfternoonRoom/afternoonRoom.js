import React from "react";
import styles from "./afternoonRoom.module.css";

const AfternoonRoom = () => {
  return (
    <>
      <div className={styles.wrapper}>
      <div className={styles.room}>
        <div className={styles.contentIntro}>
          <h1 className={styles.contentTitle}>Goedemorgen Eva & Mathias!</h1>
          <p className={styles.contentText}>
            Hier bevindt zich een overzicht van jullie honeymoon-activiteiten
            die we aanraden om ‘s middags te doen.
          </p>
        </div>

        <div className={styles.imgBoxYoga}>
          <img
            className={styles.imgYoga}
            src="/assets/room/morning_room/yoga.png"
            alt="Activities"
          ></img>
        </div>
        <div className={styles.imgBoxGuitar}>
          <img
            className={styles.imgGuitar}
            src="/assets/room/morning_room/guitar.png"
            alt="Activities"
          ></img>
        </div>
      </div>      </div>
    </>
  );
};

export default AfternoonRoom;
