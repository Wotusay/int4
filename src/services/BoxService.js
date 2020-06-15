import "firebase/firestore";
import { boxConverter } from "../models/box";

class BoxService {
    constructor(firebase) {
        this.db = firebase.firestore();
    }


    getBoxWithCode = async code => {
        let data = [];   
   await this.db.collection("Boxes").where("code", "==", code).withConverter(boxConverter).get()
    .then(function(querySnapShot) {
        querySnapShot.forEach(doc =>  {
          if (doc !== undefined) {
            console.log(doc.data())
            data = doc.data();
          } if (doc === undefined) {
              console.log('nothing found');
          }
        })
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    ;

    return data;
}



}



export default BoxService;
