import React, { useState } from "react";
import styles from "./quiz.module.css";
import { useObserver } from "mobx-react-lite";

const Quiz = () => {
  const [choise, setChoise] = useState('');
  const [lazyPic, setLazyPic] = useState("/assets/quiz/bath");
  const [activePic, setActivePic]  = useState("/assets/quiz/tent");

  const handleChoice = option => setChoise(option);

  const handleClick = e => {
    e.preventDefault();
    const targetId = e.currentTarget.id; 
    
    if (targetId === 'active'|| targetId === 'lazy' ) {
        setActivePic('/assets/quiz/wandeling');
        setLazyPic('/assets/quiz/chair');
    }
    if (lazyPic === '/assets/quiz/chair' ) {
      handleChoice(targetId);
    }

  }

  return useObserver ( () => (

    
    <>
    {choise === 'lazy' ?
    <>
        <div className={styles.done}>
          <h1 className={styles.introTitle}>We raden  je aan om de Tropicae box te nemen. </h1>
        
        <picture>
          <source media="(min-width: 1440px)" srcset="/assets/tropical_box.png"/>
                <source media="(min-width: 320px)" srcset="/assets/tropical_box-mobile.png"/>
                <img
                  style={{width: "auto"}}
                  src="/assets/tropical_box.png"
                  alt="tropic"
                />
          </picture></div> 
          </>
           : choise === 'active' ? 
           <>
        <div className={styles.done}>
          <h1 className={styles.introTitle}>We raden je aan om de Advontura box te nemen. </h1>
          <picture>
          <source media="(min-width: 1440px)" srcset="/assets/adventure_box.png"/>
                <source media="(min-width: 320px)" srcset="/assets/adventure_box-mobile.png"/>
                <img
                  style={{width: "auto"}}
                  src="/assets/adventure_box.png"
                  alt="adventure"
                />
          </picture>
        </div>
        </>
        : 
    <div className={styles.quiz}>
        <div className={styles.intro}>
          <h1 className={styles.introTitle}>Wat heb je het liefst? </h1>
          <p className={styles.introText}>
            Klik op de foto van de gebeurtenis die je het meeste aanspreekt.
          </p>
        </div>
     <div className={styles.imgWrapper}>
          <picture id="active" onClick={e => handleClick(e) } className={styles.img}>
            <source
              media="(min-width: 1440px)"
              srcset={`${activePic}.png`}
            />
            <source
              media="(min-width: 320px)"
              srcset={`${activePic}_mobile.png`}
            />
            <img
              style={{ width: "auto" }}
              src={`${activePic}.png`}
              alt="box"
            />{" "}
          </picture>
          <div className={styles.vs}>
            <p className={styles.vsText}> VS</p>
          </div>
          <picture id="lazy" onClick={e => handleClick(e)}  className={styles.imgRight}>
            <source
              media="(min-width: 1440px)"
              srcset={`${lazyPic}.png`}
            />
            <source
              media="(min-width: 320px)"
              srcset={`${lazyPic}_mobile.png`}
            />
            <img
              style={{ width: "auto" }}
              srcset={`${lazyPic}.png`}
              alt="box"
            />{" "}
          </picture>
        </div>  

      </div>}
</>
  ));
};

export default Quiz;
