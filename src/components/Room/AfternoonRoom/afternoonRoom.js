import React from "react";
import styles from "./afternoonRoom.module.css";
import Indicator from "../../Indicator/indicator";
import Back from "../../Back/back";
import { useObserver } from "mobx-react-lite";
import { useStores } from "../../../hooks";

const AfternoonRoom = () => {
  const {boxStore, uiStore} = useStores();
  const currentBox = uiStore.currentBox;
  const time = 'middag-activiteiten'
  boxStore.getActivities(time, uiStore.currentCode);
  console.log(currentBox);
  console.log(boxStore.activities);


  return useObserver (() => ( 
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
            die we aanraden om <span>‘s middags</span> te doen.
          </p>
        </div>

        <div className={styles.imgBoxBg}>
          <picture >
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/afternoon_room/background.png"
            />

            <source
              media="(min-width: 320px)"
              srcset="/assets/room/morning_room/empty.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/room/afternoon_room/background.png"
              alt="box"
            />
          </picture>
        </div>

        <div className={styles.imgBoxPizza}>
          <div className={styles.indicatorPizza}>
            <Indicator />
          </div>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/afternoon_room/pizza_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcset="/assets/room/afternoon_room/pizza_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/room/afternoon_room/pizza_desktop.png"
              alt="box"
            />{" "}
          </picture>
        </div>
        <div className={styles.imgBoxWalk}>
          <div className={styles.indicatorWalk}>
            <Indicator />
          </div>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/afternoon_room/walk_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcset="/assets/room/afternoon_room/walk_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/room/afternoon_room/walk_desktop.png"
              alt="box"
            />{" "}
          </picture>
        </div>

        <div className={styles.imgBoxJenga}>
          <div className={styles.indicatorJenga}>
            <Indicator />
          </div>
          <picture>
            <source
              media="(min-width: 768px)"
              srcset="/assets/room/afternoon_room/jenga_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcset="/assets/room/afternoon_room/jenga_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/room/afternoon_room/jenga_desktop.png"
              alt="box"
            />{" "}
          </picture>
        </div>
      </div>
    </>
  ));
};

export default AfternoonRoom;
