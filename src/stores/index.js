import { configure } from "mobx";
import PictureStore from "./PictureStore";
import UiStore from "./UiStore";
import BoxStore from "./BoxStore";
import UserStore from "./UserStore";
import ActivitiesStore from "./ActivitiesStore";
import * as firebase from "firebase/app";


configure({ enforceActions: `observed` });

class RootStore {
  constructor() {
    var firebaseConfig = {
      apiKey: process.env.REACT_APP_apiKey,
      authDomain: process.env.REACT_APP_authDomain,
      databaseURL: process.env.REACT_APP_databaseURL,
      projectId: process.env.REACT_APP_projectId,
      storageBucket: process.env.REACT_APP_storageBucket,
      messagingSenderId: process.env.REACT_APP_messagingSenderId,
      appId: process.env.REACT_APP_appId
    };

    this.firebase = firebase.initializeApp(firebaseConfig);


    this.pictureStore = new PictureStore(this);
    this.uiStore = new UiStore(this);
    this.boxStore = new BoxStore(this);
    this.userStore = new UserStore(this);
    this.activitiesStore = new ActivitiesStore(this);
  }

  
}
const getCurrenTimeStamp = () => {
  return firebase.firestore.Timestamp.now();
};
export { getCurrenTimeStamp };

export default RootStore;
