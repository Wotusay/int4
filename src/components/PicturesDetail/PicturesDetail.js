import React from "react";
import { useStore } from "../../hooks";

import { useObserver } from "mobx-react-lite";



const PicturesDetail = () => {
    const store = useStore();
    return useObserver(() => (
        <div>
            
        </div>
    ))
};

export default PicturesDetail;