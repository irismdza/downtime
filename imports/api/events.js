import { Mongo } from 'meteor/mongo';

export const Events = new Mongo.Collection('events');

Meteor.methods({
  'events.addNewEvent' (data) {

    Events.insert({
      meetup: data.meetup,
      address: data.address,
      city: data.city,
      time: data.time,
      createdBy: 'user_id',
    });
  }

});

if (Meteor.isServer) {
  Meteor.publish('newMeetups', (seenMeetupIds = []) => {
    console.log('IN PUBLISH');
    return Events.find({ _id: { $nin: seenMeetupIds } });
  });
}
