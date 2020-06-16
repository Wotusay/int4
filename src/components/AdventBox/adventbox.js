import React from "react";
import { useObserver } from "mobx-react-lite";
import MediaQuery from "react-responsive";
import { mediaQueries } from "../../consts";
import styles from "./adventbox.module.css"

const AdventureBox = () => {
    return(
        <>
        <div className={styles.wrapper}>
            <img className={styles.pic1} alt='BoxMockup-bottom' src='/assets/adventurebox/BoxMockup-bottom.png' />
            <img className={styles.pic2} alt='Verrekijker' src='/assets/adventurebox/Verrekijker.png' />
            <img className={styles.pic3} alt='Compass' src='/assets/adventurebox/Compass.png'  />
            <img className={styles.pic4} alt='Tent' src='/assets/adventurebox/Tent.png'  />
            <img className={styles.pic5} alt='Rugzak' src='/assets/adventurebox/Rugzak.png'  />
            <img className={styles.pic6} alt='RockClimbing' src='/assets/adventurebox/RockClimbing.png'  />
            <img className={styles.pic7} alt='Pineapple' src='/assets/adventurebox/Pineaple.png'  />
            <img className={styles.pic8} alt='Map' src='/assets/adventurebox/Map.png'  />
            <img className={styles.pic9} alt='box-achterkant' src='/assets/adventurebox/box-achterkant.png'  />

        </div>
        </>
    )
}

export default AdventureBox