import React from "react";
import { useStore } from "../../hooks";
import { useObserver } from "mobx-react-lite";
import Picture from "../Picture/picture";
import styles from "./picturebook.module.css";
import { ROUTES } from "../../consts";
import { Link} from 'react-router-dom';
import Back from "../Back/back";


const Picturebook = () => {    
    const {pictureStore} = useStore();
    return useObserver(() => (

            <section >
           
            <h1 className={styles.title}>Photobook</h1> 
            <Back/>
            <ul className={styles.grid}  > 
                {pictureStore.pictures.map(picture => (
                    <li key={picture.id}>
                    <Link to={ROUTES.pictureDetail.to + picture.id}>
                  <Picture  picture={picture} /> 
                   </Link>   
                    </li>
                )
                    
                )}
            </ul>
        </section>
        

    )

    )

}



export default Picturebook; 