import React from "react";
import styles from "./currentBox.module.css";
import { useStores } from "../../hooks";
import { useHistory } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { ROUTES } from "../../consts";

const CurrentBox = () => {
  const {uiStore} = useStores();  
  const history  = useHistory();

  return useObserver(() => {  
    if (uiStore.currentBox === undefined) {
      history.push(ROUTES.login)
      return (
        <p> loading ...</p>
      )
    } else {
      return(
      <>

      <div className={uiStore.currentBox.title === 'Tropicae box' ? styles.color_tropic : uiStore.currentBox.title === 'Advontura Box' ?  styles.color_adventure : styles.color_romantic}>
        <div className={styles.box}>
          <picture className={styles.img}>
            <source
              media="(max-width: 320px)"
              srcSet={`${uiStore.currentBox.pic}-mobile.png`}
            />
            <source
              media="(max-width: 768px)"
              srcSet={`${uiStore.currentBox.pic}-tablet.png`}
            />
            <source
              media="(max-width: 1440px)"
              srcset={`${uiStore.currentBox.pic}.png`}
            />

            <img
              src={`${uiStore.currentBox.pic}.png`}
              alt="Adventure box"
              style={{ width: "auto" }}
            />
          </picture>
          <p className={styles.boxTitle}>{uiStore.currentBox.title}</p>
          <button className={styles.explore}>Open Box</button>
        </div>
      </div>
    </>)
    }
   
  });
};

export default CurrentBox;
