import React from "react";
import styles from "./uploadcomplete.module.css"
import { useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";
import BackBlack from "../BackBlack/backblack";

const UploadComplete = () => {
    return useObserver(() => (
        <>
        <div className={styles.dashboard}>  
        <BackBlack/>
          <div className={styles.content}>
                <p className={styles.title}> Jullie foto is geüpload!</p>
                <div className={styles.buttons}>
                    <Link className={styles.button_left}>
                    Ga terug naar de activiteiten
                    </Link>
                    <Link className={styles.button_right}>
                    Bekijk het fotoboek
                    </Link>
                </div>
          </div>
        </div>
        </>
    ));

}

export default UploadComplete