import { Mongo } from 'meteor/mongo';
import { Meetups, UserMeetups } from './collections';

Meteor.methods({
  'meetups.addNewMeetup' (data) {

    Meetups.insert({
      meetup: data.meetup,
      address: data.address,
      city: data.city,
      time: data.time,
      createdBy: this.userId,
    });
  }

});

if (Meteor.isServer) {
  console.log("I AM ALIVE");
  Meteor.publish('newMeetups', () => {
    return Meetups.find();
  });
}
