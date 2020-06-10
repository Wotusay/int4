import React from "react";
import styles from "./room.module.css";

const Room = () => {
    return (
        <>
            <div className={styles.pic}>
            <picture>       
                <source 
            media="(max-width: 320px)" srcset="assets/room1-mobile.jpg" 
          />
          <source 
            media="(max-width: 1440px)" srcset="assets/room1.jpg" 
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