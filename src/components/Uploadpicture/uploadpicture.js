import React, { useState } from "react";
import styles from "./uploadpicture.module.css"
import { useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";
import BackBlack from "../BackBlack/backblack";
import { useStores } from "../../hooks";
import Picture from "../../models/picture";
import { ROUTES } from "../../consts";

const UploadPicture = () => {
    const {pictureStore} = useStores();
    const [newPic,setNewPic] =useState(''); 

    const handleInput = async e => {
        e.preventDefault();
        const file =  e.target.files[0];
        const p = new Picture({store: pictureStore });
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

    return useObserver(() => (
        <>
        <div className={styles.dashboard}>  
        <BackBlack/>
          <div className={styles.content}>
              <p className={styles.title}>
                Proficiat Eva & Mathias!
              </p>
                <p className={styles.info}>
                Jullie zijn er in geslaagd om deze activiteit volledig uit te voeren. Hieronder kunnen jullie een foto toevoegen aan jullie fotoboek.
                </p>

                <p className={styles.subtitle}>
                Activiteit naam - Foto uploaden
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
    ));

}

export default UploadPicture