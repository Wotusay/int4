import React from "react";
import styles from "./buttons.module.css";
import MediaQuery from 'react-responsive';
import { Link } from "react-router-dom";
import { ROUTES } from "../../consts";

const buttons = () => {
      //Easy to change elements
  const mediaQueries = {
    mobile: 320,
    tablet: 768,
    labtop: 1440,
    desktop: 1920
  }

    return (
        <>            
        <MediaQuery maxDeviceWidth={mediaQueries.mobile}>
                <Link to={ROUTES.pictureBook}> 
            <span className={styles.button} style={{ top:'6rem', left:'3rem'
            }}></span>
            <span className={styles.button} style={{top: '19rem', left: '10rem'}}></span>
            <span className={styles.button} style={{top: '23rem', left: '30rem'}}></span></Link>  
            </MediaQuery>

            <MediaQuery maxDeviceWidth={mediaQueries.tablet} minDeviceWidth={mediaQueries.mobile+1}>
            <Link to={ROUTES.pictureBook}> 
            <span className={styles.button} style={{ top:'15rem', left:'9rem'
    }}></span>
    <span className={styles.button} style={{top: '39rem', left: '23rem'}}></span>
    <span className={styles.button} style={{top: '50rem', left: '65rem'}}></span>
    </Link>
            </MediaQuery>

            <MediaQuery maxDeviceWidth={mediaQueries.labtop} minDeviceWidth={mediaQueries.tablet+1} >
            <Link to={ROUTES.pictureBook}> 
            <span className={styles.button} style={{ top:'15rem', left:'9rem'
    }}></span>
    <span className={styles.button} style={{top: '39rem', left: '23rem'}}></span>
    <span className={styles.button} style={{top: '50rem', left: '65rem'}}></span>
    </Link>
            </MediaQuery>


            <MediaQuery maxDeviceWidth={mediaQueries.desktop} minDeviceWidth={mediaQueries.labtop+1}>
            <Link to={ROUTES.pictureBook}> 
            <span className={styles.button} style={{ top:'17rem', left:'12rem'
    }}></span>
    <span className={styles.button} style={{top: '50rem', left: '32rem'}}></span>
    <span className={styles.button} style={{top: '60rem', left: '85rem'}}></span></Link>
            </MediaQuery>



     </>
    )

}

export default buttons;