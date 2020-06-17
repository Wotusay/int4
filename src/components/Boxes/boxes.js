import React from "react";

import { useObserver } from "mobx-react-lite";
import styles from "./boxes.module.css";
import { useParams, useHistory,Link } from "react-router-dom";
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
        {id === 'adventure-box' ? <> <img className={styles.leave1} alt="prop1" src="/assets/adventurebox/leaves-bottom.png" />  <img className={styles.leave2}  alt="prop2" src="/assets/adventurebox/leaves-top.png" />  </>: id === 'romantic-box' ? 'Amura box  €40' : id === 'tropic-box' ? 'Tropicae box   €40' : <Redirect to={ROUTES.boxes.to + '/adventure-box'}  /> }

        <div className={id === 'adventure-box' ? styles.adventure_wrapper : id === 'romantic-box' ? styles.romantic_wrapper : id === 'tropic-box' ? styles.tropic_wrapper : styles.wrapper}>
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
        </button>   
        <div className={styles.info_wrapper}>
            <div className={styles.pos}>  
            <p className={styles.title}>
            {id === 'adventure-box' ? 'Advontura box   €40' : id === 'romantic-box' ? 'Amura box  €40' : id === 'tropic-box' ? 'Tropicae box   €40' : <Redirect to={ROUTES.boxes.to + '/adventure-box'}  /> }
            </p>
            <div className={styles.buttons_wrapper}>
                <Link className={styles.button_main}>Koop Box</Link>
                <Link className={styles.button_sec}>Doe de test</Link>
            </div>
            <p className={styles.info}>Hover over the items voor meer info</p>
        </div> </div>    
   </div>



        </>
    ))

}

export default Boxes;