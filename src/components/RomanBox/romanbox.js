import React from "react";
import styles from "./romanbox.module.css"
import MediaQuery from "react-responsive";
import { mediaQueries } from "../../consts";

const RomanBox = () => {
    return (
            <div className={styles.wrapper}>
            <MediaQuery maxDeviceWidth={mediaQueries.labtop-1}>
            <img className={styles.pic9} src='/assets/romantic_box-mobile.png' alt='adventure-box'/>
            </MediaQuery>
            <MediaQuery minDeviceWidth={mediaQueries.labtop}>
            <img className={styles.pic9}  alt='box-achterkant' src='/assets/romantic_box.png'  />
            </MediaQuery>
</div>


    )


}

export default RomanBox;