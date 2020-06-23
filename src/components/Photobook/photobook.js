import React from "react";
import { useObserver } from "mobx-react-lite";
import styles from "./photobook.module.css";
import Footer from "../Footer/footer";
import { useStores } from "../../hooks";
import Picture from "../Picture/picture";
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

const Photobook = () => {
  const {pictureStore} = useStores();
  const pictures = pictureStore.pictures;

  return useObserver(() => (
      <section className={styles.dashboard}>
        <div className={styles.content}>
          <p className={styles.title}>Hier zien jullie je Fotoboek! </p>
          <p className={styles.info}>
            Dit is een overzicht van alle sfeerfoto’s tijdens jullie
            honeymoon-activiteiten. Klik op een foto om het in detail te zien.
          </p>
          <ul className={styles.pics}>
            {pictures.map(picture => (
             <Link to={ROUTES.pictureDetail.to + picture.id}>
              <li key={picture.id}>
               <Picture picture={picture} />
              </li>
             </Link> 
             ) )}
          </ul>
        </div>
        <Footer />
      </section>
    ) 
  );
};

export default Photobook;
