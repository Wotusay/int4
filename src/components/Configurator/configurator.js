import React from "react";
import styles from "./configurator.module.css";
import Back from "../BackBlack/backblack";

const PizzaConfigurator = () => {
  return (
    <>
      <div className={styles.configurator}>
        <div className={styles.content}>
          <div className={styles.back}>
            <Back />
          </div>
          <div className={styles.intro}>
            <h1 className={styles.introTitle}>Maak uw eigen pizza! </h1>
            <p className={styles.introText}>
              Stel je eigen pizza samen zodat je weet wat je juist moet gaan
              kopen in de winkel.
            </p>
          </div>
          <div className={styles.step1}>
            <div className={styles.title}>
              <p className={styles.number}>1</p>
              <p className={styles.numberText}>Kies de grootte</p>
            </div>
            <div lassName={styles.buttonWrapper}>
              <button className={styles.button}>Small</button>
              <button className={styles.button}>Medium</button>
              <button className={styles.button}>Large</button>
            </div>
          </div>
          <div className={styles.step2}>
            <div className={styles.title}>
              <p className={styles.number}>2</p>
              <p className={styles.numberText}>Kies de saus en kaas </p>
            </div>
            <div lassName={styles.buttonWrapper}>
              <button className={styles.button}>Tomatensaus</button>
              <button className={styles.button}>Pesto</button>
              <button className={styles.button}>Alfredo saus</button>
            </div>
          </div>
          <div className={styles.step3}>
            <div className={styles.title}>
              <p className={styles.number}>3</p>
              <p className={styles.numberText}>Kies de garnering</p>
            </div>
            <div lassName={styles.buttonWrapper}>
              <button className={styles.button}>Geraspte kaas</button>
              <button className={styles.button}>Pepperoni</button>
              <button className={styles.button}>Groene pepers</button>
              <button className={styles.button}>Spek</button>
              <button className={styles.button}>Ui</button>
              <button className={styles.button}>Olijven</button>
              <button className={styles.button}>champignons</button>
              <button className={styles.button}>Kip</button>
              <button className={styles.button}>Ham</button>
              <button className={styles.button}>Ananas</button>
            </div>
          </div>
          <img className={styles.pizza} src="/assets/pizza/pizza.png"></img>
        </div>
      </div>
    </>
  );
};

export default PizzaConfigurator;
