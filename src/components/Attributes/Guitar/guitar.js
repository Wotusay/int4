import React from "react";
import styles from "./guitar.module.css";

const Guitar = () => {
  return (
    <>
      <img
        alt="Ellipse"
        className={styles.fullImg}
        src="/assets/adventure_room/guitar/full_img.png"
      ></img>
      {/* <div className={styles.itemguitar}>
        <img
              alt="Ellipse"
              className={styles.ellipse}
              src="/assets/adventure_room/guitar/ellipse.png"
            ></img>
            <img
              alt="Left Flower"
              className={styles.flower1}
              src="/assets/adventure_room/guitar/flower_1.png"
            ></img>
            <img
              alt="Right Flower"
              className={styles.flower2}
              src="/assets/adventure_room/guitar/flower_2.png"
            ></img>
            <img
              className={styles.guitar}
              alt="guitar"
              src="/assets/adventure_room/guitar/guitar.png"
            ></img>
      </div> */}
    </>
  );
};

export default Guitar;
