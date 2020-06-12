import React from "react";

import { useObserver } from "mobx-react-lite";
import styles from "./picture.module.css";
import MediaQuery from "react-responsive";
import { mediaQueries } from "../../consts";


const Picture  = ({ picture }) => {

    return useObserver(() => (
        <>
        <MediaQuery maxDeviceWidth={mediaQueries.desktop} minDeviceWidth={mediaQueries.tablet+1}>
            <img  className={styles.pic} width="300" height="244" src={picture.urls.regular} alt={picture.alt_description}/>
            </MediaQuery>
            
            <MediaQuery maxDeviceWidth={mediaQueries.tablet} minDeviceWidth={mediaQueries.mobile}>
            <img  className={styles.pic} width="143.3" height="126.35" src={picture.urls.regular} alt={picture.alt_description}/>
            </MediaQuery>
            </>
    ));

    };

export default Picture