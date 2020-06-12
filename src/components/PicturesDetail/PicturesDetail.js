import React from "react";
import { useStore } from "../../hooks";
import { useParams } from "react-router-dom";
import styles from "./picturedetail.module.css";

import { useObserver } from "mobx-react-lite";
import Back from "../Back/back";



const PicturesDetail = () => {
    const {id} = useParams();
    const store = useStore();
    return useObserver(() => {
        const picture = store.resolvePicture(id);
        if (!picture) return <p>Loading ...</p>;
    ;



    return (
<>

        <section className={styles.return}>
        <Back/>
 
        <div className={styles.grid}>
            <img className={styles.pic} width="550" height="550" src={picture.urls.regular} alt={picture.alt_description}/>
            <p className={styles.text}> {picture.alt_description} </p> 
        </div> </section>
        </>
    )
        
    });
};

export default PicturesDetail;