import { v4 } from "uuid";

class Box {
    constructor({ id = v4(), store, userId, code, price, title, pic }) {
        this.id = id;
        this.store = store;
        this.title = title; 
        this.price =price; 
        this.userId = userId;
        this.code = code;
        this.pic = pic;

    }

}

const boxConverter = {
    toFirestore: function(box) {
      return {
        title: box.title,
        code: box.code,
        userId: box.userId,
        price: box.price,
        pic: box.pic
      };
    },

    fromFirestore: function(snapshot, options) {
      const data = snapshot.data(options);
      return new Box({
        id: snapshot.id,
        title: data.title,
        code: data.code,
        userId: data.userId,
        price: data.price,
        pic: data.pic
      });
    }
  };

export { boxConverter };
export default Box;