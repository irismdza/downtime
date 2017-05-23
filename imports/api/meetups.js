import { Mongo } from 'meteor/mongo';
import { Meetups, UserMeetups } from './collections';

const userCanDeleteMeetup = (userId, meetupHostId) => (
  userId && userId === meetupHostId
);

Meteor.methods({
  'meetups.addNewMeetup' (data) {

    Meetups.insert({
      meetup: data.meetup,
      address: data.address,
      city: data.city,
      time: data.time,
      createdBy: this.userId,
    });
  },
  'meetups.deleteMeetup' (data) {

    if (!userCanDeleteMeetup(this.userId, meetups.createdBy)) {
      throw new Meteor.Error('not-authorized');
    }

    Meetups.remove(data._id)
  },

});

if (Meteor.isServer) {
  console.log("I AM ALIVE");
  Meteor.publish('meetups', () => {
    return Meetups.find();
  });
}
