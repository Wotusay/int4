import React from "react";
import { useStore } from "../../hooks";
import { useParams, useHistory } from "react-router-dom";
import styles from "./picturedetail.module.css";

import { useObserver } from "mobx-react-lite";
import { ROUTES } from "../../consts";



const PicturesDetail = () => {
    const {id} = useParams();
    const history = useHistory();
    const store = useStore();
    return useObserver(() => {
        const picture = store.resolvePicture(id);
        if (!picture) return <p>Loading ...</p>;
    ;

    const handleClick = () => {
        history.push(ROUTES.home)
    }

    return (
<>
      <p className={styles.back} onClick={e =>  handleClick()}>
        Ga terug </p>
   

        <div className={styles.container}>
            <img className={styles.pic} width="550" height="550" src={picture.urls.regular} alt={picture.alt_description}/>
            <p className={styles.text}> {picture.alt_description} </p> 
        </div> 
        </>
    )
        
    });
};

export default PicturesDetail;