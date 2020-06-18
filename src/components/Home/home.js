import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";


const Home = () => {

    
  return ( 
    <>
        <div className={styles.grid}>
          <div className={styles.background}>
            <section className={styles.landing}>
             <div>
            <h2 className={styles.title}>
            Beleef jouw honeymoon thuis
            </h2>
            <p className={styles.desc}>
            Zit je vast thuis? Is je honeymoon geannuleerd en wil je toch nog iets doen? Met onze pakketten beleef je je honeymoon thuis!
            </p></div> 

            <div className={styles.plane}>
            <img className={styles.planepic} alt='plane' src="/assets/plane.png" /></div>
            </section>  

            <section>
            <h2 className={styles.title}>
            Kies een type box 
            </h2>
            <div>
            <img alt='stackedbox' src="/assets/stackedboxes.png" />
            <p>Bekijk ons assortiment van boxen </p>
            <Link>Bekijk alle boxen</Link>
            </div>
            <div>
            <img alt='quizbox' src="/assets/quizbox.png" />
            <p>Laat onze test bepalen welke box het beste bij jou past </p>
            <Link>Doe de test</Link>
            </div>
            </section>  

            <section>
            <h2 className={styles.title}>
            Over ons
            </h2>
            <article>
              <div>
                <div>
                  <h3>Wat is Honeyhome?</h3>
                  <p>Met Honeyhome kan je je honeymoon thuis beleven. We bieden verschillende soorten boxen aan die elk een verschillend thema aanspreken waardoor je zelf jouw soort honeymoon kan kiezen. </p>
                  <p>Elke box is zorgvuldig samengesteld om je de ultieme ervaring van een honeymoon thuis te geven. Er zijn verschillende soorten activiteiten, van typische culturele gerechten klaarmaken tot het maken van je eigen fort. Uiteindelijk kan er ook een fotoboek worden samengesteld als herinnering aan je honeymoon thuis.</p>
                </div>
                <img alt='mariage' src='/assets/marriage.png' />
          </div> 
          </article>
          <article>
              <div>
                <div>
                  <h3>Hoe werkt het?</h3>
                  <p>Je besteld een box en krijgt deze na een paar dagen opgestuurd. In de box zal een code zitten die je moet ingeven op onze website bij ‘log in’. Deze code zal je brengen naar de virtuele ruimte waar je je honeymoon kan beleven. Elke element staat voor een bepaalde activiteit die je met je partner kan doen. Beslis zelf wanneer je deze wil voltooien. 
                  Bij elke activiteit kan je een foto nemen en deze uploaden. Op het einde krijg je dan een fotoboek met alle herinneringen van je honeymoon at home.</p>
                </div>
                <img alt='openbox' src='/assets/openbox.png' />
          </div> 
          </article>
          <article>
              <h3>Wat anderen vonden </h3>
              <div>
                <div>
                  <img alt='reviewer' src='/assets/reviewer-1.png' />
                  <p>Geweldige ervaring gehad met mijn partner. Onze reis werd uitgesteld en het was een goede vervanger!</p>
                  <img alt="stars" src='/assets/stars.png' />
                </div>
                <div>
                  <img alt='reviewer' src='/assets/reviewer-2.png' />
                  <p>Geweldige ervaring gehad met mijn partner. Onze reis werd uitgesteld en het was een goede vervanger!</p>
                  <img alt="stars" src='/assets/stars.png' />
                </div>
                <div>
                  <img alt='reviewer' src='/assets/reviewer-3.png' />
                  <p>Geweldige ervaring gehad met mijn partner. Onze reis werd uitgesteld en het was een goede vervanger!</p>
                  <img alt="stars" src='/assets/stars.png' />
                </div>
              </div>
          </article>

            </section>  
            </div>
        </div>
    </>
  );
};

export default Home;