import React from "react";
import styles from "./activities.module.css";
import { useObserver } from "mobx-react-lite";
import Footer from "../Footer/footer";
import { Link, useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";
import { useStores } from "../../hooks";

const Activities = () => {
  const {uiStore} = useStores();
  const history = useHistory();

  const handleClick = e  => {

    uiStore.emptyActivities();
  }
  return useObserver(() => {
    if (uiStore.currentBox === undefined) {
      history.push(ROUTES.login)
      return (
        <p> loading ...</p>
      )
    } else {
    return (
    <>
      <div className={styles.activities}>
        <div className={styles.content}>
          <div className={styles.introWrapper}>
            <h1 className={styles.title}>
              Hier zien jullie de <span>Activiteiten!</span>
            </h1>
            <p className={styles.intro}>
              We hebben jullie geplande honeymoon-activiteiten onderverdeeld in
              <span> ochtend-, middag- en avondactiviteiten.</span>
            </p>
          </div>
          <div className={styles.dates}>
            <div className={styles.boxMorning}>
              <picture className={styles.img}>
              <source media="(min-width: 1440px)" srcSet="/assets/activities/morning.png"/>
                <source media="(min-width: 320px)" srcSet="/assets/activities/morning_mobile.png"/>
                       <img
                alt="morning"
                style={{width:"auto"}}
                src="/assets/activities/morning.png"
              />
              </picture>
       
              <Link onClick={e => handleClick(e)} to={ROUTES.kamer.to + 'ochtend'} className={styles.button}>
                Bekijk ochtendactiviteiten
              </Link>
            </div>
            <div className={styles.boxNoon}>
              <picture className={styles.img}>
              <source media="(min-width: 1440px)" srcSet="/assets/activities/noon.png"/>
                <source media="(min-width: 320px)" srcSet="/assets/activities/noon_mobile.png"/>
                     <img
                alt="noon"
                style={{width:"auto"}}
                src="/assets/activities/noon.png"
              />
              </picture>
         
              <Link onClick={e => handleClick(e)} to={ROUTES.kamer.to + 'middag'}  className={styles.button}>
                Bekijk middagactiviteiten
              </Link>
            </div>
            <div className={styles.boxNight}>
              <picture className={styles.img}>
              <source media="(min-width: 1440px)" srcSet="/assets/activities/night.png"/>
                <source media="(min-width: 320px)" srcSet="/assets/activities/night_mobile.png"/>
              <img
                alt="night"
                style={{width:"auto"}}
                src="/assets/activities/night.png"

              />
              </picture>
            
              <Link onClick={e => handleClick(e)} to={ROUTES.kamer.to + 'avond'} className={styles.button}>
                Bekijk avondactiviteiten
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )}});
};

export default Activities;
