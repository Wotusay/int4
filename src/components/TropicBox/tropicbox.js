import React from "react";
import styles from "./tropicbox.module.css"
import MediaQuery from "react-responsive";
import { mediaQueries } from "../../consts";

const TropicBox = () => {
    return (<div className={styles.wrapper}>
            <MediaQuery maxDeviceWidth={mediaQueries.labtop-1}>
            <img className={styles.pic9} src='/assets/tropical_box-mobile.png' alt='tropic-box'/>
            </MediaQuery>
            <MediaQuery minDeviceWidth={mediaQueries.labtop}>
            <img className={styles.pic9}  alt='box-achterkant' src='/assets/tropical_box.png'  />
            </MediaQuery>
</div>)


}

export default TropicBox;