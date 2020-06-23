import { decorate, observable, action } from "mobx";
import PictureService from "../services/PictureService";

class PictureStore {
  constructor(rootstore) {
    this.rootstore = rootstore;
    this.pictureService = new PictureService(this.rootstore.firebase);
    this.pictures = [];
  }

  addPictures = picture => {
        let pictureExist = this.pictures.findIndex(item => item.id === picture.id);
        if(pictureExist === -1) {
          this.pictures.push(picture)
        }
  }

  onPictureChanged = pictures => {
    pictures.map(picture => this.addPictures(picture));
  }

  getPictures = async () => {
    const result = await this.pictureService.getAllImages(this.rootstore.uiStore.currentCode);
    this.onPictureChanged(result);
    console.log(result);
  }

  uploadFile = async (file, picture) => {
    //uploading and getting the img url
    const upload = await this.pictureService.uploadPicture(file);
    console.log(upload);
    //connection between the firestore and storage
    picture.comment = '';
    picture.url = upload;
    picture.code = this.rootstore.uiStore.currentCode;
    const newPictureRef = await this.pictureService.createImage(picture);
    picture.id = newPictureRef.id;
    
    return picture;
  }

  empty() {
    this.pictures = [];
  }

  removePicture = async pictureId => {
    await this.pictureService.removePicture(pictureId);
  }

  updatePicture = async (pictureId, updates) => {
   await this.pictureService.updatePicture(pictureId, updates);
  }

  getPictureById = id => this.pictures.find(picture => picture.id === id)
  
}

decorate(PictureStore, {
  pictures: observable,
  empty: action,
  addPictures: action,
});

export default PictureStore;
