import React from "react";
import styles from "./nightRoom.module.css";
import Indicator from "../../Indicator/indicator";

const NightRoom = () => {
  return (
    <>
      <div className={styles.room}>
        <div className={styles.contentIntro}>
          <h1 className={styles.contentTitle}>
            Goedemorgen <span>Eva & Mathias!</span>{" "}
          </h1>
          <p className={styles.contentText}>
            Hier bevindt zich een overzicht van jullie honeymoon-activiteiten
            die we aanraden om <span>‘s avonds</span> te doen.
          </p>
        </div>

        <div className={styles.imgBoxBg}>
          <picture className={styles.contentRightImg}>
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/night_room/bullets.png"
            />

            <source
              media="(min-width: 320px)"
              srcset="/assets/room/morning_room/empty.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/room/night_room/bullets.png"
              alt="box"
            />
          </picture>
        </div>
        {/* <div className={styles.indicator}>
          <Indicator />
        </div> */}

        <div className={styles.imgBoxPizza}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/night_room/tent_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcset="/assets/room/morning_room/yoga_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              srcset="/assets/room/night_room/tent_desktop.png"
              alt="box"
            />{" "}
          </picture>
        </div>
        <div className={styles.imgBoxWalk}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/night_room/fire_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcset="/assets/room/morning_room/guitar_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/room/night_room/fire_desktop.png"
              alt="box"
            />{" "}
          </picture>
        </div>

        <div className={styles.imgBoxJenga}>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/night_room/telescope_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcset="/assets/room/morning_room/guitar_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/room/afternoon_room/jenga_desktop.png"
              alt="box"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default NightRoom;
