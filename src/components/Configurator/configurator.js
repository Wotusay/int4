import React, { useState } from "react";
import styles from "./configurator.module.css";
import Back from "../BackBlack/backblack";

const PizzaConfigurator = () => {
  const [size, setSize] = useState();
  const [sauce, setSauce] = useState();
  const [add, setAdd] = useState();
  console.log(size);
  console.log(sauce);
  console.log(add);

  let sauceImg = "/assets/pizza/pixel.png";
  let addImg = "/assets/pizza/pixel.png";

  const addNewImg = (addImg) => {
    
  };

  switch (sauce) {
    case "tomatensaus":
      sauceImg = "/assets/pizza/tomatensaus.png";
      break;

    case "pesto":
      sauceImg = "/assets/pizza/pesto.png";
      break;

    case "alfredo":
      sauceImg = "/assets/pizza/alfredo.png";
      break;

    case "kaas":
      addImg = "/assets/pizza/kaas.png";
      break;
  }

  switch (add) {
    case "kaas":
      addImg = "/assets/pizza/kaas.png";
      addNewImg(addImg);
      break;

    case "peperoni":
      addImg = "/assets/pizza/peperoni.png";
      addNewImg();
      break;

    case "olijven":
      addImg = "/assets/pizza/olijven.png";
      addNewImg();
      break;

    case "champignons":
      addImg = "/assets/pizza/champignons.png";
      addNewImg();
      break;

    case "ananas":
      addImg = "/assets/pizza/ananas.png";
      addNewImg();
      break;
  }

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
              Stel jullie eigen pizza samen zodat je samen een overheerlijk
              diner kan hebben!
            </p>
          </div>
          <div className={styles.step1}>
            <div className={styles.title}>
              <p className={styles.number}>1</p>
              <p className={styles.numberText}>Kies de grootte</p>
            </div>
            <div className={styles.buttonWrapper}>
              <button
                value="small"
                onClick={(e) => setSize(e.target.value)}
                className={styles.button}
              >
                Small
              </button>
              <button
                value="medium"
                onClick={(e) => setSize(e.target.value)}
                className={styles.button}
              >
                Medium
              </button>
              <button
                value="large"
                onClick={(e) => setSize(e.target.value)}
                className={styles.button}
              >
                Large
              </button>
            </div>
          </div>
          <div className={styles.step2}>
            <div className={styles.title}>
              <p className={styles.number}>2</p>
              <p className={styles.numberText}>Kies de saus en kaas </p>
            </div>
            <div className={styles.buttonWrapper}>
              <button
                onClick={(e) => setSauce(e.target.value)}
                value="tomatensaus"
                className={styles.button}
              >
                Tomatensaus
              </button>
              <button
                onClick={(e) => setSauce(e.target.value)}
                value="pesto"
                className={styles.button}
              >
                Pesto
              </button>
              <button
                onClick={(e) => setSauce(e.target.value)}
                value="alfredo"
                className={styles.button}
              >
                Alfredo saus
              </button>
            </div>
          </div>
          <div className={styles.step3}>
            <div className={styles.title}>
              <p className={styles.number}>3</p>
              <p className={styles.numberText}>Kies de garnering</p>
            </div>
            <div className={styles.buttonWrapper}>
              <button
                value="kaas"
                onClick={(e) => setAdd(e.target.value)}
                className={styles.button}
              >
                Geraspte kaas
              </button>
              <button
                value="peperoni"
                onClick={(e) => setAdd(e.target.value)}
                className={styles.button}
              >
                Pepperoni
              </button>
              <button
                value="olijven"
                onClick={(e) => setAdd(e.target.value)}
                className={styles.button}
              >
                Olijven
              </button>
              <button
                value="champignons"
                onClick={(e) => setAdd(e.target.value)}
                className={styles.button}
              >
                champignons
              </button>
              <button
                value="ananas"
                onClick={(e) => setAdd(e.target.value)}
                className={styles.button}
              >
                Ananas
              </button>
            </div>
          </div>
          <img
            alt="Pizza"
            className={styles.pizza}
            src="/assets/pizza/pizza.png"
          ></img>
          <img alt="PizzaSauce" className={styles.pizza} src={sauceImg}></img>
          <img alt="PizzaAdd1" className={styles.pizza} src={addImg}></img>
          <img alt="PizzaAdd2" className={styles.pizza} src={addImg}></img>
          <img alt="PizzaAdd3" className={styles.pizza} src={addImg}></img>
          <button className={styles.buttonDone}>Klaar!</button>
        </div>
      </div>
    </>
  );
};

export default PizzaConfigurator;
