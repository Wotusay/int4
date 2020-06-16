import React from "react";
import styles from "./notfound.module.css";
import Back from "../Back/back";

const NotFound = () => {
    return(
        <>      
        <Back/>
        <div className={styles.wrapper}>
  
        <h2 className={styles.title}>404 deze pagina bestaat niet ...</h2></div>
        </>
    )
}

export default NotFound; 