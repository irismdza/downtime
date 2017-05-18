import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Meetups } from '../../api/collections';

Meteor.startup(() => {

  let userId = '';
  if(Meteor.users.find().count() === 0) {
    userId = Accounts.createUser({
      username: 'princessLeia',
      password: '123456'
    })
  }

  if(Meetups.find().count() === 0 ) {
    Meetups.insert({
      meetup: 'use the force',
      address: 'in a galaxy far, far away',
      city: 'Vancouver',
      time: 'once upon a time',
      createdBy: 'userId'
    });
  }
});
