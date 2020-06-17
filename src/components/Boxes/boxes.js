import React from "react";

import { useObserver } from "mobx-react-lite";
import styles from "./boxes.module.css";
import { useParams, useHistory } from "react-router-dom";
import AdventureBox from "../AdventBox/adventbox";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { ROUTES } from "../../consts";

const Boxes = () => {
    const {id} = useParams();
    const history = useHistory();
    console.log(id);
    const handleNext = e  => {
        e.preventDefault();
        id === 'adventure-box' ? history.push(ROUTES.boxes.to + '/romantic-box') : id === 'romantic-box' ? history.push(ROUTES.boxes.to + '/tropic-box') : id === 'tropic-box' ? history.push(ROUTES.boxes.to + '/adventure-box') : history.push(ROUTES.boxes + '/adventure-box');

    }

    const handlePrevious = e => {
        e.preventDefault();
        id === 'adventure-box' ? history.push(ROUTES.boxes.to + '/tropic-box') : id === 'romantic-box' ? history.push(ROUTES.boxes.to + '/adventure-box') : id === 'tropic-box' ? history.push(ROUTES.boxes.to + '/romantic-box') : history.push(ROUTES.boxes + '/adventure-box');
    }

    return useObserver(() => (
        <>
        <div className={styles.wrapper}>
        <button onClick={e => handlePrevious(e)}  className={styles.button_prev}>
        <svg width="30" height="54" viewBox="0 0 30 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 52L3 25.0263L28 2" stroke="white" strokeWidth="4"/>
        </svg>
        </button>   
        {id === 'adventure-box' ? <AdventureBox/> : id === 'romantic-box' ? <p>test</p> : id === 'tropic-box' ? <p>test</p> : <Redirect to={ROUTES.boxes.to + '/adventure-box'}  /> }

        <button onClick={e => handleNext(e)}  className={styles.button_next}>
            <svg width="30" height="54" viewBox="0 0 30 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L27 28.9737L2 52" stroke="white" strokeWidth="4"/>
            </svg>
        </button></div>

        <div></div>
        </>
    ))

}

export default Boxes;