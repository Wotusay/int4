import React from "react";

import { useObserver } from "mobx-react-lite";
import styles from "./picture.module.css";


const Picture  = ({ picture }) => {
    return useObserver(() => (
            <img  className={styles.pic} width="550" height="550" src={picture.urls.regular} alt={picture.alt_description}/>

    ));

    };

export default Picture