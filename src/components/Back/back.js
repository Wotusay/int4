import React from "react";
import styles from "./back.module.css";
import { useHistory } from "react-router-dom";

const Back = () => {
  const history = useHistory();

  return (
    <button
      className={styles.back__btn}
      onClick={() => {
        history.goBack();
      }}
    >
      <svg
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.49764 15.8986L1.09375 8.49471L8.49764 1.09082"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>{" "}
      Ga terug
    </button>
  );
};

export default Back;
