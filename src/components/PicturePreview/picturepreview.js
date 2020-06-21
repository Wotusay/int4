import React from "react";
import styles from "./picturepreview.module.css"
import { useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";
import BackBlack from "../BackBlack/backblack";

const PicturePreview = () => {
    return useObserver(() => (
        <>
        <div className={styles.dashboard}>  
        <BackBlack/>
          <div className={styles.content}>
                <p className={styles.subtitle}>
                Activiteit naam - Foto uploaden
                </p>
                <div className={styles.pic}>
                    <img className={styles.img} src='/assets/img-placeholder.png' />
                    <form >
                        <input type='text' placeholder="Schrijf hier een korte beschrijving ..." />
                    </form>
                </div>
                <div className={styles.buttons}>
                    <Link className={styles.button_left}>
                    Ga terug naar de activiteiten
                    </Link>
                    <Link className={styles.button_right}>
                    Foto uploaden
                    </Link>
                </div>
          </div>
        </div>
        </>
    ));

}

export default PicturePreview

