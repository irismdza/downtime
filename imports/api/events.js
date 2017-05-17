import { Mongo } from 'meteor/mongo';

export const Events = new Mongo.Collection('events');

Meteor.methods({
  'events.addNewEvent' (eventInputValue) {

    events.insert({
      event: eventInputValue,
      location: 'locationInputValue',
      time: 'timeInputValue'
    });
  }

});