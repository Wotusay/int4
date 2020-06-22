import { v4 } from "uuid";

class Picture {
  constructor({ store, activity, id = v4(), url, code, userId,comment }) {
    this.comment = comment;
    this.activity = activity;
    this.id = id;
    this.url = url;
    this.code = code;
    this.userId = userId;
    this.store = store;
  }
}

const pictureConverter = {
  toFirestore: function(picture) {
    return {
      comment: picture.comment,
      code: picture.code,
      userId: picture.userId,
      activity: picture.activity,
      url: picture.url
    };
  },

  fromFirestore: function(snapshot, options) {
    const data = snapshot.data(options);
    return new Picture({
      id: snapshot.id,
      comment: data.comment,
      code: data.code,
      userId: data.userId,
      activity: data.activity,
      url: data.url
    });
  }
}

export {pictureConverter};
export default Picture;
