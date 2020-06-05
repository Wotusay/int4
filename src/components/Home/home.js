import React from "react";
import { useStore } from "../../hooks";
import { useObserver } from "mobx-react-lite";
import Picture from "../Picture/picture";
import styles from "./home.module.css";
import { ROUTES } from "../../consts";
import { Link} from 'react-router-dom';
import Draggable from 'react-draggable';


const Home = () => {    


    const store = useStore();



    
    return useObserver(() => (

            <section >
            <h1 className={styles.title}>Photobook</h1>
            <ul className={styles.grid}  > 
                {store.pictures.map(picture => (
                    <Draggable> 
                    <li key={picture.id}>
                    
                    <Link to={ROUTES.pictureDetail.to + picture.id}>
                  <Picture  picture={picture} /> 
                   </Link>   
                    </li></Draggable> 
                )
                    
                )}

                <li className={styles.add}>
                    +
                </li>
            </ul>
        </section>
        

    )

    )

}



export default Home; 