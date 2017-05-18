import { Mongo } from 'meteor/mongo';

export const Events = new Mongo.Collection('events');

Meteor.methods({
  'events.addNewEvent' (e) {

    Events.insert({
      meetup: 'meetupInputValue',
      address: 'locationInputValue',
      city: 'city',
      time: 'timeInputValue'
    });
  }

});
