import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {

  let userId = '';
  if(Meteor.users.find().count() === 0) {
    userId = Accounts.createUser({
      username: 'mrsawyer',
      password: '123456'
    })
  }
});