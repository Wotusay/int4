import React from "react";
import styles from "./room.module.css";
import { useObserver } from "mobx-react-lite";
import Tent from "../Attributes/Tent/Tent";
import Yoga from "../Attributes/Yoga/Yoga";

const Room = () => {
  return useObserver(() => (
    <>
      <div className={styles.roomWrapper}>
        <div className={styles.room}>
          <Tent/>
          <Yoga/>
        </div>
      </div>
    </>
  ));
};

export default Room;
