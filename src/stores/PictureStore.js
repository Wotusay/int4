import { decorate, observable, action } from "mobx";
import PictureService from "../services/PictureService";

class PictureStore {
  constructor(rootstore) {
    this.rootstore = rootstore;
    this.pictureService = new PictureService(this.rootstore.firebase);
    this.pictures = [];
    this.loading = true; 
  }

  addPictures = picture => {
        let pictureExist = this.pictures.findIndex(item => item.id === picture.id);
        if(pictureExist === -1) {
          this.pictures.push(picture)
        }
  }

  pictureSetState = () => this.loading = true;

  onPictureChanged = pictures => {
    pictures.map(picture => this.addPictures(picture));
  }

  getPictures = async () => {
    const result = await this.pictureService.getAllImages(this.rootstore.uiStore.currentCode);
    this.onPictureChanged(result);
  }

  uploadFile = async (file, picture) => {
    //uploading and getting the img url
    const upload = await this.pictureService.uploadPicture(file);
    //connection between the firestore and storage
    picture.comment = '';
    picture.url = upload;
    picture.code = this.rootstore.uiStore.currentCode;
    const newPictureRef = await this.pictureService.createImage(picture);
    this.loading = false;
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
  loading: observable,
  pictures: observable,
  empty: action,
  addPictures: action,
  removePicture: action
});

export default PictureStore;
