import React from "react";
import styles from "./afternoonRoom.module.css";
import Indicator from "../../Indicator/indicator";
import Back from "../../Back/back";
import { useObserver } from "mobx-react-lite";
import { useStores } from "../../../hooks";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../consts";

const AfternoonRoom = () => {
  const {boxStore, uiStore} = useStores();
  const time = 'middag-activiteiten'

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
            <Link to={ROUTES.activityDetail.to + uiStore.currentActivities[1].id}> <Indicator />
            </Link>
           
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
            <Link to={ROUTES.activityDetail.to + uiStore.currentActivities[2].id} ><Indicator />
            </Link>
            
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
            <Link to={ROUTES.activityDetail.to + uiStore.currentActivities[2].id} >
            <Indicator /></Link>
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
    )}});
  };

export default AfternoonRoom;
