import React, { useState } from "react";
import { useStores } from "../../hooks";
import { useObserver } from "mobx-react-lite";
import Picture from "../Picture/picture";
import styles from "./photobook.module.css";
import { ROUTES } from "../../consts";
import { Link } from "react-router-dom";
import Back from "../Back/back";
import { storage } from "../../services/FirebaseService";

const Photobook = () => {
  //const { pictureStore } = useStores();
  // const [image, setImage] = useState(null);
  // const [progress, setProgress] = useState(0);

  // const handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  // const handleUpload = () => {
  //   const uploadTask = storage.ref(`${image.name}`).put(image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(progress);
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     () => {
  //       storage.ref("images").child(image.name);
  //     }
  //   );
  // };

  return useObserver(() => (
    // <section>
    //   <h1 className={styles.title}>Photobook</h1>
    //   <Back />
    //   <ul className={styles.grid}>
    //     {pictureStore.pictures.map((picture) => (
    //       <li key={picture.id}>
    //         <Link to={ROUTES.pictureDetail.to + picture.id}>
    //           <Picture picture={picture} />
    //         </Link>
    //       </li>
    //     ))}
    //     <li>
    //       <input type="file" onChange={handleChange}></input>
    //       <button onClick={handleUpload}>Upload</button>
    //       <progress value={progress} max="100"></progress>
    //     </li>
    //   </ul>
    // </section>
    <>
      <div className={styles.photobook}>
        <p className={styles.title}>Photobook</p>
        <div className={styles.imgWrapper}>
          <div className={styles.fakeImg}></div>
          <div className={styles.fakeImg}></div>
          <div className={styles.fakeImg}></div>
          <div className={styles.fakeImg}></div>
          <div className={styles.fakeImg}></div>
          <div className={styles.fakeImg}></div>
          <div className={styles.fakeImg}></div>
          <div className={styles.fakeImg}></div>
          <div className={styles.fakeImg}></div>
        </div>
      </div>
    </>
  ));
};

export default Photobook;
