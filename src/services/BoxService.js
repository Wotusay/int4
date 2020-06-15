import "firebase/firestore";
import { boxConverter } from "../models/box";

class BoxService {
    constructor(firebase) {
        this.db = firebase.firestore();
    }

    getBox = async boxId => {
    return await this.db.collection("Boxes")
    .doc(boxId).withConverter(boxConverter).get();
}

}



export default BoxService;
