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
    uiStore.setCurrentActivity(activity);
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
                    <Link to={activity.title === 'Roya-Yoga' ? ROUTES.yogadetail : activity.title === 'Stargazing' ? ROUTES.finland : activity.title === 'Buon Appetito' ? ROUTES.pizzaconfigurator : ROUTES.activities} className={styles.button_left}>Begin de activiteit</Link>
                    <Link to={ROUTES.uploadpicture} className={styles.button_right}> <svg className={styles.icon} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.0481 0.304501C13.2299 0.116727 13.4846 1.71411e-08 13.7666 1.71411e-08C13.776 -1.70523e-06 13.7853 0.000126373 13.7946 0.000384248C13.8923 0.00306847 13.9864 0.0197555 14.0752 0.0485094C14.221 0.0956348 14.3581 0.177096 14.4739 0.292893L21.5667 7.38565C21.9572 7.77617 21.9572 8.40934 21.5667 8.79986C21.1761 9.19038 20.543 9.19038 20.1525 8.79986L14.7666 3.41403V18.0226C14.7666 18.5749 14.3189 19.0226 13.7666 19.0226C13.2143 19.0226 12.7666 18.5749 12.7666 18.0226V3.4144L7.38116 8.79986C6.99064 9.19038 6.35747 9.19038 5.96695 8.79986C5.57642 8.40934 5.57642 7.77617 5.96695 7.38565L13.0481 0.304501ZM1 17.0222C1.55228 17.0222 2 17.4699 2 18.0222V23.6964C2 24.1836 2.19355 24.6509 2.53807 24.9954C2.8826 25.3399 3.34987 25.5335 3.8371 25.5335H23.6968C24.184 25.5335 24.6513 25.3399 24.9958 24.9954C25.3404 24.6509 25.5339 24.1836 25.5339 23.6964V18.0222C25.5339 17.4699 25.9816 17.0222 26.5339 17.0222C27.0862 17.0222 27.5339 17.4699 27.5339 18.0222V23.6964C27.5339 24.714 27.1296 25.69 26.41 26.4096C25.6905 27.1292 24.7145 27.5335 23.6968 27.5335H3.8371C2.81944 27.5335 1.84346 27.1292 1.12386 26.4096C0.404265 25.69 0 24.714 0 23.6964V18.0222C0 17.4699 0.447715 17.0222 1 17.0222Z" fill="white"/>
                    </svg>
                     Upload</Link>
                </div>
            </div></div>
        </div>
        <div className={styles.relative}>
        <picture className={styles.right}>
        <source media="(min-width: 1440px)" srcSet={`${activity.pic}.png`} />
        <source media="(min-width: 320px)" srcSet={`${activity.pic}-mobile.png`} />
        <img alt='india' style={{width: 'auto'}} src={`${activity.pic}.png`} />
        </picture>  </div>

        <picture className={styles.left}>
        <source media="(min-width: 1440px)" srcSet="/assets/leaf-top.png" />
        <source media="(min-width: 320px)" srcSet="/assets/leaf-top-mobile.png" />
        <img alt='prop-top' style={{width: 'auto'}} src="/assets/leaf-top.png"/>
        </picture>
        </>

          )}});
}

export default ActivityDetail;