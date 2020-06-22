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
  const storageRef = storage.ref();
  const listRef = storageRef.child("images/");
  const [loaded, setLoaded] = useState(true);

  // listRef.listAll().then(function (result) {
  //   result.items.forEach(function (imageRef) {
  //     imageRef.getDownloadURL().then(function (url) {
  //       images.push(url);
  //     });
  //   });
  //   setLoaded(true);
  // });

  const getImages = async () => {
    let images = [];
    const getList = await listRef.listAll();
    getList.items.forEach((imageRef) => {
      imageRef.getDownloadURL().then((url) => {
        images.push(url);
      });
    });

    return images;
  };

  const result = async () => await getImages();

  console.log(result);

  return useObserver(() => {
    if (loaded === true) {
      return (
        <>
          <section className={styles.dashboard}>
            <div className={styles.content}>
              <p className={styles.title}>Hier zien jullie Fotoboek! </p>
              <p className={styles.info}>
                Dit is een overzicht van alle sfeerfoto’s tijdens jullie
                honeymoon-activiteiten. Klik op een foto om het in detail te
                zien.{" "}
              </p>
              <ul className={styles.pics}>
                {result.map((item) => console.log(item))}
                {/* <li>
                  <Link to={ROUTES.pictureDetail.to + picture.id}>
                    <Picture picture={picture} />
                  </Link>
                </li> */}
                <NewPhoto />
              </ul>
            </div>
            <Footer />
          </section>
        </>
      );
    } else {
      return (
        <>
          <p className={styles.loading}>Laden...</p>
        </>
      );
    }
  });
};

export default Photobook;
