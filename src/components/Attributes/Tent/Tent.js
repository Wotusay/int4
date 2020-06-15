import React from "react";
import styles from "./tent.module.css";

const Tent= () => {
  return (
    <>
    <div className={styles.itemTent}>
            <img
              alt="Ellipse"
              className={styles.ellipse}
              src="/assets/adventure_room/tent/ellipse.png"
            ></img>
            <img
              alt="Left Flower"
              className={styles.flower1}
              src="/assets/adventure_room/tent/flower_1.png"
            ></img>
            <img
              alt="Right Flower"
              className={styles.flower2}
              src="/assets/adventure_room/tent/flower_2.png"
            ></img>
            <img
              className={styles.tent}
              alt="Tent"
              src="/assets/adventure_room/tent/tent.png"
            ></img>
          </div>
    </>
  );
};

export default Tent;
