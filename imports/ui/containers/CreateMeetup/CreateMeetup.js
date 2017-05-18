import React, { Component } from 'react';
import Gandalf from 'gandalf-validator';

import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { createContainer } from 'meteor/react-meteor-data';
import { Meetups } from '../../../api/meetups';


class CreateMeetup extends Gandalf {

  constructor() {
    const fields = [
      {
        name: 'meetup',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'what would you like to do?',
        },
        debounce: 500,
      },
      {
        name: 'address',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'what is the address?',
        },
        debounce: 300,
      },
      {
        name: 'city',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'which city?',
        },
        debounce: 300,
      },
      {
        name: 'time',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'what time?',
        },
        debounce: 300,
      }
    ]
    super(fields);
  };


  handleSubmit() {
    const data = this.getCleanFormData();
    event.preventDefault();

    if (data) {
      Meteor.call('meetups.addNewMeetup', data);
    }
    if (!data) return;
  }

  render() {
    const fields = this.state.fields;

    return (
      <div>
      <Tabs>
        <Tab label="Post a new meetup" />
      </Tabs>
      <form className="create-meetup-form">
        { fields.meetup.element } <br />
        { fields.address.element } <br />
        { fields.city.element } <br />
        { fields.time.element } <br />
        <FlatButton onClick={() => this.handleSubmit()}>POST</FlatButton>
      </form>
    </div>
    );
  }
}


export default CreateMeetup;