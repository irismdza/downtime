import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
  console.log("I AM ALIVE");
  Meteor.publish('downtimeUsers', function () {
    return Meteor.users.find({});
  });
}
