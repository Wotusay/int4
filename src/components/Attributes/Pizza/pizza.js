import React from "react";
import styles from "./pizza.module.css";

const Pizza = () => {
  return (
    <>
      <img
        alt="Ellipse"
        className={styles.fullImg}
        src="/assets/adventure_room/pizza/full_img.png"
      ></img>
      {/* <div className={styles.itempizza}>
        <img
              alt="Ellipse"
              className={styles.ellipse}
              src="/assets/adventure_room/pizza/ellipse.png"
            ></img>
            <img
              alt="Left Flower"
              className={styles.flower1}
              src="/assets/adventure_room/pizza/flower_1.png"
            ></img>
            <img
              alt="Right Flower"
              className={styles.flower2}
              src="/assets/adventure_room/pizza/flower_2.png"
            ></img>
            <img
              className={styles.pizza}
              alt="pizza"
              src="/assets/adventure_room/pizza/pizza.png"
            ></img>
      </div> */}
    </>
  );
};

export default Pizza;
