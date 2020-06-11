import React from "react";
import styles from "./room.module.css";
import Buttons from "../Buttons/buttons";
import Indicator from "../Indicator/indicator";

const Room = () => {

  
    return (
        <>
            <div className={styles.pic}>
            <Buttons />

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
            <Indicator />
        </>
    )
}

export default Room;  