import React, { useState } from "react";
import { useStores } from "../../hooks";
import { Link, useParams, useHistory } from "react-router-dom";
import styles from "./picturedetail.module.css";

import { useObserver } from "mobx-react-lite";

import Footer from "../Footer/footer";
import BackBlack from "../BackBlack/backblack";
import { ROUTES } from "../../consts";

const PicturesDetail = () => {
    const {id} = useParams();
    const {pictureStore} = useStores();
    const history = useHistory();
    const picture = pictureStore.getPictureById(id);
    const [input, setInput] =  useState(`${picture.comment}`)

    const handleRemove = async e => {
        e.preventDefault();
        try {
        await pictureStore.removePicture(id);
        pictureStore.empty();
        await pictureStore.getPictures();
        history.push(ROUTES.photobook);    
        }
        catch (error) {
            console.log(error)
        }
    }

    const handelChange = async e => {
        setInput(e.currentTarget.value);
        picture.comment = input;
        await pictureStore.updatePicture(id, picture.comment);
    }

    return useObserver(() => {
    if (!picture) {return <p>Loading ...</p>} else {
    return (
<>
    <div className={styles.dashboard}>  
        <BackBlack/>
          <div className={styles.content}>
                <p className={styles.subtitle}>
                {picture.activity}
                </p>
                <div className={styles.pic}>
                    <img alt={picture.activity} className={styles.img} src={picture.url} />
                    <form >
                        <input onChange={(e) => handelChange(e)} className={styles.input} value={input} type='text' placeholder="Schrijf hier een korte beschrijving ..." />
                    </form>
                </div>
                <div className={styles.buttons}>                    
                <Link className={styles.button_right}>
                    Downloaden
                    </Link>
                    <Link onClick={(e) => handleRemove(e)} className={styles.button_left}>
                    Verwijderen
                    </Link>

                </div>
          </div>
        </div>
        <Footer/>
        </>
    )
        
    }});
};

export default PicturesDetail;