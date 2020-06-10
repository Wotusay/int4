import React from "react";
import styles from "./room.module.css";

const Room = () => {
    return (
        <>
            <div className={styles.pic}>
                <span className={styles.button} style={{}}></span>
                <span className={styles.button} style={{}}></span>
                <span className={styles.button} style={{}}></span>
                <span className={styles.button} style={{}}></span>
            <picture>       
                <source 
            media="(max-width: 320px)" srcset="assets/room1-mobile.jpg" 
          />
                      <source 
            media="(max-width: 767px)" srcset="assets/room1-tablet.jpg" 
          />
          <source 
            media="(max-width: 1440px)" srcset="assets/room1.jpg" 
          />

            <source 
            media="(max-width: 1920px)" srcset="assets/room1-desktop.jpg" 
          />
   
          <img 
            src="assets/room1.jpg" 
            alt="Room" 
            style={{width: 'auto'}} 
          />
        </picture>
            </div>
        </>
    )
}

export default Room;  