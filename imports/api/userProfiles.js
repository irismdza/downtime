import { Mongo } from 'meteor/mongo';
import { UserProfiles } from './collections';


Meteor.methods({
  'userProfiles.addNewProfile' (data) {

    UserProfiles.insert({
      name: data.meetup,
      age: data.address,
      sex: data.city,
      home: data.time,
      user: this.userId,
    });
  }

});

if (Meteor.isServer) {
  console.log("I AM a PROFILE");
  Meteor.publish('userProfiles', () => {
    return UserProfiles.find();
  });
}
