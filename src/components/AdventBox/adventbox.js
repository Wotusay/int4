import React from "react";
import styles from "./adventbox.module.css"
import { useObserver } from "mobx-react-lite";

const AdventureBox = () => {
    const text = {
        pic1: 'Leer bij over het sterrenstelsel',
        pic2:'Kom samen in balans en in dezelfde richting',
        pic3:'Bouw samen een fort',
        pic4:'Wandel samen ergens waar je nog nooit bent geweest',
        pic5:'Speel competitief tegen elkaar in verschillende spellen',
        pic6:'Ontdek nieuwe smaken',
        pic7:'Ga op ontdekking in je eigen omgeving ',
    };

    const stylesForText = {
        pic1: styles.text1,
        pic2: styles.text2,
        pic3: styles.text3,
        pic4: styles.text4,
        pic5: styles.text5,
        pic6: styles.text6,
        pic7: styles.text7,
        none: styles.none
    };

    const mouseHandler = e => {
            const target = e.currentTarget;
            const targetClass = target.className;
            const p = document.querySelector('.p');
            p.classList.remove(stylesForText.pic1);
            p.classList.remove(stylesForText.pic2);
            p.classList.remove(stylesForText.pic3);
            p.classList.remove(stylesForText.pic4);
            p.classList.remove(stylesForText.pic5);
            p.classList.remove(stylesForText.pic6);
            p.classList.remove(stylesForText.pic7);

            p.innerHTML ='';            
            p.classList.add(stylesForText.none);

            console.log(targetClass)
            if (targetClass.includes('pic2')) {
                console.log('this is pic2')
                p.classList.add(stylesForText.pic1)
                p.innerHTML = text.pic1;
                p.classList.remove(stylesForText.none);
                p.classList.remove(stylesForText.pic2);
                p.classList.remove(stylesForText.pic3);
                p.classList.remove(stylesForText.pic4);
                p.classList.remove(stylesForText.pic5);
                p.classList.remove(stylesForText.pic6);
                p.classList.remove(stylesForText.pic7);

            }
            if (targetClass.includes('pic3')) {
                console.log('this is pic3')
                p.classList.add(stylesForText.pic2)
                
                p.classList.remove(stylesForText.none);
                p.classList.remove(stylesForText.pic1);
                p.classList.remove(stylesForText.pic3);
                p.classList.remove(stylesForText.pic4);
                p.classList.remove(stylesForText.pic5);
                p.classList.remove(stylesForText.pic6);
                p.classList.remove(stylesForText.pic7);

                p.innerHTML = text.pic2
            }
            if (targetClass.includes('pic4')) {
                console.log('this is pic4')
                p.classList.add(stylesForText.pic3)
                p.classList.remove(stylesForText.none);
                p.classList.remove(stylesForText.pic1);
                p.classList.remove(stylesForText.pic2);
                p.classList.remove(stylesForText.pic4);
                p.classList.remove(stylesForText.pic5);
                p.classList.remove(stylesForText.pic6);
                p.classList.remove(stylesForText.pic7);

                p.innerHTML = text.pic3
            }
            if (targetClass.includes('pic5')) {
                console.log('this is pic5')
                p.classList.add(stylesForText.pic4)
                p.innerHTML = text.pic4
                p.classList.remove(stylesForText.none);
                p.classList.remove(stylesForText.pic1);
                p.classList.remove(stylesForText.pic2);
                p.classList.remove(stylesForText.pic3);
                p.classList.remove(stylesForText.pic5);
                p.classList.remove(stylesForText.pic6);
                p.classList.remove(stylesForText.pic7);

                
            }
            if (targetClass.includes('pic6')) {
                console.log('this is pic6')
                p.innerHTML = text.pic5
                p.classList.remove(stylesForText.none);
                p.classList.add(stylesForText.pic5)
                p.classList.remove(stylesForText.pic1);
                p.classList.remove(stylesForText.pic2);
                p.classList.remove(stylesForText.pic4);
                p.classList.remove(stylesForText.pic3);
                p.classList.remove(stylesForText.pic6);
                p.classList.remove(stylesForText.pic7);
            }
            if (targetClass.includes('pic7')) {
                console.log('this is pic7')
                p.innerHTML = text.pic6
                p.classList.remove(stylesForText.none);
                p.classList.remove(stylesForText.pic1);
                p.classList.remove(stylesForText.pic2);
                p.classList.remove(stylesForText.pic4);
                p.classList.remove(stylesForText.pic3);
                p.classList.remove(stylesForText.pic5);
                p.classList.remove(stylesForText.pic7);
                p.classList.add(stylesForText.pic6)
            }
            if (targetClass.includes('pic8')) {
                console.log('this is pic8')
                p.innerHTML = text.pic7
                p.classList.remove(stylesForText.none);
                p.classList.remove(stylesForText.pic1);
                p.classList.remove(stylesForText.pic2);
                p.classList.remove(stylesForText.pic4);
                p.classList.remove(stylesForText.pic5);
                p.classList.remove(stylesForText.pic6);
                p.classList.remove(stylesForText.pic3);

                p.classList.add(stylesForText.pic7)
            }
            

    }
    return useObserver(() => (
        <>
        <div className={styles.wrapper}>
            <img className={styles.pic1} width='352' height='139' alt='BoxMockup-bottom' src='/assets/adventurebox/BoxMockup-bottom.png' />
            <img className={styles.pic2} width='172' height='185' onMouseEnter={e => mouseHandler(e)} alt='Verrekijker' src='/assets/adventurebox/Verrekijker.png' />
            <img className={styles.pic3} width='100' height='144' onMouseEnter={e => mouseHandler(e)} alt='Compass' src='/assets/adventurebox/Compass.png'  />
            <img className={styles.pic4} width='238' height='123' onMouseEnter={e => mouseHandler(e)} alt='Tent' src='/assets/adventurebox/Tent.png'  />
            <img className={styles.pic5} width='160' height='235' onMouseEnter={e => mouseHandler(e)} alt='Rugzak' src='/assets/adventurebox/Rugzak.png'  />
            <img className={styles.pic6} width='66' height='112' onMouseEnter={e => mouseHandler(e)} alt='RockClimbing' src='/assets/adventurebox/RockClimbing.png'  />
            <img className={styles.pic7} width='70' height='182' onMouseEnter={e => mouseHandler(e)} alt='Pineapple' src='/assets/adventurebox/Pineaple.png'  />
            <img className={styles.pic8} width='199' height='230' onMouseEnter={e => mouseHandler(e)} alt='Map' src='/assets/adventurebox/Map.png'  />
            <img className={styles.pic9} width='712' height='604' alt='box-achterkant' src='/assets/adventurebox/box-achterkant.png'  />
            <p className='p'></p>
  </div>

        </>
    ))
}

export default AdventureBox