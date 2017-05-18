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
