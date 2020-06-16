import React from "react";
import styles from "./telescope.module.css";

const Telescope = () => {
  return (
    <>
      <img
        alt="Ellipse"
        className={styles.fullImg}
        src="/assets/adventure_room/telescope/full_img.png"
      ></img>
      {/* <div className={styles.itemtelescope}>
        <img
              alt="Ellipse"
              className={styles.ellipse}
              src="/assets/adventure_room/telescope/ellipse.png"
            ></img>
            <img
              alt="Left Flower"
              className={styles.flower1}
              src="/assets/adventure_room/telescope/flower_1.png"
            ></img>
            <img
              alt="Right Flower"
              className={styles.flower2}
              src="/assets/adventure_room/telescope/flower_2.png"
            ></img>
            <img
              className={styles.telescope}
              alt="telescope"
              src="/assets/adventure_room/telescope/telescope.png"
            ></img>
      </div> */}
    </>
  );
};

export default Telescope;
