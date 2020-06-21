import React from "react";
import styles from "./quiz.module.css";

const Quiz = () => {
  return (
    <>
      <div className={styles.quiz}>
        <div className={styles.intro}>
          <h1 className={styles.introTitle}>Wat heb je het liefst? </h1>
          <p className={styles.introText}>
            Klik op de foto van de gebeurtenis die je het meeste aanspreekt.
          </p>
        </div>

        <div className={styles.imgWrapper}>
          <picture className={styles.img}>
            <source
              media="(min-width: 1440px)"
              srcset="/assets/quiz/tent_desktop.png"
            />
            <source
              media="(min-width: 768px)"
              srcset="/assets/quiz/tent_tablet.png"
            />
            <source
              media="(min-width: 320px)"
              srcset="/assets/quiz/tent_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/quiz/tent_desktop.png"
              alt="box"
            />{" "}
          </picture>
          <div className={styles.vs}>
            <p className={styles.vsText}> VS</p>
          </div>
          <picture className={styles.imgRight}>
            <source
              media="(min-width: 1440px)"
              srcset="/assets/quiz/bath_desktop.png"
            />
            <source
              media="(min-width: 768px)"
              srcset="/assets/quiz/bath_tablet.png"
            />
            <source
              media="(min-width: 320px)"
              srcset="/assets/quiz/bath_mobile.png"
            />
            <img
              style={{ width: "auto" }}
              src="/assets/quiz/bath_desktop.png"
              alt="box"
            />{" "}
          </picture>
        </div>
      </div>
    </>
  );
};

export default Quiz;
