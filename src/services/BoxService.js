import "firebase/firestore";
import { boxConverter } from "../models/box";
import { activityConverter } from "../models/activity";

class BoxService {
    constructor(firebase) {
        this.db = firebase.firestore();
    }

    getBoxActivities = async (onChange, boxCode)=> {
        let data = [];
        await this.db.collectionGroup(onChange)
        .where("boxCode", "==", boxCode).withConverter(activityConverter).get()
        .then(function(querySnapShot) {
            querySnapShot.forEach(doc => {
                if (doc !== undefined) {
                    data.push(doc.data());
                }
            })
        });
        return data;
    };


    getBoxWithCode = async code => {
        let data = [];   
   await this.db.collection("Boxes").where("code", "==", code).withConverter(boxConverter).get()
    .then(function(querySnapShot) {
        querySnapShot.forEach(doc =>  {
          if (doc !== undefined) {
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
