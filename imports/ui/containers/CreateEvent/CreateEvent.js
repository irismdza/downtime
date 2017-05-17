import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CreateEvent extends Component {

  constructor() {
    super();
    this.state = {
      eventInputValue: '',
      locationInputValue: '',
      timeInputValue: ''
    };
  }

  // add a new event to the database
  addNewEvent(event) {
    event.preventDefault();
    Meteor.call('events.addNewEvent', this.state.eventInputValue);
  }

  render() {
    return (
      <div>
        <form name="createEvent" value={this.state.eventInputValue} onSubmit={this.addNewEvent}>
        <TextField
          hintText="what do you want to do?"
        /><br />
        <br />
        <TextField
          hintText="where at?"
        /><br />
        <TextField
          hintText="what time?"
        /><br />
        <RaisedButton label="post" secondary={true} />
        </form>
      </div>
    );
  }
}

export default CreateEvent;