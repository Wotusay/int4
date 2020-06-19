import React from "react";
import styles from "./morningRoom.module.css";
import Indicator from "../../Indicator/indicator";

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

        <div className={styles.imgBoxYoga}>
          {/* <Indicator className={styles.indicator} /> */}
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
      </div>
    </>
  );
};

export default MorningRoom;
