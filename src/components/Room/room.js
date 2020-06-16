import React from "react";
import styles from "./room.module.css";
import { useObserver } from "mobx-react-lite";
import Tent from "../Attributes/Tent/Tent";
import Yoga from "../Attributes/Yoga/Yoga";
import Fire from "../Attributes/Fire/fire";
import Telescope from "../Attributes/Telescope/telescope";
import Pizza from "../Attributes/Pizza/pizza";
import Compass from "../Attributes/Compass/compass";
import Guitar from "../Attributes/Guitar/guitar";
import Yenga from "../Attributes/Yenga/yenga";

const Room = () => {
  return useObserver(() => (
    <>
      <div className={styles.roomWrapper}>
        <div className={styles.room}>
          <Tent />
          <Yoga />
          <Fire />
          <Telescope />
          <Pizza />
          <Compass />
          <Guitar />
          <Yenga />
        </div>
      </div>
    </>
  ));
};

export default Room;
