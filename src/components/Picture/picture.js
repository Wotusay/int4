import React from "react";
import { useStore } from "../../hooks";
import { Link } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
import styles from "./picture.module.css";


const Picture  = ({ picture }) => {
    return useObserver(() => (
        <div>
            <img className={styles.pic} width="550" height="550" src={picture.urls.regular} alt={picture.alt_description}/>
        </div>

    ));

    };

export default Picture