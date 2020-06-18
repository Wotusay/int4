import React from "react";

import { useObserver } from "mobx-react-lite";
import styles from "./boxes.module.css";
import { useParams, useHistory,Link } from "react-router-dom";
import AdventureBox from "../AdventBox/adventbox";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { ROUTES, mediaQueries } from "../../consts";
import RomanBox from "../RomanBox/romanbox";
import TropicBox from "../TropicBox/tropicbox";
import MediaQuery from "react-responsive";

const Boxes = () => {
    const {id} = useParams();
    const history = useHistory();
    console.log(id);
    const handleNext = e  => {
        e.preventDefault();
        id === 'adventure-box' ? history.push(ROUTES.boxes.to + '/romantic-box') : id === 'romantic-box' ? history.push(ROUTES.boxes.to + '/tropic-box') : id === 'tropic-box' ? history.push(ROUTES.boxes.to + '/adventure-box') : history.push(ROUTES.boxes + '/adventure-box');

    }

    const handlePrevious = e => {
        e.preventDefault();
        id === 'adventure-box' ? history.push(ROUTES.boxes.to + '/tropic-box') : id === 'romantic-box' ? history.push(ROUTES.boxes.to + '/adventure-box') : id === 'tropic-box' ? history.push(ROUTES.boxes.to + '/romantic-box') : history.push(ROUTES.boxes + '/adventure-box');
    }

    return useObserver(() => (
        <>
        <MediaQuery minDeviceWidth={mediaQueries.mobile} maxDeviceWidth={mediaQueries.tablet} >
        {id === 'adventure-box' ? <> <img className={styles.leave1} alt="prop1" src="/assets/left-mobile.png" /> </>: id === 'romantic-box' ? <> <img className={styles.leave1} alt="prop1" src="/assets/romanticleft-mobile.png" />  </> : id === 'tropic-box' ? <> <img className={styles.leave1}  alt="prop2" src="/assets/tropicleft-mobile.png" /> </>: <Redirect to={ROUTES.boxes.to + '/adventure-box'}  /> }
        </MediaQuery>
        <MediaQuery minDeviceWidth={mediaQueries.tablet+1}>
        {id === 'adventure-box' ? <> <img className={styles.leave1} alt="prop1" src="/assets/adventurebox/leaves-bottom.png" />  <img className={styles.leave2}  alt="prop2" src="/assets/adventurebox/leaves-top.png" />  </>: id === 'romantic-box' ? <> <img className={styles.leave1} alt="prop1" src="/assets/romanticbox/left.png" />  <img className={styles.top}  alt="top" src="/assets/romanticbox/top.png" /> <img className={styles.right}  alt="right" src="/assets/romanticbox/right.png" />  </> : id === 'tropic-box' ? <> <img className={styles.leave2}  alt="prop2" src="/assets/tropicbox/top.png" /> <img className={styles.leave1}  alt="prop1" src="/assets/tropicbox/bottom.png" />  </>: <Redirect to={ROUTES.boxes.to + '/adventure-box'}  /> }
        </MediaQuery>

        <div className={id === 'adventure-box' ? styles.adventure_wrapper : id === 'romantic-box' ? styles.romantic_wrapper : id === 'tropic-box' ? styles.tropic_wrapper : styles.wrapper}>
        <button onClick={e => handlePrevious(e)}  className={styles.button_prev}>
        <svg width="30" height="54" viewBox="0 0 30 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 52L3 25.0263L28 2" stroke="white" strokeWidth="4"/>
        </svg>
        </button>   
        {id === 'adventure-box' ? <AdventureBox/> : id === 'romantic-box' ? <RomanBox /> : id === 'tropic-box' ? <TropicBox/> : <Redirect to={ROUTES.boxes.to + '/adventure-box'}  /> }

        <button onClick={e => handleNext(e)}  className={styles.button_next}>
            <svg width="30" height="54" viewBox="0 0 30 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L27 28.9737L2 52" stroke="white" strokeWidth="4"/>
            </svg>
        </button>   
        <div className={styles.info_wrapper}>
            <div className={styles.pos}>  
            <p className={styles.title}>
            {id === 'adventure-box' ? 'Advontura box   €40' : id === 'romantic-box' ? 'Amura box  €40' : id === 'tropic-box' ? 'Tropicae box   €40' : <Redirect to={ROUTES.boxes.to + '/adventure-box'}  /> }
            </p>
            <div className={styles.buttons_wrapper}>
                <Link to={ROUTES.home} className={styles.button_main}>Koop Box</Link>
                <Link to={ROUTES.home} className={styles.button_sec}>Doe de test</Link>
            </div>
            <p className={styles.info}>Hover over the items voor meer info</p>
        </div> </div>    
   </div>



        </>
    ))

}

export default Boxes;