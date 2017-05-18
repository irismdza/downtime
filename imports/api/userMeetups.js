import { Mongo } from 'meteor/mongo';

export const UserMeetups = new Mongo.Collection('userMeetups');

Meteor.methods({
  'userMeetups.addNewUserMeetup' (data) {

    userMeetups.insert({
      meetupId: this.meetupId,
      userId: this.userId,
      attending: boolean
    });
  }

});

