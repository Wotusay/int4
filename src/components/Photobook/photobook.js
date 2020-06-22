import React from "react";
//import { useStores } from "../../hooks";
import { useObserver } from "mobx-react-lite";
//import Picture from "../Picture/picture";
import styles from "./photobook.module.css";
//import { ROUTES } from "../../consts";
//import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
<<<<<<< HEAD
import { firebase } from "../../services/FirebaseService";
import NewPhoto from "./newPhoto";

const storage = firebase.storage();
=======
//import { storage } from "../../services/FirebaseService";
//import NewPhoto from "./newPhoto";
//import { get } from "mobx";
>>>>>>> 3c1d95d4d0ee13fc2d06ce078434225ff119d325

const Photobook = () => {
  // const storageRef = storage.ref();
  // const listRef = storageRef.child("images/");

  // if (!loaded) {
  //   const getImages = async () => {
  //     const getList = await listRef.listAll();
  //     getList.items.forEach((imageRef) => {
  //       imageRef.getDownloadURL().then((url) => {
  //         images.push(url);
  //       });
  //     });
  //     console.log(images);

      
  //   };

  //   getImages();
  // }

  // console.log(images);

  return useObserver(() => (
      <section className={styles.dashboard}>
        <div className={styles.content}>
          <p className={styles.title}>Hier zien jullie je Fotoboek! </p>
          <p className={styles.info}>
            Dit is een overzicht van alle sfeerfoto’s tijdens jullie
            honeymoon-activiteiten. Klik op een foto om het in detail te zien.
          </p>
          <ul className={styles.pics}>
            

            <NewPhoto />
          </ul>
        </div>
        <Footer />
      </section>
    ) 
  );
};

export default Photobook;
