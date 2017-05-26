import React, { Component } from 'react';
import Gandalf from 'gandalf-validator';

import Snackbar from 'material-ui/Snackbar';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardTitle} from 'material-ui/Card';

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
          hintText: `What would you like to do?`,
        },
        debounce: 500,
      },
      {
        name: 'address',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: `Where do you want to meet?`,
        },
        debounce: 300,
      },
      {
        name: 'city',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: `In which city?`,
        },
        debounce: 300,
      },
      {
        name: 'time',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: `When do you want to meet?`,
        },
        debounce: 300,
      }
    ]
    super(fields);
  };

  handleTouchTap() {
    this.setState({
      open: true,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
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
      <div className="create-meetup-container">
      <Tabs>
        <Tab label="Post a new meetup" />
      </Tabs>
      <div className="meetup-form-container">
        <form className="create-meetup-form">
          <CardTitle subtitle="YOUR MEETUP" />
          { fields.meetup.element }
          <CardTitle subtitle="ADDRESS" />
          { fields.address.element }
          <CardTitle subtitle="CITY" />
          { fields.city.element }
          <CardTitle subtitle="TIME" />
          { fields.time.element } <br />
          <RaisedButton
            primary={true}
            label="Post your meetup"
            onClick={() => this.handleSubmit()} />
        </form>
      </div>
      <Snackbar
          open={this.state.open}
          message="New Meetup Posted"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
    </div>
    );
  }
}


export default CreateMeetup;
