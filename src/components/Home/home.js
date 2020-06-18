import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.background}>
          <section className={styles.landing}>
            <div className={styles.titleWrapper}>
              <h2 className={styles.title}>Beleef jouw honeymoon thuis</h2>
              <p className={styles.desc}>
                Zit je vast thuis? Is je honeymoon geannuleerd en wil je toch
                nog iets doen? Met onze pakketten beleef je je honeymoon thuis!
              </p>
            </div>

            <div className={styles.plane}>
            <picture className={styles.planepic} >
            <source media="(min-width: 1440px)" srcset="/assets/plane.png"/>
            <source media="(min-width: 320px)" srcset="/assets/plane-mobile.png"/>
      
            <img  src="assets/plane.png" style={{width: 'auto'}} alt="plane"/>
            </picture>
            </div>
          </section>

          <section className={styles.box}>
            <h2 className={styles.title_white}>Kies een type box</h2>
            <div className={styles.stackedbox}>
              <picture>
                <source media="(min-width: 1440px)" srcset="/assets/stackedboxes.png"/>
                <source media="(min-width: 320px)" srcset="/assets/boxes-mobile.png"/>
                <img alt="stackedbox" src="/assets/stackedboxes.png" style={{width: 'auto'}} />

              </picture>
              <p className={styles.action}>Bekijk ons assortiment van boxen </p>
              <Link className={styles.button1}>Bekijk alle boxen</Link>
            </div>
            <div className={styles.quiz} >
              <picture>
              <source media="(min-width: 1440px)" srcset="/assets/quizbox.png"/>
                <source media="(min-width: 320px)" srcset="/assets/quiz-mobile.png"/>
              <img alt="quizbox" src="/assets/quizbox.png" style={{width: 'auto'}} />
              </picture>
              <p className={styles.action}>Laat onze test bepalen welke box het beste bij jou past </p>
              <Link className={styles.button2}>Doe de test</Link>
            </div>
          </section>

          <section>
            <h2 className='hidden'>Over ons</h2>
            <article>
              <div className={styles.gridpatern} >
                <div className={styles.whatWrapper}>
                  <h3 className={styles.subtitle}>Wat is Honeyhome?</h3>
                  <p className={styles.text} >
                    Met Honeyhome kan je je honeymoon thuis beleven. We bieden
                    verschillende soorten boxen aan die elk een verschillend
                    thema aanspreken waardoor je zelf jouw soort honeymoon kan
                    kiezen.
                  </p>
                  <p className={styles.text} >
                    Elke box is zorgvuldig samengesteld om je de ultieme
                    ervaring van een honeymoon thuis te geven. Er zijn
                    verschillende soorten activiteiten, van typische culturele
                    gerechten klaarmaken tot het maken van je eigen fort.
                    Uiteindelijk kan er ook een fotoboek worden samengesteld als
                    herinnering aan je honeymoon thuis.
                  </p>
                </div>
                <div className={styles.relativePos}>
                  <picture className={styles.pic1}>
                  <source media="(min-width: 1440px)" srcset="/assets/marriage.png"/>
                  <source media="(min-width: 320px)" srcset="/assets/marriage-mobile.png"/>
                  <img style={{width: 'auto'}} alt="mariage" src="/assets/marriage.png" />
                  </picture>
                </div>
              </div>
            </article>
            <article>
              <div className={styles.gridpatern}>
                <div className={styles.gridpos}>
                  <h3 className={styles.subtitle}>Hoe werkt het?</h3>
                  <p className={styles.text} >
                    Je besteld een box en krijgt deze na een paar dagen
                    opgestuurd. In de box zal een code zitten die je moet
                    ingeven op onze website bij ‘log in’. Deze code zal je
                    brengen naar de virtuele ruimte waar je je honeymoon kan
                    beleven. Elke element staat voor een bepaalde activiteit die
                    je met je partner kan doen. Beslis zelf wanneer je deze wil
                    voltooien. Bij elke activiteit kan je een foto nemen en deze
                    uploaden. Op het einde krijg je dan een fotoboek met alle
                    herinneringen van je honeymoon at home.
                  </p>
                </div>
                <picture className={styles.pic2}>
                <source media="(min-width: 1440px)" srcset="/assets/openbox.png"/>
                  <source media="(min-width: 320px)" srcset="/assets/openbox-mobile.png"/>
                <img style={{width: 'auto'}} alt="openbox" src="/assets/openbox.png" />
                </picture>
              </div>
            </article>
            <article className={styles.gridpatern_reviewers}>
              <h3 className={styles.reviewtittle}>Wat anderen vonden </h3>
              <div className={styles.reviewers}>
                <div className={styles.reviewpattern}>
                  <picture>
                  <source media="(min-width: 1440px)" srcset="/assets/reviewer-1.png"/>
                  <source media="(min-width: 320px)" srcset="/assets/reviewer1-mobile.png"/>
                  <img alt="reviewer" src="/assets/reviewer-1.png" />
                  </picture>
                  <p className={styles.text_rev} >
                    Geweldige ervaring gehad met mijn partner. Onze reis werd
                    uitgesteld en het was een goede vervanger!
                  </p>
                  <picture className={styles.stars}>
                  <source media="(min-width: 1440px)" srcset="/assets/stars.png"/>
                  <source media="(min-width: 320px)" srcset="/assets/stars-mobile.png"/>
                  <img style={{width: 'auto'}}  alt="stars" src="/assets/stars.png" />
                  </picture>
                </div>
                <div className={styles.reviewpattern}>
                <picture>
                  <source media="(min-width: 1440px)" srcset="/assets/reviewer-2.png"/>
                  <source media="(min-width: 320px)" srcset="/assets/reviewer2-mobile.png"/>
                  <img style={{width: 'auto'}} alt="reviewer" src="/assets/reviewer-2.png" />
                  </picture>
                  <p className={styles.text_rev} >
                    Geweldige ervaring gehad met mijn partner. Onze reis werd
                    uitgesteld en het was een goede vervanger!
                  </p>
                  <picture className={styles.stars}>
                  <source media="(min-width: 1440px)" srcset="/assets/stars.png"/>
                  <source media="(min-width: 320px)" srcset="/assets/stars-mobile.png"/>
                  <img style={{width: 'auto'}}  alt="stars" src="/assets/stars.png" />
                  </picture>
                </div>
                <div className={styles.reviewpattern}>
                <picture>
                  <source media="(min-width: 1440px)" srcset="/assets/reviewer-3.png"/>
                  <source media="(min-width: 320px)" srcset="/assets/reviewer3-mobile.png"/>
                  <img style={{width: 'auto'}} alt="reviewer" src="/assets/reviewer-3.png" />
                  </picture>
                  <p className={styles.text_rev} >
                    Geweldige ervaring gehad met mijn partner. Onze reis werd
                    uitgesteld en het was een goede vervanger!
                  </p>
                  <picture className={styles.stars}>
                  <source media="(min-width: 1440px)" srcset="/assets/stars.png"/>
                  <source media="(min-width: 320px)" srcset="/assets/stars-mobile.png"/>
                  <img style={{width: 'auto'}}  alt="stars" src="/assets/stars.png" />
                  </picture>
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
