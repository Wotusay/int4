import { v4 } from "uuid";
import { decorate, observable, action, computed } from "mobx";

class Box {
    constructor({ id = v4(), store, userId, activities= [], price = '€40', code, title }) {
        this.id =  id;
        this.store= store;
        this.userId= userId; //maar 1 user
        this.activities = activities; //apartre model
        this.title= title;
        this.price = price;
        this.code= code;

    }


}

const boxConverter = {
    toFirestore: function(box) {
      return {
        code: box.code,
        title: box.title,
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

export {boxConverter};
export default Box;