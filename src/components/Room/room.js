import React, { useState } from "react";
import styles from "./room.module.css";
import { useObserver } from "mobx-react-lite";

const Room = () => {
  return useObserver(() => (
    <>
      <div className={styles.room}>
        <div className={styles.itemTent}>
          <img
            className={styles.ellipse}
            src="/assets/adventure_room/tent/ellipse.png"
          ></img>
          <img
            className={styles.flower1}
            src="/assets/adventure_room/tent/flower_1.png"
          ></img>
          <img
            className={styles.flower2}
            src="/assets/adventure_room/tent/flower_2.png"
          ></img>
          <img
            className={styles.tent}
            src="/assets/adventure_room/tent/tent.png"
          ></img>
        </div>
      </div>
    </>
  ));
};

export default Room;
