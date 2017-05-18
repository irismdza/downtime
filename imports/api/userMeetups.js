import { Mongo } from 'meteor/mongo';

export const UserMeetups = new Mongo.Collection('userMeetups');

if (Meteor.isServer) {

  Meteor.methods({
    'userMeetups.addNotAttendMeetup' (data) {

      UserMeetups.insert({
        meetupId: data._id,
        userId: this.userId,
        attending: false
      });
    },
    'userMeetups.addAttendMeetup' (data) {
      UserMeetups.insert({
        meetupId: data._id,
        userId: this.userId,
        attending: true
      });
    }
  });

  Meteor.publish('userMeetups', () => {
    return UserMeetups.find({});
  });
}

