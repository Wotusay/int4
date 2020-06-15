import * as firebase from "firebase/app";
import BoxStore from "./BoxStore";
import UiStore from "./UiStore";

class RootStore {
  constructor() {
    var firebaseConfig = {
      apiKey: process.env.REACT_APP_apiKey,
      authDomain: process.env.REACT_APP_authDomain,
      databaseURL: process.env.REACT_APP_databaseURL,
      projectId: process.env.REACT_APP_projectId,
      storageBucket: process.env.REACT_APP_storageBucket,
      messagingSenderId: process.env.REACT_APP_messagingSenderId,
      appId: process.env.REACT_APP_appId,
    };

    this.firebase = firebase.initializeApp(firebaseConfig);
    this.uiStore = new UiStore(this);
    this.boxStore = new BoxStore(this);
  }
}
const getCurrenTimeStamp = () => {
  return firebase.firestore.Timestamp.now();
};

export { getCurrenTimeStamp };
export default RootStore;
