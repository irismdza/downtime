import { Mongo } from 'meteor/mongo';

export const Meetups = new Mongo.Collection('meetups');

Meteor.methods({
  'meetups.addNewMeetup' (data) {

    Meetups.insert({
      meetup: data.meetup,
      address: data.address,
      city: data.city,
      time: data.time,
    });
  }

});
