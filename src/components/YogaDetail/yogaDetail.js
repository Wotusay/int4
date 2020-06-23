import React, { useState } from "react";
import styles from "./yogaDetail.module.css";
import Back from "../BackBlack/backblack";

const YogaDetail = () => {
  let [number = 1, setNumber] = useState(1);
  let title = "Twin Trees (Beginner)";
  let img = `/assets/yoga/pose1.png`;

  switch (number) {
    case (number = 0):
      number = 1;
      break;

    case (number = 1):
      img = "/assets/yoga/pose1.png";
      title = "Twin Trees (Beginner)";
      break;

    case (number = 2):
      img = "/assets/yoga/pose2.png";
      title = "Chair Pose (Beginner)";
      break;

    case (number = 3):
      img = "/assets/yoga/pose3.png";
      title = "Buddy Boat (Intermediate)";
      break;

    case (number = 4):
      img = "/assets/yoga/pose4.png";
      title = "Square Pose (Intermediate)";
      break;

    case (number = 5):
      img = "/assets/yoga/pose5.png";
      title = "Plank on plank (Advanced)";
      break;

    case (number = 6):
      img = "/assets/yoga/pose6.png";
      title = "Square Pose (Intermediate)";
      break;

    case (number = 6):
      img = "/assets/yoga/pose6.png";
      title = "Square Pose (Intermediate)";
      break;

    default:
      img = "/assets/yoga/pose1.png";
      title = "Twin Trees (Beginner)";
  }

  return (
    <>
      <div className={styles.activity}>
        <div className={styles.back}>
          <Back />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Doe de yoga poses na!</h1>
          <img className={styles.img} alt="Yoga Pose" src={img} />
          <div className={styles.buttonWrapper}>
            <button
              onClick={() => setNumber(number - 1)}
              className={styles.button}
            >
              Vorige pose
            </button>
            <p className={styles.yogaTitle}>{title}</p>
            <button
              onClick={() => setNumber(number + 1)}
              className={styles.button}
            >
              Volgende pose
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YogaDetail;
