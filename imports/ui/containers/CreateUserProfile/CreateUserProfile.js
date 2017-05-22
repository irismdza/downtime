import React, { Component } from 'react';
import Gandalf from 'gandalf-validator';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';


class CreateUserProfile extends Gandalf {

  constructor() {
    const fields = [
      {
        name: 'name',
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
      <form className="create-user-profile-form">
        { fields.name.element } <br />
        { fields.age.element } <br />
        { fields.sex.element } <br />
        { fields.home.element } <br />
        <FlatButton onClick={() => this.handleSubmit()}>Create</FlatButton>
      </form>
    </div>
    );
  }
}


export default CreateUserProfile;
