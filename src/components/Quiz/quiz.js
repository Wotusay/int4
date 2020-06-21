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
      </div>
    </>
  );
};

export default Quiz;
