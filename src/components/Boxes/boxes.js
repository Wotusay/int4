import React from "react";

import { useObserver } from "mobx-react-lite";
import styles from "./boxes.module.css";
import { useParams } from "react-router-dom";
import AdventureBox from "../AdventBox/adventbox";

const Boxes = () => {
    const {id} = useParams();
    console.log(id);

    return useObserver(() => (
        <>
        <div className={styles.wrapper}>
        <button  className={styles.button_prev}>
        <svg width="30" height="54" viewBox="0 0 30 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 52L3 25.0263L28 2" stroke="white" strokeWidth="4"/>
        </svg>
        </button>   
        {id === '1' ? <AdventureBox/> : <p>next box</p>}

        <button className={styles.button_next}>
            <svg width="30" height="54" viewBox="0 0 30 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L27 28.9737L2 52" stroke="white" strokeWidth="4"/>
            </svg>
        </button></div>
        </>
    ))

}

export default Boxes;