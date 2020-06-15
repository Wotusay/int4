import "firebase/firestore";
import { boxConverter } from "../models/box";

class BoxService {
    constructor(firebase) {
        this.db = firebase.firestore();
    }


    getBox = async () => {
    const boxRef = await this.db.collection("Boxes").doc().withConverter(boxConverter).get();
    return boxRef;   

}

}



export default BoxService;
