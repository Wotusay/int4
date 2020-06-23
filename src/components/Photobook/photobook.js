import React from "react";
import { useObserver } from "mobx-react-lite";
import styles from "./photobook.module.css";
import Footer from "../Footer/footer";
import { useStores } from "../../hooks";
import Picture from "../Picture/picture";
import { Link, useHistory } from "react-router-dom";
import { ROUTES } from "../../consts";

const Photobook = () => {
  const {pictureStore,uiStore} = useStores();
  const pictures = pictureStore.pictures; 
  const history = useHistory();

  return useObserver(() => {
    if (uiStore.currentBox === undefined) {
      history.push(ROUTES.login)
      return (
        <p className="loading"> loading ...</p>
      )
    } else {
      return (
      <section className={styles.dashboard}>
        <div className={styles.content}>
          <p className={styles.title}>Hier zien jullie je Fotoboek! </p>
          <p className={styles.info}>
            Dit is een overzicht van alle sfeerfoto’s tijdens jullie
            honeymoon-activiteiten. Klik op een foto om het in detail te zien.
          </p>
          <ul className={styles.pics}>
            {pictures.length === 0 ? <p className={styles.emptystate}> Dit fotoboek is heelaas leeg ... </p> : pictures.map(picture => (
             <Link key={picture.id} to={ROUTES.pictureDetail.to + picture.id}>
              <li key={picture.id}>
               <Picture key={picture.id} picture={picture} />
              </li>
             </Link> 
             ) )}
          </ul>
        </div>
        <Footer />
      </section>
      )}} 
  );
};

export default Photobook;
