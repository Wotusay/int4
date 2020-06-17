import React from "react";
import { useObserver } from "mobx-react-lite";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return useObserver(() => {
    return (
      <>
        <div className={styles.dashboard}>
          <div className={styles.content}>
            <h1>Welkom op jullie Dashboard!</h1>
          </div>
        </div>
      </>
    );
  });
};

export default Dashboard;
