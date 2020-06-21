import React from "react";
//import { useStores } from "../../hooks";
import { useObserver } from "mobx-react-lite";
import Picture from "../Picture/picture";
import styles from "./photobook.module.css";
import { ROUTES } from "../../consts";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
//import { storage } from "../../services/FirebaseService";

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


  const picture = {id: 123, pic: '/assets/img-placeholder.png'}

  return useObserver(() => (  
  <>
     <section className={styles.dashboard}>
       <div className={styles.content}> 
       <p className={styles.title}>Hier zien jullie Fotoboek! </p>
       <p className={styles.info}>Dit is een overzicht van alle sfeerfoto’s tijdens jullie honeymoon-activiteiten.
        Klik op een foto om het in detail te zien. </p>
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
           </li>  <li>
             <Link to={ROUTES.pictureDetail.to + picture.id}>
               <Picture picture={picture} />
             </Link>
           </li>  <li>
             <Link to={ROUTES.pictureDetail.to + picture.id}>
               <Picture picture={picture} />
             </Link>
           </li>  <li>
             <Link to={ROUTES.pictureDetail.to + picture.id}>
               <Picture picture={picture} />
             </Link>
           </li> 
       </ul>    

         </div> 
         <Footer/>
     </section>
    

    </>
  ));
};

export default Photobook;
