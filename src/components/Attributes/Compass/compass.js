import React from "react";
import styles from "./compass.module.css";

const Compass = () => {
  return (
    <>
      <img
        alt="Ellipse"
        className={styles.fullImg}
        src="/assets/adventure_room/compass/full_img.png"
      ></img>
      {/* <div className={styles.itemcompass}>
        <img
              alt="Ellipse"
              className={styles.ellipse}
              src="/assets/adventure_room/compass/ellipse.png"
            ></img>
            <img
              alt="Left Flower"
              className={styles.flower1}
              src="/assets/adventure_room/compass/flower_1.png"
            ></img>
            <img
              alt="Right Flower"
              className={styles.flower2}
              src="/assets/adventure_room/compass/flower_2.png"
            ></img>
            <img
              className={styles.compass}
              alt="compass"
              src="/assets/adventure_room/compass/compass.png"
            ></img>
      </div> */}
    </>
  );
};

export default Compass;
