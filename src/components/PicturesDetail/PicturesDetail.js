import React from "react";
//import { useStores } from "../../hooks";
import {  Link } from "react-router-dom";
import styles from "./picturedetail.module.css";

import { useObserver } from "mobx-react-lite";

import Footer from "../Footer/footer";
import BackBlack from "../BackBlack/backblack";



const PicturesDetail = () => {
    //const {id} = useParams();
    //const {pictureStore} = useStores();
    return useObserver(() => {
       // const picture = pictureStore.resolvePicture(id);
        //if (!picture) return <p>Loading ...</p>;
    ;



    return (
<>
    <div className={styles.dashboard}>  
        <BackBlack/>
          <div className={styles.content}>
                <p className={styles.subtitle}>
                Activiteit naam
                </p>
                <div className={styles.pic}>
                    <img alt="placeholder" className={styles.img} src='/assets/img-placeholder.png' />
                    <form >
                        <input className={styles.input} value="Romantisch avondje" type='text' placeholder="Schrijf hier een korte beschrijving ..." />
                    </form>
                </div>
                <div className={styles.buttons}>                    
                <Link className={styles.button_right}>
                    Downloaden
                    </Link>
                    <Link className={styles.button_left}>
                    Verwijderen
                    </Link>

                </div>
          </div>
        </div>
        <Footer/>
        </>
    )
        
    });
};

export default PicturesDetail;