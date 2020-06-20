import React from "react";
import styles from "./afternoonRoom.module.css";
import Indicator from "../../Indicator/indicator";
import Footer from "../../Footer/footer";

const AfternoonRoom = () => {
  return (
    <>
      <div className={styles.room}>
        <div className={styles.contentIntro}>
          <h1 className={styles.contentTitle}>
            Goedemorgen <span>Eva & Mathias!</span>{" "}
          </h1>
          <p className={styles.contentText}>
            Hier bevindt zich een overzicht van jullie honeymoon-activiteiten
            die we aanraden om <span>‘s morgens</span> te doen.
          </p>
        </div>

        <div className={styles.imgBoxBg}>
          <picture className={styles.contentRightImg}>
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/morning_room/bullets.png"
            />

            <source
              media="(min-width: 320px)"
              srcset="/assets/room/morning_room/empty.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/room/morning_room/bullets.png"
              alt="box"
            />
          </picture>
        </div>
        <div className={styles.indicator}>
          <Indicator />
        </div>

        <div className={styles.imgBoxYoga}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/morning_room/yoga_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcset="/assets/room/morning_room/yoga_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/room/morning_room/yoga_desktop.png"
              alt="box"
            />{" "}
          </picture>
        </div>
        <div className={styles.imgBoxGuitar}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/morning_room/guitar_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcset="/assets/room/morning_room/guitar_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/room/morning_room/guitar_desktop.png"
              alt="box"
            />{" "}
          </picture>
        </div>
      </div>
    </>
  );
};

export default AfternoonRoom;
