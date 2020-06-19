import React from "react";
import styles from "./indicator.module.css";
import Lottie from "react-lottie";
const animationData = require("../../lotties/bubble.json");

const Indicator = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie options={defaultOptions} height={70} width={70} />
    </>
  );
};

export default Indicator;
