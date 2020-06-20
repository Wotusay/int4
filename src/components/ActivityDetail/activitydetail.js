import React from 'react';
import { useObserver } from 'mobx-react-lite';
import styles from "./activitydetail.module.css"
import Back from '../Back/back';
import { ROUTES } from '../../consts';
import { Link } from 'react-router-dom';

const ActivityDetail = () => {
    return useObserver(() => (
        <>
        <div>
            <Back/>
            <div className={styles.background}>
            <div className={styles.contentleft}>
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
                    <Link to={ROUTES.home} className={styles.button_left}>Begin de activiteit</Link>
                    <Link to={ROUTES.home} className={styles.button_right}>We hebben hulp nodig</Link>
                </div>
            </div></div>
        </div>
        <picture className={styles.right}>
        <source media="(min-width: 1440px)" srcset="/assets/india.png" />
        <source media="(min-width: 320px)" srcset="/assets/india-mobile.png" />

        <img alt='india' style={{width: 'auto'}} src="/assets/india.png"/>
        </picture>
        <picture className={styles.left}>
        <source media="(min-width: 1440px)" srcset="/assets/leaf-top.png" />
        <source media="(min-width: 320px)" srcset="/assets/leaf-top-mobile.png" />
        <img alt='prop-top' style={{width: 'auto'}} src="/assets/leaf-top.png"/>
        </picture>
        </>

    ));
}

export default ActivityDetail;