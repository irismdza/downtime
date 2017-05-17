import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Events } from '../../api/events';

Meteor.startup(() => {

  let userId = '';
  if(Meteor.users.find().count() === 0) {
    userId = Accounts.createUser({
      username: 'princessLeia',
      password: '123456'
    })
  }

  if(Events.find().count() === 0 ) {
    Events.insert({
      event: 'use the force',
      location: 'in a galaxy far, far away',
      time: 'once upon a time'
    });
  }
});
