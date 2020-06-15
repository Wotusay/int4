import { v4 } from "uuid";

class Box {
    constructor({ id = v4(), store, userId, code, price, title }) {
        this.id = id;
        this.store = store;
        this.title = title; 
        this.price =price; 
        this.userId = userId;
        this.code = code;

    }


}

const boxConverter = {
    toFirestore: function(box) {
      return {
        title: box.title,
        code: box.code,
        userId: box.userId,
        price: box.price
      };
    },

    fromFirestore: function(snapshot, options) {
      const data = snapshot.data(options);
      return new Box({
        id: snapshot.id,
        title: data.title,
        code: data.code,
        userId: data.userId,
        price: data.price
      });
    }
  };

export { boxConverter };
export default Box;