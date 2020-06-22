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
import { get } from "mobx";

const Photobook = () => {
  // const storageRef = storage.ref();
  // const listRef = storageRef.child("images/");
  // const [loaded, setLoaded] = useState(true);

  // const getImages = async () => {
  //   const getList = await listRef.listAll();
  //   getList.items.forEach((imageRef) => {
  //     imageRef.getDownloadURL().then((url) => {
  //       image.push(url);
  //       images.push(url);
  //     });
  //   });

  //   return images;
  // };
  // getImages();

  // console.log(image);

  return useObserver(() => (

      <section className={styles.dashboard}>
        <div className={styles.content}>
          <p className={styles.title}>Hier zien jullie Fotoboek! </p>
          <p className={styles.info}>
            Dit is een overzicht van alle sfeerfoto’s tijdens jullie
            honeymoon-activiteiten. Klik op een foto om het in detail te zien.
          </p>
          <ul className={styles.pics}>
          
          </ul>
        </div>
        <Footer />
      </section>

  ));
};

export default Photobook;
