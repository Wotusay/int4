import React from "react";
import styles from "./currentBox.module.css";
import { useStores } from "../../hooks";
import { useHistory } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { ROUTES } from "../../consts";

const CurrentBox = () => {
  const { uiStore } = useStores();
  const history = useHistory();

  return useObserver(() => {
    // if (uiStore.currentBox === undefined) {
    //   history.push(ROUTES.login)
    //   return (
    //     <p> loading ...</p>
    //   )
    // } else {
    // className={uiStore.currentBox.title === 'Tropicae box' ? styles.color_tropic : uiStore.currentBox.title === 'Advontura Box' ?  styles.color_adventure : styles.color_romantic}
    return (
      <>
        <div>
          <div className={styles.box}>
            <img
              className={styles.contentLeftImg}
              src="/assets/current_box/plant_left.png"
            ></img>
            <div className={styles.contentLeft}>
              <p className={styles.contentLeftTitle}>
                Hallo <span>Eva & Mathias!</span>
              </p>
              <p className={styles.contentLeftIntro}>
                Jullie kozen ervoor om een avontuurlijke reis te beleven met
                onze Advontura Box. Deze doos zit vol met activiteiten die de
                avontuurlijke kant van jullie huwelijk zeker op de proef zal
                stellen. Waar wachten jullie nog op? It’s adventure time!
              </p>
              <button className={styles.contentLeftButton}>Open Box</button>
            </div>

            <div className={styles.contentRight}>
              <img
                className={styles.contentRightImg}
                src="/assets/current_box/box.png"
              ></img>
            </div>
          </div>
        </div>
      </>
    );
    // }
  });
};

export default CurrentBox;
