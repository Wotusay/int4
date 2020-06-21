import React from "react";
import styles from "./picturepreview.module.css"
import { useObserver } from "mobx-react-lite";
import Footer from "../Footer/footer";
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

                <div className={styles.buttons}>
                    <Link className={styles.button_left}>
                    Ga terug naar de activiteiten
                    </Link>
                    <Link className={styles.button_right}>
                    Volgende Stap
                    </Link>
                </div>
          </div>
          <Footer />
        </div>
        </>
    ));

}

export default PicturePreview

