import "firebase/storage";
import { pictureConverter } from "../models/picture";

class PictureService {
    constructor(firebase) {
        this.db = firebase.firestore();
        this.storage = firebase.storage();
    }


    getAllImages = async code => {
        let data = [];
        await this.db.collection("pictures")
        .where("code", "==", code).withConverter(pictureConverter).get()
        .then(function(querySnapShot) {
            querySnapShot.forEach(doc =>  {
              if (doc !== undefined) {
                data.push(doc.data())
              } if (doc === undefined) {
                  console.log('nothing found');
              }
            })
        })

        return data;
    }

    createImage = async picture =>  {
        const pictureRef = await this.db.collection("pictures").doc();
        await pictureRef.withConverter(pictureConverter).set(picture);
        return pictureRef;
    }


    uploadPicture = async file => {
        console.log(file);
        const metaData = {'contentType': file.type}
        const storageRef = this.storage.ref(`assets/${file.name}`);
        const uploadToFirebase =  storageRef.put(file, metaData);
        await uploadToFirebase; 
        console.log(uploadToFirebase.state);
        const picureUrl = await storageRef.getDownloadURL();
        return picureUrl;
    }

    updatePicture = async (pictureId, updates) => {
        await this.db.collection("pictures").doc(pictureId).update({'comment': updates}); 
    }

    removePicture = async pictureId => {
        await this.db.collection("pictures").doc(pictureId).delete();
    }
}

export default PictureService;
