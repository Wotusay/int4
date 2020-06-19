import { v4 } from "uuid";
import { decorate, observable, action } from "mobx";

class Activity {
    constructor({ id = v4(), store,description , duration, complete = false, title, city, info,boxCode  }) {
        this.id =  id;
        this.store= store;
        this.title= title;
        this.duration = duration;
        this.description = description ;
        this.complete= complete;
        this.city =city;
        this.info = info;
        this.boxCode =boxCode
    }
    
    activityDone() {
        this.complete = true;
    }

}

decorate(Activity, {
    complete: observable,
    activityDone: action
  });

const activityConverter = {
    toFirestore: function(activity) {
      return {
        id: activity.id,
        title: activity.title,
        city: activity.city,
        info: activity.info,
        boxCode: activity.boxCode,
        duration: activity.duration,
        description: activity.description

      };
    },
    fromFirestore: function(snapshot, options) {
      const data = snapshot.data(options);
      return new Activity({   
        id:  snapshot.id,
        title: data.title,
        info: data.info,
        city: data.city,
        boxCode: data.boxCode,
        duration: data.duration,
        description: data.description

      });
    }
  };

export { activityConverter };
export default Activity;