import React from "react";
import { useStores } from "../../hooks";
import { useParams } from "react-router-dom";
import styles from "./picturedetail.module.css";

import { useObserver } from "mobx-react-lite";
import Back from "../Back/back";
import MediaQuery from "react-responsive";
import { mediaQueries } from "../../consts";



const PicturesDetail = () => {
    const {id} = useParams();
    const {pictureStore} = useStores();
    return useObserver(() => {
        const picture = pictureStore.resolvePicture(id);
        if (!picture) return <p>Loading ...</p>;
    ;



    return (
<>

        <section className={styles.return}>
        <Back/>
 
        <div className={styles.grid}>
            <h2 className={styles.title}>
                Activiteit naam
            </h2>       
            <MediaQuery maxDeviceWidth={mediaQueries.tablet} >
                <img className={styles.pic} width="294" height="183" src={picture.urls.regular} alt={picture.alt_description}/>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={mediaQueries.desktop} minDeviceWidth={mediaQueries.tablet+1}>
                <img className={styles.pic} width="718.18" height="363.35" src={picture.urls.regular} alt={picture.alt_description}/>
            </MediaQuery>
     
            <p className={styles.text}> {picture.alt_description} </p> 
        </div> </section>
        </>
    )
        
    });
};

export default PicturesDetail;