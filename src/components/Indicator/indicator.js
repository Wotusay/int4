import React from "react";
import styles from "./indicator.module.css";
import MediaQuery from 'react-responsive';
import { mediaQueries } from "../../consts";


const Indicator = () => {


      return(
          <>
          <MediaQuery  maxDeviceWidth={mediaQueries.mobile} >
          <svg  className={styles.indicator} width="46" height="16" viewBox="0 0 46 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.2737 14L44.2737 7.99997L38.2737 1.99997" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.47217 14L2.47217 7.99997L8.47217 1.99997" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="23.3729" cy="7.99998" r="5.28968" fill="white"/>
          </svg>
          </MediaQuery>

          <MediaQuery  maxDeviceWidth={mediaQueries.tablet}  minDeviceWidth={mediaQueries.mobile+1}>
          <svg  className={styles.indicator} width="60" height="32" viewBox="0 0 46 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.2737 14L44.2737 7.99997L38.2737 1.99997" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.47217 14L2.47217 7.99997L8.47217 1.99997" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="23.3729" cy="7.99998" r="5.28968" fill="white"/>
          </svg>
          </MediaQuery>
          </>
      )
}

export default Indicator;