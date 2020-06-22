import React, { useState } from "react";
import { useStores } from "../../hooks";
import { useObserver } from "mobx-react-lite";
import Picture from "../Picture/picture";
import styles from "./photobook.module.css";
import { ROUTES } from "../../consts";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import { storage } from "../../services/FirebaseService";
import NewPhoto from "./newPhoto";

const Photobook = () => {
  const picture = { id: 123, pic: "/assets/img-placeholder.png" };

  return useObserver(() => (
    <>
      <section className={styles.dashboard}>
        <div className={styles.content}>
          <p className={styles.title}>Hier zien jullie Fotoboek! </p>
          <p className={styles.info}>
            Dit is een overzicht van alle sfeerfoto’s tijdens jullie
            honeymoon-activiteiten. Klik op een foto om het in detail te zien.{" "}
          </p>
          <ul className={styles.pics}>
            <li>
              <Link to={ROUTES.pictureDetail.to + picture.id}>
                <Picture picture={picture} />
              </Link>
            </li>
            <li>
              <Link to={ROUTES.pictureDetail.to + picture.id}>
                <Picture picture={picture} />
              </Link>
            </li>
            <li>
              <Link to={ROUTES.pictureDetail.to + picture.id}>
                <Picture picture={picture} />
              </Link>
            </li>{" "}
            <li>
              <Link to={ROUTES.pictureDetail.to + picture.id}>
                <Picture picture={picture} />
              </Link>
            </li>{" "}
            <li>
              <Link to={ROUTES.pictureDetail.to + picture.id}>
                <Picture picture={picture} />
              </Link>
            </li>
            <NewPhoto />
          </ul>
        </div>
        <Footer />
      </section>
    </>
  ));
};

export default Photobook;
