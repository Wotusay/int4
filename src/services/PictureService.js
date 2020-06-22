import "firebase/storage";
import { pictureConverter } from "../models/picture";

class PictureService {
    constructor(firebase) {
        this.db = firebase.firestore();
        this.storage = firebase.storage();
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
        const picureUrl = await storageRef.getDownloadURL();
        
        return picureUrl;
    }
}

export default PictureService;
