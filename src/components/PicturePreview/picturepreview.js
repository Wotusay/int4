import React, { useState } from "react";
import styles from "./picturepreview.module.css"
import { useObserver } from "mobx-react-lite";
import { Link, useParams, useHistory } from "react-router-dom";
import BackBlack from "../BackBlack/backblack";
import { useStores } from "../../hooks";
import Back from "../Back/back";
import { ROUTES } from "../../consts";

const PicturePreview = () => {
    const [description, setDescription] = useState("");
    const {id} = useParams();
    const history = useHistory();
    const {pictureStore} = useStores();
    const picture = pictureStore.getPictureById(id);

    const handleUpload = async e => {
        e.preventDefault();
        picture.comment = description;
        await pictureStore.updatePicture(id,picture.comment);
        history.push(ROUTES.uploadComplete);

    }

    return useObserver(() => {
        if(!picture) {
            return <> <Back /> <p className="loading"> Foto is niet gevonden </p> </>;
        } else { 
            return (
        <>
        <div className={styles.dashboard}>  
        <BackBlack/>
          <div className={styles.content}>
                <p className={styles.subtitle}>
                {picture.activity} - Foto uploaden
                </p>
                <div className={styles.pic}>
                    <img alt="placeholder" className={styles.img} src={picture.url} />
                    <form >
                        <input onChange={(e) => setDescription(e.currentTarget.value)} className={styles.input} type='text' placeholder="Schrijf hier een korte beschrijving ..." />
                    </form>
                </div>
                <div className={styles.buttons}>
                    <Link onClick={ (e) => history.push(ROUTES.activities)} className={styles.button_left}>
                    Ga terug naar de activiteiten
                    </Link>
                    <Link onClick={(e) => handleUpload(e)} className={styles.button_right}>
                    Foto uploaden
                    </Link>
                </div>
          </div>
        </div>
        </>
    )}});

}

export default PicturePreview

