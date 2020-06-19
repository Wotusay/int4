import React from 'react';
import { useObserver } from 'mobx-react-lite';
import styles from "./activitydetail.module.css"
import Back from '../Back/back';

const ActivityDetail = () => {
    return useObserver(() => {
        <>
        <div>
            <Back/>
            <div className={styles.background}>
            <p className={styles.title}> Op bezoek in <span>New York City!</span></p>
                <div>
                <p className={styles.subtitle} >Broadway</p>
                <p className={styles.duration}>Duurtijd: 30 mins </p></div>
                <p className={styles.desc}>
                Beeld jullie in dat jullie zich bevinden in het befaamde  Broadway en geef een privé concert aan elkaar. Muziek wordt wel eens de ‘love language’ genoemd, waar je uw emoties mee kan uiten of opwekken. Zingen neemt de stress weg en bevordert het slapen.
                </p>
                <p className={styles.info}>
                Ontdek het innerlijk zangtalent in jezelf en je partner.  Vergeet niet om foto’s te nemen van elkaars privé concert, zodat je deze kan uploaden in jullie fotoboek. 
                </p>
                <div className={styles.wrapper}>
                    <Link className={styles.button_left}>Begin de activiteit</Link>
                    <Link className={styles.button_rightt}>We hebben hulp nodig</Link>
                </div>
            </div>
        </div>
        <img alt='india' className={styles.right} src="/assets/india.png"/>
        <img alt='prop-top' className={styles.left} src="/assets/leaf-top.png"/>
        </>

    });
}

export default ActivityDetail;