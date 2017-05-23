import React, { Component } from 'react';
import Gandalf from 'gandalf-validator';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardTitle} from 'material-ui/Card';
import { createContainer } from 'meteor/react-meteor-data';

import { UserProfiles } from '../../../api/collections';


class CreateUserProfile extends Gandalf {

  constructor() {
    const fields = [
      {
        name: 'fullname',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: `what is your name?`,
        },
        debounce: 500,
      },
      {
        name: 'age',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: `how old are you?`,
        },
        debounce: 300,
      },
      {
        name: 'sex',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: `what is your sex?`,
        },
        debounce: 300,
      },
      {
        name: 'home',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: `where are you from?`,
        },
        debounce: 300,
      }
    ]
    super(fields);
  };

  handleSubmit() {
    const data = this.getCleanFormData();
    event.preventDefault();
    console.log(data);

    if (data) {
      console.log('there is data')
      Meteor.call('userProfiles.addNewProfile', data);
    }
    if (!data) return;
  }

  render() {
    const fields = this.state.fields;

    return (
      <div>
      <Tabs>
        <Tab label="Create a Profile" />
      </Tabs>
      {/*{
        !this.props.users &&*/}
      <form className="create-user-profile-form create-meetup-form">
        <CardTitle subtitle="FULL NAME" />
        { fields.fullname.element }
        <CardTitle subtitle="AGE" />
        { fields.age.element }
        <CardTitle subtitle="GENDER" />
        { fields.sex.element }
        <CardTitle subtitle="CITY" />
        { fields.home.element } <br />
        <RaisedButton
          primary={true}
          label="Create your profile"
          onClick={() => this.handleSubmit()} />
      </form>
      {/*}*/}
      {/*{
        !!this.props.users &&
        <div> Good News, you have already created a Profile </div>
      }*/}
    </div>
    );
  }
}

export default createContainer(() => {
  const userProfilesCursor = Meteor.subscribe('userProfiles');
  let users;

  if(userProfilesCursor.ready()) {
    users = UserProfiles
      .find({user: Meteor.userId() }, {fields:{ meetupId: 1 }})
      .fetch()
      .map(user =>  user.user);
  }
  console.log(users);
  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    users
  };
}, CreateUserProfile);

