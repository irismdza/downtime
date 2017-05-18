import React, { Component } from 'react';
import Gandalf from 'gandalf-validator';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { createContainer } from 'meteor/react-meteor-data';
import { Events } from '../../../api/events';


class CreateEvent extends Gandalf {

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
      Meteor.call('events.addNewEvent', data);
    }    // If form is invalid, all error messages will show automatically
    // So you can simply exit the function
    if (!data) return;
  }

  render() {
    const fields = this.state.fields;

    return (
      // <div>
      <form>
        <h1>post a meetup</h1>
        { fields.meetup.element } <br />
        { fields.address.element } <br />
        { fields.city.element } <br />
        { fields.time.element } <br />
        <button onClick={() => this.handleSubmit()}>Submit</button>
      </form>
    // </div>
    );
  }
}


export default CreateEvent;