import React from "react";
import styles from "./morningRoom.module.css";
import Indicator from "../../Indicator/indicator";
import Back from "../../Back/back";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../consts";
import { useStores } from "../../../hooks";
import { useObserver } from "mobx-react-lite";

const MorningRoom = () => {
  const { uiStore,boxStore } = useStores();
  const time = 'ochtend-activiteiten';

    return useObserver(() => {
      if (uiStore.currentActivities === undefined) {
        boxStore.getActivities(time, uiStore.currentCode);    
        return (
          <p className="loading"> loading ...</p>
        )
      } else {
      return (
    
    <>
      <div className={styles.room}>
        <div className={styles.back}>
          <Back />
        </div>
        <div className={styles.contentIntro}>
          <h1 className={styles.contentTitle}>
            Goedemorgen <span>{uiStore.currentBox.userId === '255' ? 'Eva & Mathias!' : uiStore.currentBox.userId === '882' ? 'Jeffrey & Rosa' : uiStore.currentBox.userId === '256' ? 'Willem & Laura' : '' }</span>{" "}
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

        <div className={styles.imgBoxYoga}>
          <div className={styles.indicatorYoga}>
            <Link to={ROUTES.activityDetail.to + uiStore.currentActivities[1].id }>
            <Indicator /></Link>
          </div>
          
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
          <div className={styles.indicatorGuitar}>
            <Link to={ROUTES.activityDetail.to + uiStore.currentActivities[0].id}>
            <Indicator /></Link>
          </div>
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
    )}});
};

export default MorningRoom;
