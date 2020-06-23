import React from "react";
import styles from "./nightRoom.module.css";
import Indicator from "../../Indicator/indicator";
import Back from "../../Back/back";
import { useStores } from "../../../hooks";
import { useObserver } from "mobx-react-lite";
import { Link, useHistory } from "react-router-dom";
import { ROUTES } from "../../../consts";

const NightRoom = () => {
  const {boxStore, uiStore} = useStores();
  const time = 'avond-activiteiten';
  const history =useHistory()

  return useObserver(() => {
    if (uiStore.currentActivities === undefined) {
      boxStore.getActivities(time, uiStore.currentCode);    
      return (
        <p className="loading"> loading ...</p>
      )
    } 
    if (uiStore.currentCode !== '3403 - XPD2 - SPA1 - DPE2') {
      history.push(ROUTES.development)
  } 

    else {

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
            die we aanraden om <span>‘s avonds</span> te doen.
          </p>
        </div>

        <div className={styles.imgBoxBg}>
          <picture className={styles.contentRightImg}>
            <source
              media="(min-width: 768px)"
              srcSet="/assets/room/night_room/bullets.png"
            />

            <source
              media="(min-width: 320px)"
              srcSet="/assets/room/morning_room/empty.png"
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
           <Link to={ROUTES.activityDetail.to + uiStore.currentActivities[0].id} ><Indicator />
           </Link> 
            
          </div>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/assets/room/night_room/tent_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcSet="/assets/room/night_room/tent_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              srcSet="/assets/room/night_room/tent_desktop.png"
              alt="box"
            />{" "}
          </picture>
        </div>
        <div className={styles.imgBoxFire}>
          <div className={styles.indicatorFire}>
            <Link to={ROUTES.activityDetail.to + uiStore.currentActivities[1].id}><Indicator />
            </Link>
            
          </div>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/assets/room/night_room/fire_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcSet="/assets/room/night_room/fire_mobile.png"
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
            <Link to={ROUTES.activityDetail.to + uiStore.currentActivities[2].id}><Indicator />
            </Link>
            
          </div>
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet="/assets/room/night_room/telescope_desktop.png"
            />
            <source
              media="(min-width: 320px)"
              srcSet="/assets/room/night_room/telescope_mobile.png"
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
    )}});
  };

export default NightRoom;
