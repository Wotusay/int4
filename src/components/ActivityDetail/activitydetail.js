import React from 'react';
import { useObserver } from 'mobx-react-lite';
import styles from "./activitydetail.module.css"
import Back from '../Back/back';
import { ROUTES } from '../../consts';
import { Link, useParams } from 'react-router-dom';
import { useStores } from '../../hooks';

const ActivityDetail = () => {
    const { id } = useParams();
    const { boxStore, uiStore } = useStores();
    const activity = boxStore.getActivitiesById(id);
    console.log(activity)

    return useObserver(() => {
            if (uiStore.currentBox === undefined) {
            if (!activity) {
                return <> <Back /> <p className="loading"> Activiteit is niet gevonden </p> </>;
              }
            }
              else { 
          return (
        <>
        <div>
            <Back/>
            <div className={activity.time === 'middag' ? styles.background_m : activity.time === 'avond' ? styles.background_n : styles.background}>
            <div className={styles.contentleft}>
                <p className={styles.title}> Op bezoek in <span> {activity.city}!</span></p>
                <div>
                <p className={styles.subtitle} >{activity.title}</p>
                <p className={styles.duration}>Duurtijd: {activity.duration} mins </p></div>
                <p className={styles.desc}>
                {activity.description}                
                </p>
                <p className={styles.info}>
                {activity.info}                
                </p>
                <div className={styles.wrapper}>
                    <Link to={ROUTES.home} className={styles.button_left}>Begin de activiteit</Link>
                    <Link to={ROUTES.home} className={styles.button_right}>We hebben hulp nodig</Link>
                </div>
            </div></div>
        </div>
        <div className={styles.relative}>
        <picture className={styles.right}>
        <source media="(min-width: 1440px)" srcset={`${activity.pic}.png`} />
        <source media="(min-width: 320px)" srcset={`${activity.pic}-mobile.png`} />
        <img alt='india' style={{width: 'auto'}} src={`${activity.pic}.png`} />
        </picture>  </div>

        <picture className={styles.left}>
        <source media="(min-width: 1440px)" srcset="/assets/leaf-top.png" />
        <source media="(min-width: 320px)" srcset="/assets/leaf-top-mobile.png" />
        <img alt='prop-top' style={{width: 'auto'}} src="/assets/leaf-top.png"/>
        </picture>
        </>

          )}});
}

export default ActivityDetail;