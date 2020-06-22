import React from "react";
import styles from "./nightRoom.module.css";
import Indicator from "../../Indicator/indicator";
import Back from "../../Back/back";
import { useStores } from "../../../hooks";
import { useObserver } from "mobx-react-lite";

const NightRoom = () => {
  const {boxStore, uiStore} = useStores();
  const currentBox = uiStore.currentBox;
  const time = 'night-activiteiten'
  boxStore.getActivities(time, uiStore.currentCode);
  console.log(currentBox);
  console.log(boxStore.activities);
  return useObserver ( () => (
    <>
      <div className={styles.room}>
        <div className={styles.back}>
          <Back />
        </div>
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

        <div className={styles.imgBoxTent}>
          <div className={styles.indicatorTent}>
            <Indicator />
          </div>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/night_room/tent_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcset="/assets/room/night_room/tent_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              srcset="/assets/room/night_room/tent_desktop.png"
              alt="box"
            />{" "}
          </picture>
        </div>
        <div className={styles.imgBoxFire}>
          <div className={styles.indicatorFire}>
            <Indicator />
          </div>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/night_room/fire_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcset="/assets/room/night_room/fire_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/room/night_room/fire_desktop.png"
              alt="box"
            />{" "}
          </picture>
        </div>

        <div className={styles.imgBoxTelescope}>
          <div className={styles.indicatorTelescope}>
            <Indicator />
          </div>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/night_room/telescope_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcset="/assets/room/night_room/telescope_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/room/night_room/telescope_desktop.png"
              alt="box"
            />
          </picture>
        </div>
      </div>
    </>
  ));
};

export default NightRoom;
