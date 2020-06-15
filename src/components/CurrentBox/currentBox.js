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
    if (uiStore.currentBox == undefined) {
      history.push(ROUTES.home)
      return (
        <p> loading ...</p>
      )
    } else {
      return(
      <>

      <div className={styles.boxWrapper}>
        <div className={styles.box}>
          <picture className={styles.img}>
            <source
              media="(max-width: 320px)"
              srcSet={`${uiStore.currentBox.pic}-mobile.png`}
            />
            <source
              media="(max-width: 768px)"
              srcSet={`${uiStore.currentBox.pic}.png`}
            />
            <source
              media="(max-width: 1440px)"
              srcset={`${uiStore.currentBox.pic}.png`}
            />

            <source
              media="(max-width: 1920px)"
              src={`${uiStore.currentBox.pic}.png`}
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
