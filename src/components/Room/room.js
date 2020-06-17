import React from "react";
import styles from "./room.module.css";
import { useObserver } from "mobx-react-lite";

const Room = () => {
  return useObserver(() => (
    <>
      <div className={styles.roomWrapper}>

      </div>
    </>
  ));
};

export default Room;
