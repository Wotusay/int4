import React, { useState } from "react";
import styles from "./yogaDetail.module.css";
import Back from "../BackBlack/backblack";
import { ROUTES } from "../../consts";
import { useHistory } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import { useStores } from "../../hooks";

const YogaDetail = () => {
  let [number = 1, setNumber] = useState(1);
  let title = "Twin Trees (Beginner)";
  let img = `/assets/yoga/pose1.png`;
  let imgMobile = `/assets/yoga/pose1_mobile.png`;
  const history = useHistory();
  const {uiStore} = useStores();

  switch (number) {
    case (number = 0):
      number = 1;
      break;

    case (number = 1):
      imgMobile = "/assets/yoga/pose1_mobile.png";
      img = "/assets/yoga/pose1.png";
      title = "Twin Trees (Beginner)";
      break;

    case (number = 2):
      imgMobile = "/assets/yoga/pose2_mobile.png";
      img = "/assets/yoga/pose2.png";
      title = "Chair Pose (Beginner)";
      break;

    case (number = 3):
      imgMobile = "/assets/yoga/pose3_mobile.png";
      img = "/assets/yoga/pose3.png";
      title = "Buddy Boat (Intermediate)";
      break;

    case (number = 4):
      imgMobile = "/assets/yoga/pose4_mobile.png";
      img = "/assets/yoga/pose4.png";
      title = "Square Pose (Intermediate)";
      break;

    case (number = 5):
      imgMobile = "/assets/yoga/pose5_mobile.png";
      img = "/assets/yoga/pose5.png";
      title = "Plank on plank (Advanced)";
      break;

    case (number = 6):
      imgMobile = "/assets/yoga/pose6_mobile.png";
      img = "/assets/yoga/pose6.png";
      title = "Square Pose (Intermediate)";
      break;

    case (number = 7):
      history.push(ROUTES.uploadpicture);
      break;

    default:
      img = "/assets/yoga/pose1.png";
      title = "Twin Trees (Beginner)";
  }

  return useObserver (() => {
    if (uiStore.currentBox === undefined) {
      history.push(ROUTES.login)
      return (
        <p className="loading"> loading ...</p>
      )
    } else {

  return(
    <>
      <div className={styles.activity}>
        <div className={styles.back}>
          <Back />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Doe de yoga poses na!</h1>
          <picture className={styles.img}>
            <source media="(min-width: 1440px)" srcSet={img} />
            <source media="(min-width: 320px)" srcSet={imgMobile} />
            <img alt="Yoga Pose" style={{ width: "auto" }} src={img} />
          </picture>
          <p className={styles.yogaTitle}>{title}</p>
          <div className={styles.buttonWrapper}>
            <button
              onClick={() => setNumber(number - 1)}
              className={styles.button}
            >
              Vorige pose
            </button>

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
  )}});
};

export default YogaDetail;
