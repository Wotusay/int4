import React, { useState } from "react";
import styles from "./uploadpicture.module.css"
import { useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";
import BackBlack from "../BackBlack/backblack";
import { useStores } from "../../hooks";
import Picture from "../../models/picture";
import { ROUTES } from "../../consts";

const UploadPicture = () => {
    const {pictureStore,uiStore} = useStores();
    const [newPic,setNewPic] =useState(''); 
    const activity = uiStore.currentActivity;
    const box = uiStore.currentBox;

    const handleInput = async e => {
        e.preventDefault();
        const file =  e.target.files[0];
        const p = new Picture({store: pictureStore, activity: activity.title, userId: box.userId});
        try {  
            const pictureRef = await pictureStore.uploadFile(file, p);
            console.log(pictureRef.id)
            setNewPic(pictureRef.id);
            pictureStore.getPictures();
            console.log(newPic)

        }
        catch (error) {
            console.log(error);
        }
    }

    return useObserver(() => {
        if (uiStore.currentActivity === undefined) 
        {
            return ( <p className="loading"> loading ...</p>
            )
        } else {
        return (
        <>
        <div className={styles.dashboard}>  
        <BackBlack/>
          <div className={styles.content}>
              <p className={styles.title}>
                Proficiat {box.userId === '255' ? 'Eva & Mathias!' : box.userId === '882' ? 'Jeffrey & Rosa' : box.userId === '256' ? 'Willem & Laura' : '' }
              </p>
                <p className={styles.info}>
                Jullie zijn er in geslaagd om deze activiteit volledig uit te voeren. Hieronder kunnen jullie een foto toevoegen aan jullie fotoboek.
                </p>

                <p className={styles.subtitle}>
                {activity.title}- Foto uploaden
                </p>

                    <form className={styles.form}>
                        <button className={styles.upload}>Upload hier je foto</button>
                        <input onInput={(e) => handleInput(e)} className={styles.input} type="file" />
                    </form>

                <div className={styles.buttons}>
                    <Link className={styles.button_left}>
                    Ga terug naar de activiteiten
                    </Link>
                    <Link to={ROUTES.picturePreview.to + newPic} className={styles.button_right}>
                    Volgende Stap
                    </Link>
                </div>
          </div>
        </div>
        </>
    )}});

}

export default UploadPicture