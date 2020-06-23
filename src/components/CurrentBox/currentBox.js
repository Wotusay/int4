import React from "react";
import styles from "./currentBox.module.css";
import { useStores } from "../../hooks";
import { useHistory, Link } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { ROUTES, mediaQueries } from "../../consts";
import MediaQuery from "react-responsive";


const CurrentBox = () => {
  const { uiStore } = useStores();
  const history = useHistory();

  return useObserver(() => {
     if (uiStore.currentBox === undefined) {
       history.push(ROUTES.login)
       return (
         <p className="loading"> loading ...</p>
       )
     } else {
    return (
      <>
        <div className={uiStore.currentBox.title === 'Advontura Box' ?    
        styles.box   
     : uiStore.currentBox.title === 'Amare box' ?          
     styles.box_r: 
     styles.box_t} >
          <div className={styles.contentLeft}>
            <p className={styles.contentLeftTitle}>
              Hallo <span>{uiStore.currentBox.userId === '255' ? 'Eva & Mathias!' : uiStore.currentBox.userId === '882' ? 'Jeffrey & Rosa' : uiStore.currentBox.userId === '256' ? 'Willem & Laura' : '' }</span>
            </p>
            <p className={styles.contentLeftIntro}>
              Jullie kozen ervoor om een {uiStore.currentBox.title === 'Advontura Box' ? 'advontuurlijke' : uiStore.currentBox.title === 'Amare box' ? 'Liefdevolle' : 'Tropische'} reis te beleven met onze{" "}
              <span>{uiStore.currentBox.title}</span>
            </p>
            <p className={styles.contentLeftIntro1}>
              Deze doos zit vol met activiteiten die de {uiStore.currentBox.title === 'Advontura Box' ? 'Advontuurlijke' : uiStore.currentBox.title === 'Amare box' ? 'Liefdevolle' : 'Tropische'} kant van
              jullie huwelijk zeker op de proef zal stellen.
            </p>
            <p className={styles.contentLeftIntro2}>
              Waar wachten jullie nog op? It’s {uiStore.currentBox.title === 'Advontura Box' ? 'adventure' : uiStore.currentBox.title === 'Amare box' ? 'love' : 'tropic'} time!
            </p>
            <p className={styles.contentLeftIntro3}>It’s {uiStore.currentBox.title === 'Advontura Box' ? 'adventure' : uiStore.currentBox.title === 'Amare box' ? 'love' : 'tropic'} time!</p>

            <Link to={ROUTES.dashboard} className={styles.contentLeftButton}>Open Box</Link>
          </div>

          <div className={styles.contentRight}>

          {uiStore.currentBox.title === 'Advontura Box' ?
          
          <picture className={styles.contentRightImg}>
          <source media="(min-width: 1440px)" srcSet="/assets/current_box/box.png" />
          <source media="(min-width: 320px)" srcSet="/assets/current_box/box-mobile.png" />
          <img style={{width: 'auto'}}
              src="/assets/current_box/box.png"
              alt="box"
            /> </picture>: uiStore.currentBox.title === 'Amare box' ?          
            <picture className={styles.contentRightImg}>
            <source media="(min-width: 1440px)" srcSet="/assets/current_box/box-r.png" />
            <source media="(min-width: 320px)" srcSet="/assets/current_box/box-r-mobile.png" />
            <img style={{width: 'auto'}}
                src="/assets/current_box/box-r.png"
                alt="box"
              /> </picture>: 
              <picture className={styles.contentRightImg}>
          <source media="(min-width: 1440px)" srcSet="/assets/current_box/box-t.png" />
          <source media="(min-width: 320px)" srcSet="/assets/current_box/box-t-mobile.png" />
          <img style={{width: 'auto'}}
              src="/assets/current_box/box-t.png"
              alt="box"
            /> </picture>}
          </div>
          <MediaQuery minDeviceWidth={mediaQueries.tablet}>
          {uiStore.currentBox.title === 'Advontura Box' ?       
          <img
              className={styles.bottom}
              src="/assets/adventurebox/leaves-bottom.png"
              alt="prop"
            /> : uiStore.currentBox.title === 'Amare box' ?          
            <img
            className={styles.bottom}
            src="/assets/romanticbox/left.png"
            alt="prop"
          />: 
          <img
          className={styles.bottom}
          src="/assets/tropicbox/bottom.png"
          alt="prop"
        />}</MediaQuery>
        </div>
      </>
    );
     }
  });
};

export default CurrentBox;
